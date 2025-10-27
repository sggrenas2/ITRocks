import { CommentsCard } from "@/components/molecules/CommentCard";
import { CommentsForm } from "@/components/molecules/CommentsForm";

export const CommentsSection = (
    {comments, postId}: CommentsSectionProps
) => {

    if(comments.length === 0){
        return (
            <>
                <p className="text-center font-bold text-platinum p-5">No Comments Yet</p>
                <div className="px-2 py-2">
                    <CommentsForm postId={postId} />
                </div>
            </>
        )
    }

    return (
        <>
            {
                comments.map((comment, index) => (
                    <CommentsCard 
                        key={index}
                        comment={comment}
                    />
                ))
            }
            <div className="px-2 py-2">
                <CommentsForm postId={postId}/>
            </div>
        </>
    )
}