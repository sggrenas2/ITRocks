interface Post {
    comments: Comments[];
    commentsCount: number;
    post_id: number;
    user_id: number;
    likes: number;
    images: string[];
    description: string;
}

interface PostsState {
    posts: Array<Post>;
    drawerContent: DrawerContent;
}

interface Comments {
    post_id: number;
    user_id: number;
    likes: number;
    content: string;
    image: string | null;
}

interface DrawerContent {
        isOpen: boolean;
        post: Post | null;
    }