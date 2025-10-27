'use client'
import { useAppSelector } from "@/store/hooks"
import PostCard from "@/components/organisms/PostCard"
import Drawer from "@/components/template/Drawer"

export const Feed = () => {

    const posts = useAppSelector(state => state.posts.posts)

    if(posts.length === 0){
        return <p>No Post Yet</p>
    }

    return (
        <>
            <div className="z-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    posts.map(post => (
                        <PostCard 
                            key={`${post.post_id}-${post.user_id}`}
                            {...post}
                            images={post.images}
                        />
                    ))
                }
            </div>
            <Drawer />
        </>
    )
}