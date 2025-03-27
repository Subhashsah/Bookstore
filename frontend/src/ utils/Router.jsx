import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Course from '../pages/Course'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Signup from '../components/Signup'


export default function Router() {
  return (
    <>
   
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path= "/signup" element={<Signup/>}/>
       
    </Routes>
  
    </>
  )
}
