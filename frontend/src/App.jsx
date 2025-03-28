import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Router from './ utils/Router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router/>
     <Toaster/>
    </>
  )
}

export default App
