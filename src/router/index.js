import About from '../pages/About'
import Posts from '../pages/Posts'
import Comments from '../pages/Comments'
import Login from '../pages/Login'

export const privateRoutes = [
   { path: "/about", component: About, exact: true },
   { path: "/posts", component: Posts, exact: true },
   { path: "/posts/:id", component: Comments, exact: true },
]


export const publicRoutes = [
   { path: "/login", component: Login, exact: true },
]