import { ProfileImage } from "@/components/atoms/ProfileImage"
import { getUserInfo } from "@/utils/getUserInfo"
import Image from "next/image"

export const CommentsCard = ({
    comment,
}:CommentCardProps) => {
    return (
        <div className="flex flex-col gap-2 border-b border-b-platinum/20 p-5">
            <div className="font-bold text-platinum flex items-center gap-2">
                <ProfileImage
                    src={getUserInfo(comment.user_id)?.image as string}
                    alt={`Profile Image From ${getUserInfo(comment.user_id)?.name}`}
                    size="sm"
                />
                {getUserInfo(comment.user_id)?.name}:
            </div>
            <div className="flex gap-2 items-center">
                    {
                        comment.image && (
                            <div className="w-20 h-20 mb-2 relative">
                                <Image
                                    src={comment.image}
                                    alt={`Image from ${getUserInfo(comment.user_id)?.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                    )}
                    {
                        comment.content !== '' && (
                            <p className="text-platinum">
                                {comment.content}
                            </p>
                        )
                    }
            </div>
            </div>
    )
}