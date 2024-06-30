import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home,About,Contact,User,GitHub,GitHubLoader,KSM} from './Components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './App.jsx'

/* Approach 1 to create a router
const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        //path:'',
        element: <Home/>
      },
      {
        path: 'About',
        element: <About/>
      },
      {
        path: 'Contact',
        element: <Contact/>
      }
    ]
  }
])
 */

// Approach 2 to create a router  [Prefered]
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}>
        <Route path='KSM' element={<KSM/>}/>
      </Route>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userId' element={<User/>}/> 
      <Route 
        loader={GitHubLoader}
        path='GitHub' 
        element={<GitHub/>}/> 
    </Route>
  )
)

//In 'User/:userId' , :userId is used to define params that could be acces using import {useParams} from 'react-router-dom' and directly using it in our code
//In /github we used loader which will call api upon hovering and will store it in cache and makes processing faster

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
