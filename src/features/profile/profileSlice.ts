import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: 'Sebastian garcia',
        email: 'sebastian@example.com',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setName, setEmail } = profileSlice.actions;

export default profileSlice.reducer;