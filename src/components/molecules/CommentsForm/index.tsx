"use client";
import { TextArea } from "@/components/atoms/TextArea";
import { Button } from "@/components/atoms/Button";
import { InputFile } from "@/components/atoms/InputFile";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addComment } from "@/features/posts/postsSlice";

export const CommentsForm = ({ postId }: CommentsFormProps) => {
  const [comment, setComment] = useState<string>("");
  const [commentMedia, setCommentMedia] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profile.id);
  const [error, setError] = useState<{
    comment: string;
    image: string;
    general: string;
  }>({
    comment: "",
    image: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleGeneralError = (message: string) => {
    setError((prev) => ({
      ...prev,
      general: message,
    }));
    setIsSubmitting(false);
    setTimeout(() => {
      setError((prev) => ({ ...prev, general: "" }));
    }, 2000);
  };

  return (
    <>
      <form
        onSubmit={(ev) => {
          setIsSubmitting(true);
          ev.preventDefault();
          ev.stopPropagation();
          if (!comment && !commentMedia) {
            handleGeneralError("Please enter a comment or upload an image.");
            return;
          }
          if (error.comment || error.image) {
            handleGeneralError("Please fix the errors before submitting.");
            return;
          }

          dispatch(
            addComment({
              post_id: postId,
              user_id: userId,
              content: comment,
              image: commentMedia,
            })
          );
          setIsSubmitting(false);
          setComment("");
          setCommentMedia(null);
        }}
      >
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-platinum/2 rounded-t-lg">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <TextArea
              id="commentContent"
              rows={4}
              className="w-full px-2 py-2 rounded-sm text-sm text-platinum border-0 placeholder:text-platinum/80 bg-platinum/10"
              placeholder="Write a comment..."
              maxLength={100}
              action={(ev) => setComment(ev.target.value)}
              errorAction={(message) =>
                setError((prev) => ({ ...prev, comment: message }))
              }
              initialValue={comment}
            />
            <InputFile
              action={(ev) => {
                const file = ev.target.files?.[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setCommentMedia(reader.result as string);
                    }
                    reader.readAsDataURL(file);
                }
              }}
              errorAction={() =>
                setError((prev) => ({ ...prev, image: "Failed to load image" }))
              }
              initialValue={commentMedia}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
            <Button
              variant="primary"
              type="submit"
              size="small"
              className="text-xs text-center font-bold"
              isLoading={isSubmitting}
            >
              Post comment
            </Button>
          </div>
          {error.general && (
            <p className="px-3 py-1 text-xs text-red-400 tracking-wide font-bold">
              {error.general}
            </p>
          )}
        </div>
      </form>
    </>
  );
};
