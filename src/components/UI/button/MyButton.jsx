import React from 'react'
import classes from './MyButton.module.css'


const MyButton = (props) => {
   return (
      <button className={props.status ? classes.page__current : classes.myBtn} {...props}>
      </button>
   )
}

export default MyButton
