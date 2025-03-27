import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Card from './Card'

export default function Books() {
   const navigate= useNavigate();
    const[data,setData]=useState([])
    useEffect(()=>{
    const api = async()=>{
        try{
          const response = await axios.get("https://gutendex.com/books/?search=Sherlock")
          setData(response.data.results); 
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
             <Card key={item.id} items={item}/>
            ))
          }
        </div>
    </div>
    </>
  )
}
