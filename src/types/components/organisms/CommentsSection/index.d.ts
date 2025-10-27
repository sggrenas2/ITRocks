interface CommentsSectionProps {
    postId: Pick<Post, 'post_id'> | number;
    comments: Comments[];
}
