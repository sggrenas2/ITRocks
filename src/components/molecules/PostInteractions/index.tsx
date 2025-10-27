'use client'
import { Button } from '@/components/atoms/Button'
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { likePost } from '@/features/commonActions'
import { openDrawer } from '@/features/posts/postsSlice'

export const PostInteractions = ({likes, comments, post_id, withComments}:PostInteractionsProps) => {
    
    const isLiked = useAppSelector(state => state.profile.likedPosts.includes(post_id))
    const dispatch = useAppDispatch()
    
    return (
        <div className='flex gap-[0.5rem] border-b border-b-platinum/20 pb-2'>
            <Button
                variant='icon'
                className='bg-transparent border-none text-platinum'
                onClick={() => dispatch(likePost({isLiked, post_id}))}
            >
                <span className={`${!isLiked ? 'grayscale' : ''}`}>
                    {likes} ❤️
                </span>
            </Button>
            {
                withComments && (
                    <Button
                        variant='icon'
                        className='bg-transparent border-none text-platinum'
                        onClick={() => dispatch(openDrawer({isOpen: true, post: post_id}))}
                    >
                        <span>
                            {comments} 💬
                        </span>
                    </Button>
                )
            }
        </div>
    )
}