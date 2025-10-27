'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './index'
import { getSessionThunk } from '@/features/auth/authSlice'
import { loadPosts } from '@/features/posts/postsSlice'

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
      storeRef.current.dispatch(loadPosts(JSON.parse(localStorage.getItem('comments') ?? "[]")))
    }
  },[])

  return <Provider store={storeRef.current}>{children}</Provider>
}