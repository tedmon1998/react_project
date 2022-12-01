import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'


const PostItem = (props) => {
   // console.log(props.remove(props.post.id));

   const navigate = useNavigate()

   return (
      <div className="container">
         <div className="post">
            <div className="post__content">
               {/* <strong>{props.number + 1} {props.post.title}</strong> */}
               <strong>{props.post.id} {props.post.title}</strong>
               <div>
                  {props.post.content}
               </div>
            </div>
            <div className="post__btns">
               <MyButton onClick={() => props.remove(navigate(`/posts/${props.post.id}`))} >Открыть</MyButton>
               <MyButton onClick={() => props.remove(props.post.id)} >Удалить</MyButton>
            </div>
         </div>
      </div>
   )
}

export default PostItem