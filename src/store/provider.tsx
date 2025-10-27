'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './index'
import { getSessionThunk } from '@/features/auth/authSlice'
import { loadPosts } from '@/features/posts/postsSlice'
import { loadLikes } from '@/features/profile/profileSlice'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(getSessionThunk())
  }

  useEffect(() => {
    if(storeRef.current){
      const id = storeRef.current.getState().auth.id
      storeRef.current.dispatch(loadLikes(JSON.parse(localStorage.getItem(`user-likes-${id}`) ?? "[]")))
      storeRef.current.dispatch(loadPosts(JSON.parse(localStorage.getItem('comments') ?? "[]")))
    }
  },[])

  return <Provider store={storeRef.current}>{children}</Provider>
}