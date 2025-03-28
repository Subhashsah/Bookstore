import React from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";
export default function Signup() {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit=async(data)=>{
        const userInfo ={
            fullName:data.name,
            email:data.email,
            password:data.passwd
        }
        try {
            const res = await axios.post("http://localhost:4000/api/v1/book/registerUser",userInfo)
            reset()
            console.log(res.data.message,res.data.data)
            localStorage.setItem("user",JSON.stringify(res.data.data))
            toast.success(res.data.message)

           
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error.response.data.message)
        }
      }
  return (
    <>
        <div className=" relative w-1/3 shadow-2xl m-auto px-12 py-8 rounded-xl mt-42 h-full">
        <IoMdClose onClick={()=>navigate('/')} size={30} className='absolute top-2 right-0.5'/>
        <form onSubmit={handleSubmit(onSubmit)} action="">

        
        <div className="flex flex-col items-center justify-center gap-3 ">
            <h1 className="text-xl font-bold">Signup</h1>
            <div className="flex flex-col gap-3 ">
             <label htmlFor="">FullName</label>
             <input className="outline appearance-none py-2 w-[350px] rounded-md" type="text"name="name" {...register("name", { required: true })}/>
             {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col gap-3 ">
             <label htmlFor="">Email</label>
             <input className="outline appearance-none py-2 w-[350px] rounded-md" type="email" name="email" {...register("email", { required: true })}/>
             {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="">Password</label>
                <input className="outline appearance-none py-2 w-[350px] rounded-md" type="text" name="passwd" {...register("passwd", { required: true })}/>
                {errors.passwd && <span>This field is required</span>}
            </div>

            <div className="flex flex-row items-center justify-between space-x-24">
                <button className="bg-blue-400 py-2 px-3 text-lx font-bold rounded-md" type="submit">signup</button>
                <div className="flex ">
                    <p>Already have Account?</p>
                    <NavLink to="/">login</NavLink>
                </div>
   
            </div>
        </div>
        </form>
        </div>
   
    </>
  )
}
