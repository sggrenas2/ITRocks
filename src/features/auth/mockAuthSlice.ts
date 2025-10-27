import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getSession } from 'next-auth/react';
export const getSessionThunk = createAsyncThunk('auth/session', async() => {
    const session = await getSession();
    return session;
})

const INITIAL_STATE:AuthState = {
        name: 'prueba storybook',
        email: 'pruebaStorybook@prueba.com',
        image: 'https://xsgames.co/randomusers/assets/avatars/female/10.jpg',
        token: 'QQQQQQQQQQQ',
        id: '1',
        status: 'default',//'loading' | 'succeeded' | 'failed'
        session: "!!!!!!!!!!"
    }

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        logIn: (state, action) => {
            state.name = action.payload;
        },
        logOut: (state, action) => {
            state.email = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSessionThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getSessionThunk.fulfilled, (state,action) => {
                const session = action.payload ?? {user: INITIAL_STATE}
                state.status = 'succeeded';
                state.session = action.payload;
                state.name = session.user?.name ?? '';
                state.id = session.user?.id ?? '';
                state.image = session.user?.image ?? '';
                state.email = session.user?.email ?? '';
            })
            .addCase(getSessionThunk.rejected, (state) => {
                state.status = 'failed'
            })
    },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;