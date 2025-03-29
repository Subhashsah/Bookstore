import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function LogOutButton() {
    const user = useContext(AuthContext)
 const handlelogout = ()=>{
    try {
        user.setAuthUser(null)
        localStorage.removeItem("user")
        window.re
        toast.success("Logout successfully")
    }

   
    catch (error) {
       toast.error("error", error.message)
    }

 }
  return (
   <>
   <button onClick={handlelogout}className="bg-red-700 px-3 py-2 rounded-md hover:bg-amber-900">LogOut</button>
   </>
  )
}
