import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Api from './ utils/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
      <Api/>
      <Footer/>
     
    </>
  )
}

export default App
