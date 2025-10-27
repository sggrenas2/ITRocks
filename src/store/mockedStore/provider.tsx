'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './index'
import { loadPosts } from '@/features/posts/mockPostsSlice'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if(storeRef.current){
      storeRef.current.dispatch(loadPosts([]))
    } 
  },[])

  return <Provider store={storeRef.current}>{children}</Provider>
}