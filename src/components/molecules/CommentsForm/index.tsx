"use client";
import { TextArea } from "@/components/atoms/TextArea";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
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
            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              <Button
                action={() => {
                  const input = document.querySelector("input#imageUpload");
                  if (input) (input as HTMLInputElement).click();
                }}
                variant="icon"
                type="button"
                className="inline-flex justify-center items-center p-2 text-platinum/80 rounded-sm cursor-pointer hover:text-platinum hover:bg-gray-100 dark:text-gray-400"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </Button>
              <Input className="hidden" id="imageUpload" type="file" />
            </div>
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
