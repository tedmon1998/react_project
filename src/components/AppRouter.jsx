import React, { useContext } from 'react'
import Errors from '../pages/Errors'
import Login from '../pages/Login'
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'

const AppRouter = () => {
   const { isAuth } = useContext(AuthContext)
   return (
      isAuth
         ?
         < Routes >
            {
               privateRoutes.map(rout =>
                  <Route path={rout.path} element={<rout.component />} exact={rout.exact} key={rout.path} />
               )
            }
            <Route path="/" element={<Login />} />
            <Route path='*' element={<Errors />} />
         </Routes >
         :
         < Routes >
            {
               publicRoutes.map(rout =>
                  <Route path={rout.path} element={<rout.component />} exact={rout.exact} key={rout.path} />
               )
            }
            <Route path="/" element={<Login />} />
            <Route path='*' element={<Errors />} />
         </Routes >
   )
}


export default AppRouter