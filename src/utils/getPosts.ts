import { Posts, Comments } from "./constants";

export const getPosts = (savedComments: Comments[]) => {
    const allComments = [...Comments, ...savedComments ?? []]
    return Posts.map(post => {
        const comments = allComments.filter(comment => comment.post_id === post.post_id)
        return {
            ...post,
            comments,
            commentsCount: comments.length
        }
    })
}