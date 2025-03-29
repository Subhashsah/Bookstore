import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Login from './Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LogOutButton from './LogOutButton';

export default function NavBar() {
    const user = useContext(AuthContext)
    const[login,setLogin] =useState(false)
    const [menu, setMenu] = useState(false)
    const [sticky, setSticky] = useState(false)
    const [mode, setMode] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const navigate = useNavigate();
    useEffect(() => {
        const element = document.documentElement; // Ensure it runs after DOM is loaded

        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else
                setSticky(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const navItems = [
        {
            id: 1,
            text: <NavLink to="/">Home</NavLink>
        },
        {
            id: 2,
            text: <NavLink to="/course">Course</NavLink>
        },
        {
            id: 3,
            text: <NavLink to="/about">About</NavLink>
        },
        {
            id: 4,
            text: <NavLink to="/contact">Contact</NavLink>
        },
    ]
    return (
        <>
            <nav>
                <div className={`max-w-screen  container m-auto h-20  md:px-20 px-6 fixed top-0 right-0 left-0 z-50 dark:bg-gray-900 dark:text-white  ${sticky ? "shadow-md bg-gray-400 duration-300 transition-all ease-in-out" : "bg-white"}`}>
               

                    {/* nav bar for desktop */}
                    <div className='hidden md:flex flex-row items-center justify-between  space-x-10 h-20'>
                        <h1 className="text-3xl font-bold 
       ">BookStore</h1>

                        <div className="  flex  gap-6 items-center justify-evenly text-xl font-semibold ">
                            <ul className="flex flex-row items-center justify-between space-x-28 ">
                                {
                                    navItems.map((items) => (
                                        <li className="hover:scale-110 duration-300 hover:cursor-pointer" key={items.id}>{items.text}</li>
                                    ))
                                }
                            </ul>

                            <div className=" relative flex flex-row items-center justify-center">
                                <input className=" w-48 outline-none py-2 appearance-none shadow-md p-2" type="text" placeholder='Search .......' />
                                < IoSearchOutline className="absolute right-3" />
                            </div>

                            <div
                                onClick={() => {
                                    setMode(!mode);
                                    setTheme(theme === "light" ? "dark" : "light");
                                }}
                                className="hover:cursor-pointer p-2 rounded bg-gray-200 dark:bg-gray-800"
                            >
                                {theme === "dark" ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} />}
                            </div>
                            {
                               user.authUser?<LogOutButton/>:   <button onClick={()=>setLogin(true)} className="bg-green-500 py-2 px-3 text-lx font-bold rounded-md">login</button>
                            }
                          
                            
                        </div>
                        

                    </div>
                    {login &&<Login/>}
                    {/* nab-bar for moble */}
                    <div className="md:hidden flex flex-row h-20 justify-between items-center">
                        <div onClick={() => setMenu(!menu)} className="flex  items-center justify-center space-x-3">
                            {menu ? <GiHamburgerMenu size={24} /> : ""}
                            <h1 className="text-2xl font-bold">BookStore</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                        <div
                                onClick={() => {
                                    setMode(!mode);
                                    setTheme(theme === "light" ? "dark" : "light");
                                }}
                                className="hover:cursor-pointer p-2 rounded bg-gray-200 dark:bg-gray-800"
                            >
                                {theme === "dark" ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} />}
                            </div>
                            <div className="text-xl bg-green-500 text-white px-3 py-1 rounded-lg">
                                login
                            </div>
                            
                        </div>

                    </div>
                    <div className='flex flex-row justify-between z-50 bg-white'>
                        {

                            menu && (
                                <div className="" >
                                    <ul >
                                        {
                                            navItems.map((items) => (
                                                <li className="text-2xl font-semibold" key={items.id}>{items.text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                        <div className="md:hidden ">
                            <div className=" relative flex flex-row items-center justify-center mt-6 ">
                                <input className=" outline-none py-4 appearance-none shadow-md p-2" type="text" placeholder='Search .......' />
                                < IoSearchOutline className="relative right-6" />
                            </div>
                        </div>



                    </div>
                </div>
            </nav>

        </>
    )
}
