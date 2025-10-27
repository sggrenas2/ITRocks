import {createSlice} from '@reduxjs/toolkit';
import { likePost } from '../commonActions';
import { getSessionThunk } from '../auth/authSlice';

const INITIAL_STATE: ProfileState = {
        name: '',
        email: '',
        id: '',
        image: '',
        likedPosts: []
    }


const profileSlice = createSlice({
    name: 'profile',
    initialState: INITIAL_STATE,
    reducers: {
        loadLikes: (state, action) => {
            state.likedPosts = action.payload 
        },
    },
    extraReducers:(builder) => {
        builder
            .addCase(likePost, (state, action) => {
                if(action.payload.isLiked){
                    state.likedPosts = state.likedPosts.filter(post => post !== action.payload.post_id)
                } else {
                    state.likedPosts = [action.payload.post_id, ...state.likedPosts]
                }
                localStorage.setItem(`user-likes-${state.id}`, JSON.stringify(state.likedPosts))
            })
            .addCase(getSessionThunk.fulfilled, (state,action) => {
                const session = action.payload ?? {user: INITIAL_STATE}
                state.name = session.user?.name ?? '';
                state.id = session.user?.id ?? '';
                state.image = session.user?.image ?? '';
                state.email = session.user?.email ?? '';
            })
    }
});

export const { loadLikes } = profileSlice.actions;

export default profileSlice.reducer;