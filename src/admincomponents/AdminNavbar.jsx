import React, { useEffect, useState } from 'react'
import logo from "../../public/ess-121.png"
import { Link } from 'react-router-dom'
import UserDropdown from '../components/UserDropdown'
const AdminNavbar = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const [auth, setAuth] = useState(false)
    const [sticky, setSticky] = useState(false);

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
            <nav className={`  navbar-expand-lg bg-white w-full md:px-20 dark:bg-slate-900 dark:text-white  px-4 py-2 z-20 fixed top-0  ${sticky ? "sticky-navbar shadow-md bg-white dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : " bg-base-100 "
                } `}>
                {/* <nav class="navbar navbar-expand-lg bg-white"> */}
                <div class="container-fluid px-3">
                    <div className="col-12 d-flex align-items-center">
                        <div className="col-8 d-flex align-items-center">
                            <div class="dropdown d-flex d-lg-none">
                                <button class=" " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <ul class="dropdown-menu mt-5 p-3">
                                    {NaveItems}
                                </ul>
                            </div>

                            <div className="logo navbar-brand">
                                <img src={logo} width={80} alt="" />
                            </div>
                            <div className='d-none d-lg-flex px-3'>
                                <label className=" px-3  border rounded- flex items-center gap-2 ">
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
                            <div className='w-full d-flex justify-content-end  align-items-center '>
                                <div className="manu  d-flex d-none d-lg-flex">
                                    <ul className='d-flex gap-3 px-3'>

                                        {NaveItems}

                                    </ul>
                                </div>
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

export default AdminNavbar
