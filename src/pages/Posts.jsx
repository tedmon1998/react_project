import React, { useState, useEffect } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { usePosts } from '../components/hooks/usePosts'
import { useFetching } from '../components/hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useGetPages } from '../components/hooks/useGetPages'
import Pagination from '../components/UI/pagination/Pagination'
// import { getPageCount, getPagesArray } from './utils/pages'


function Posts() {



   const [posts, setPosts] = useState([])
   const [totalCounter, setTotalCounter] = useState(0)
   const [filter, setFilter] = useState({ sort: '', query: '' })
   const [modal, setModal] = useState(false)
   const [limit, setLimit] = useState(10)
   const [page, setPage] = useState(1)

   useEffect(() => {
      fetchPosts(page)
   }, [])

   const [fetchPosts, loadingPosts, errorPosts] = useFetching(async (page) => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      setTotalCounter(response.headers['x-total-count'])
   })

   const pagesArray = useGetPages(totalCounter, limit)

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }

   const removePost = (postId) => {
      setPosts(posts.filter(e => e.id !== postId))
   }

   const changePage = (numberPage) => {
      setPage(numberPage)
   }

   const sortedAndSeatchPosts = usePosts(posts, filter.sort, filter.query)

   return (
      <div className='wrapper'>
         <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} id={posts.length ? posts[posts.length - 1].id : 0} />
         </MyModal>
         <PostFilter filter={filter} setFilter={setFilter} />
         {
            errorPosts &&
            <h1>Произошла ошибка ${errorPosts}</h1>
         }
         {
            loadingPosts
               ? <Loader />
               : <PostList
                  posts={sortedAndSeatchPosts}
                  title={"React Project"}
                  remove={removePost} />
         }
         <Pagination
            pagesArray={pagesArray}
            changePage={changePage}
            page={page} />
      </div>
   )
}

export default Posts
