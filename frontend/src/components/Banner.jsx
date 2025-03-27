import React from 'react'
import { MdEmail } from "react-icons/md";

export default function Banner() {
  return (
    <>
    <div className='max-w-screen container m-auto md:px-20 px-4 mt-48 md:mt-48 flex flex-col  md:flex-row gap-12 my-10'>
    <div className='md:w-1/2 order-2 md:order-1'>
    <div className="flex flex-col gap-6">
        <h1 className="md:text-4xl md:font-bold text-2xl font-semibold ">Hyy, welcome here to learn <span className="text-pink-400">something new everyday!!!</span></h1>
         <p className="md:text-xl text-md text-justify ">"Reading a book every day enhances knowledge, improves focus, and boosts creativity. It expands vocabulary, strengthens critical thinking, and fosters personal growth. A daily reading habit transforms perspectives and enriches life meaningfully."</p>
         <div className='relative flex flex-row justify-center items-center  '>
            <input className='outline w-full py-3 rounded-xl text-xl px-4' type="email" placeholder="enter your email"/>
            <MdEmail className='absolute right-8'size={25}/>
         </div>
    </div>
    <div className='flex items-center justify-center md:justify-start'>
    <button className="bg-pink-400 text-2xl py-2 px-2 rounded-md mt-6 font-semibold text-center">Secondary</button>
    </div>
   
    </div>
    <div className='md:w-1/2 order-1 md:order-2 '>
    <img src="/book3.avif" alt="" />
    
    </div>
   
    </div>

    </>
  )
}
