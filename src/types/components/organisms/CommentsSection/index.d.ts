interface CommentsSectionProps {
    postId: Pick<Post, 'post_id'>;
    comments: Comments[];
}
