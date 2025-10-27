import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from '../features/profile/profileSlice';
import AuthReducer from '../features/auth/authSlice'
import PostsReducer from '../features/posts/postsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: ProfileReducer,
      auth: AuthReducer,
      posts: PostsReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']