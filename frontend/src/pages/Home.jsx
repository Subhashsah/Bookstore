import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Api from '../ utils/Api'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <>
   <NavBar/>
   <Banner/>
   <Api/>
   <Footer/>
   </>
  )
}
