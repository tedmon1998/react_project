import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

const Comments = () => {
   const params = useParams()
   const [post, setPost] = useState({})

   useEffect(() => {
      fetchingById(params.id)
   }, [])

   const [fetchingById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
   })

   return (
      <div>
         <h1>Page comment post with ID = {params.id}</h1>
         {
            isLoading
               ? <Loader />
               : <div>{post.id}. {post.title}</div>
         }
      </div>
   )
}

export default Comments
