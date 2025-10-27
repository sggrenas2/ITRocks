import {createSlice} from '@reduxjs/toolkit';
import { getPosts } from '@/utils/getPosts';
import { likePost } from '../commonActions';

const INITIAL_STATE: PostsState = {
    posts: [],
    drawerContent: {
        isOpen: false,
        post: null,
    }
}
const postsSlice = createSlice({
    name: 'posts',
    initialState: INITIAL_STATE,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = getPosts(action.payload);
        },
        openDrawer: (state, action) => {
            if(action.payload.post){
                state.drawerContent.post = state.posts.find(post => post.post_id === action.payload.post) ?? null;
                state.drawerContent.isOpen = true;
            } else {
                state.drawerContent.isOpen = false;
                state.drawerContent.post = null;
            }
        },
        addComment: (state, action) => {
            const existingPost = state.posts.find(post => post.post_id === action.payload.post_id)
            const post = {
                post_id: action.payload.post_id,
                    user_id: action.payload.user_id,
                    likes: 0,
                    content: action.payload.content,
                    image: action.payload.image || null,
            }
            const savedComments = JSON.parse(localStorage.getItem('comments') ?? "[]");
            savedComments.push(post);
            localStorage.setItem('comments', JSON.stringify(savedComments));
            if(existingPost){
                existingPost.comments.push(post);
                existingPost.commentsCount +=1;
            }
            if(state.drawerContent.post && state.drawerContent.post.post_id === action.payload.post_id){
                state.drawerContent.post.comments.push(post);
                state.drawerContent.post.commentsCount +=1;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(likePost, (state, action) => {
                const existingPost = state.posts.find(post => post.post_id === action.payload.post_id)
                if(existingPost){
                    existingPost.likes = action.payload.isLiked ? existingPost.likes -1 : existingPost.likes + 1;
                }
                if(state.drawerContent.post && state.drawerContent.post.post_id === action.payload.post_id){
                    state.drawerContent.post.likes = action.payload.isLiked ? state.drawerContent.post.likes -1 : state.drawerContent.post.likes + 1;
                }
            })
    }
});

export const { loadPosts, openDrawer, addComment } = postsSlice.actions;

export default postsSlice.reducer;