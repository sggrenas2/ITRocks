'use client'
import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import PostCard from "@/components/organisms/PostCard"
import Drawer from "@/components/template/Drawer"
import { useEffect } from "react"
import { loadLikes } from "@/features/profile/mockProfileSlice"

export const Feed = () => {

    const posts = useAppSelector(state => state.posts.posts)
    const id = useAppSelector(state => state.auth.id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadLikes(JSON.parse(localStorage.getItem(`user-likes-${id}`) ?? "[]")))
    },[dispatch,id])

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