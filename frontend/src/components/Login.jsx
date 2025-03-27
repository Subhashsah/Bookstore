import React from 'react'
import { NavLink } from 'react-router-dom'
import {useForm} from "react-hook-form"
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit=(data)=>{
        console.log(data)
      }
  return (
    <>
    <div className="w-fit shadow-2xl m-auto px-12 py-8 rounded-xl mt-56 z-50 bg-white dark:bg-gray-900">
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
