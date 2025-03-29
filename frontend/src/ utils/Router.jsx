import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Course from '../pages/Course'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Signup from '../components/Signup'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Router() {
  const user = useContext(AuthContext)
  console.log("user:",user)
  console.log((user.authUser))
  return (
    <>
   
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={user.authUser?<Course/>:<Navigate to="/signup"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path= "/signup" element={<Signup/>}/>
       
    </Routes>
  
    </>
  )
}
