import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from '../features/profile/profileSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: ProfileReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']