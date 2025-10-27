import { CardHeader } from "@/components/molecules/CardHeader";
import { Carousel } from "../Carrousel";
import { FC } from 'react'
import { PostInteractions } from "@/components/molecules/PostInteractions";

export const PostCard:FC<PostCardProps> = ({
    post_id,
    user_id,
    description,
    images,
    likes,
    commentsCount,
    withComments = true,
    fullText = false
}) => {
    return (
        <div key={post_id} className="flex flex-col gap-[0.5rem] bg-oxford-blue/80 rounded-lg shadow-sm">
            <CardHeader id={user_id} />                    
            <Carousel images={images.map((image, index) => ({ url: image, alt: `post image ${index}` }))} />
            <div className="px-5 pt-2">
                <PostInteractions 
                    likes={likes}
                    post_id={post_id}
                    comments={commentsCount}
                    withComments={withComments}
                />
            </div>
            <div className="p-5">
                <p className={`mb-3 font-normal text-platinum ${fullText ? '' : 'line-clamp-3'}`}>{description}</p>
            </div>
        </div>
    )
}

export default PostCard;
