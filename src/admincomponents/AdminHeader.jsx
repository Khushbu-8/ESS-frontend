import React, { useEffect, useState } from 'react'
import logo from "../../public/ess-121.png"
import { Link } from 'react-router-dom'
import UserDropdown from '../components/UserDropdown'
import { FaPlus } from "react-icons/fa6";

import { GoBell } from "react-icons/go";

const AdminHeader = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const [auth, setAuth] = useState(false)
    const [sticky, setSticky] = useState(false);

    const navManu = [
        {
        title: 'Home',
        link: '/',
        icon: <FaPlus /> 
        
    },
        {
        title: 'Services',
        link: '/servises',
        icon: <FaPlus /> 
        
    },
]

    const NaveItems = (
        <>
            <li><Link  className='' to={'/'}>Home</Link></li>
            <li><Link to={'/servises'}>Servises</Link></li>
        </>
    )
    useEffect(() => {
        if (token) {
            setAuth(true)
        } else {
            setAuth(false)
        }


    }, [token])
    useEffect(() => {
        const handlScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handlScroll)
        return () => {
            window.removeEventListener("scroll", handlScroll)
        }
    }, [])

    return (
        <>
            <nav className={`navbar-expand-lg bg-white w-full md:px-20  shadow-sm  px-4 py-2 z-20 fixed top-0  ${sticky ? "sticky-navbar shadow-md bg-white dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : " bg-base-100 "
                } `}>
                {/* <nav class="navbar navbar-expand-lg bg-white"> */}
                <div class="container-fluid px-3">
                    <div className="col-12 d-flex align-items-center">
                        <div className="col-8 d-flex align-items-center">
                            <div class="dropdown d-flex">
                                <button class=" " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </button>
                                
                            </div>

                            <div className="logo navbar-brand">
                               <Link to={'/admin'}>
                               <img src={logo} width={80} alt="" />
                               </Link>
                            </div>
                            <div className='d-none d-lg-flex px-3'>
                                <label className=" px-3  border  flex items-center gap-2 ">
                                    <input type="text" className="grow outline-none  bg-base-100 p-2 " placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>

                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <div className='w-full d-flex justify-content-end  align-items-center px-3'>
                                
                                <div className=" btn border-0 d-flex d-lg-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-6 w-6 opacity-80">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                 <div className='pe-3'>
                                 <GoBell className='w-100 fs-5 fw-bold' />
                                    </div>   
                                {/* <UserDropdown />
                                <div className="">
                                    <Link to={"/login"} className="bg-orange text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Login</Link>

                                </div> */}
                                {
                                auth ? <UserDropdown /> :
                                    <div className="">
                                        <Link to={"/login"} className="bg-orange text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Login</Link>

                                    </div>
                            }

                            </div>
                            

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader
