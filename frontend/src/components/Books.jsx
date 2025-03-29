import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function Books() {
   const navigate= useNavigate();
    const[data,setData]=useState([])
    useEffect(()=>{
    const api = async()=>{
        try{
          const response = await axios.get("http://localhost:4000/api/v1/book/getBook")

        
          console.log(response.data.data)
          setData(response.data.data); 
        }
        catch(err){
            console.log(err)
        }
    }
    api();
    },[])
    
  return (
    <>
    <div className='max-w-screen container m-auto md:px-20 px-4 mt-28'>
        <div className="flex flex-col gap-3 mt-8 items-center "> 
            <h1 className="text-2xl font-bold">The Power of Reading Books</h1>
            <p className="text-xl font-semibold">In a world filled with fleeting content, books provide depth and lasting wisdom. A single book has the power to change a mindset, inspire action, and transform a life. </p>
            <button onClick={()=>navigate(-1)} className="bg-green-500 text-xl font-semibold py-2 px-5 rounded-xl ">Back</button>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-14 my-8">
          {
           data.map((item)=>(
            <div className="flexf flex-col items-center justify-center  "key={item._id}>
              <div className="flex flex-col items-center hover:scale-105 duration-200">
              <img className="w-full h-[450px] rounded-t-2xl shadow-2xl" src={item.image} alt="" />
              </div>
              <div className='bg-slate-200 py-3 pb-4 rounded-b-2xl'>
              <div className="flex flex-col items-center gap-2 ">
                <h1 className="text-xl font-bold">{item.title}</h1>
                 <p className="text-lg font-semibold">{item.author}</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-40 mt-3" >
              <p>{item.category}</p>
              <p>${item.price}</p>  
              </div>
              </div>
              
            </div>
           ))
          }
        </div>
    </div>
    </>
  )
}
