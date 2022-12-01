import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from "react-transition-group"


const PostList = ({ posts, title, remove }) => {
   return (
      <div>
         <h1>{title}</h1>
         {
            posts.length
               ? <TransitionGroup>
                  {posts.map((post, index) =>
                     <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="itemPost"
                     >
                        <PostItem post={post} remove={remove} number={index} />
                     </CSSTransition>
                  )}
               </TransitionGroup>
               : <h1>Нет статей</h1>
         }
      </div>
   )
}

export default PostList