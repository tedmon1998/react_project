import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {

   const sortedPosts = useMemo(() => (
      sort ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts
   ), [sort, posts])

   return sortedPosts
}

export const usePosts = (posts, sort, query) => {

   const sortedPosts = useSortedPosts(posts, sort)

   const sortedAndSeatchPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
   }, [query, sortedPosts])

   return sortedAndSeatchPosts
}