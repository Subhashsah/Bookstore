import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
   <hr />
    <div className='max-width-screen container m-auto md:px-20 px-4 mt-16'>
    
        <div className="flex flex-col items-center justify-center">
         <div className='flex flex-row gap-6
         '>
         <AiFillFacebook size={25}/>
         <FaInstagramSquare size={25}/>
         <FaLinkedin size={25}/>
         </div>
         <div className="mt-8 border-t pt-4 flex flex-col items-center">
         <p>&copy;2025 your Compay.All the right reserved</p>
         <p className="text-md mt-2">Made with <span className="text-red-500">❤️</span>Subhash</p>
         </div>
         </div>
    </div>
    </>
  )
}
