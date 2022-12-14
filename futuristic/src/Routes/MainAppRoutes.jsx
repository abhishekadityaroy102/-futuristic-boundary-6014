import React from 'react'
import {Routes,Route} from "react-router-dom"
import AddToCart from '../Component/AddToCart/AddToCart'
import Myorder from '../Component/AddToCart/Myorder'
import Courses from '../Component/Courses/Courses'
import Dashboard from '../Component/Dashboard/Dashboard'
import Homepage from '../Component/Homepage/Homepage'
import Jobs from '../Component/Jobsection/Jobs'
import Login from '../Component/LoginSignup/Login'
import Signup from '../Component/LoginSignup/Signup'
import Profile from '../Component/Profile/Profile'
import Blog from '../Pages/Blog'
import Search from '../Pages/Search'
import RequireAuthRoute from './RequireAuthRoute'
const MainAppRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Homepage/>}></Route>
     <Route path='/dashboard' element={<RequireAuthRoute><Dashboard/></RequireAuthRoute>}></Route>
     <Route path="/job-search" element={<Jobs/>}></Route>
     <Route path="/job-search:query" element={<Jobs/>}></Route>
     <Route path="/search" element={<Search/>}></Route>
     <Route path="/courses" element={<Courses/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/user-profile" element={<RequireAuthRoute><Profile/></RequireAuthRoute>}></Route>
     <Route path="/blogs" element={<Blog/>}></Route>
     <Route path="/cart" element={<AddToCart/>}></Route>
     <Route path="my-order" element={<Myorder/>}></Route>
     <Route path="/blogs"  element={<Blog/>} />
    </Routes>
  )
}

export default MainAppRoutes