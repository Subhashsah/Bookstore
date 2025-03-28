import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form"
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';
export default function Login() {
  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit=async(data)=>{
      const userInfo={
        email:data.email,
        password:data.passwd
      }
        try {
            const res = await axios.post("http://localhost:4000/api/v1/book/login",userInfo)
            console.log(res.data.message)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)

            
        }
      }
  return (
    <>
    <div className=" relative w-fit shadow-2xl m-auto px-12 py-8 rounded-xl mt-56 z-50 bg-white dark:bg-gray-900">
         <IoMdClose onClick={()=>navigate('/')} size={30} className='absolute top-2 right-0.5'/>
        <form onSubmit={handleSubmit(onSubmit)}action="post">
       
        <div className="flex flex-col items-center justify-center gap-4 ">
            
            <h1 className="text-xl font-bold">Login</h1>
            <div className="flex flex-col gap-3 ">
             <label htmlFor="">Email</label>
             <input className="outline appearance-none py-2 w-[300px] rounded-md" type="email" name="email"{...register("email", { required: true })}/>
             {errors.email && <span>This field is required</span>}

            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <input className="outline appearance-none py-2 w-[300px] rounded-md" type="text" name="passwd"{...register("passwd", { required: true })}/>
                {errors.passwd && <span>This field is required</span>}

            </div>
            <div className="flex flex-row items-center justify-between space-x-24">
                <button className="bg-blue-400 py-2 px-3 text-lx font-bold rounded-md" type="submit">Login</button>
                <div className="flex ">
                    <p>NotRegister?</p>
                    <NavLink to="/signup">signup</NavLink>
                </div>
   
            </div>
        </div>
        </form>
    </div>
    </>
  )
}
