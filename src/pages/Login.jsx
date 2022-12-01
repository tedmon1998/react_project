import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext)
   const login = event => {
      event.preventDefault()
      setIsAuth(true)
      console.log(isAuth);
   }

   return (
      <div>
         <h1>Page for autherization</h1>
         <form onSubmit={login}>
            <MyInput type="text" placeholder="login" />
            <MyInput type="password" placeholder="password" />
            <MyButton type="submit">Enter</MyButton>
         </form>
      </div>
   )
}

export default Login