import React, { useEffect, useState } from 'react'
import logo from "../../public/ess-121.png"
import { Link } from 'react-router-dom'
import UserDropdown from '../components/UserDropdown'
import { FaPlus } from "react-icons/fa6";

import { GoBell } from "react-icons/go";
import SearchBox from '../components/SearchBox';
const AdminNavbar = () => {
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
            <li><Link className='' to={'/'}>Home</Link></li>
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
            <nav className={`navbar-expand-lg bg-white w-full md:px-20  shadow-sm   py-2 z-20 fixed top-0  ${sticky ? "sticky-navbar shadow-md bg-white dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : " bg-base-100 "
                } `}>
                {/* <nav class="navbar navbar-expand-lg bg-white"> */}
                <div class="container">
                    <div className="col-12 w-100 d-flex w-100 flex-wrap align-items-center">
                        <div className="col-md-8 d-flex w-[50%] align-items-center">
                            <div className='w-full d-flex justify-content-between justify-content-lg-start  align-items-center'>
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

                                <div className="logo d-flex justify-content-end">
                                    <Link to={'/'}>
                                        <img src={logo} width={80} alt="" />
                                    </Link>
                                </div>
                                <div className='d-none d-md-flex d-lg-flex px-3'>
                                    <SearchBox />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                            <div className='w-full  d-flex justify-content-end align-items-center ps-5'>
                                <div className="manu d-flex d-none d-lg-flex">
                                    <ul className='d-flex gap-3 px-3'>
                                        {
                                            navManu.map((val, i) => {
                                                return (
                                                    <li><Link className=' d-flex align-items-center text-black gap-1 ' to={val.link}>{val.title} {val.icon}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>


                                {/* <div className='pe-3'>
                                 <GoBell className='w-100 fs-5 fw-bold' />
                                    </div>    */}
                                <div className='d-flex w-full justify-content-end '>

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
                    <div className="col-12 d-flex d-md-none align-items-center w-full  border-0 d-flex d-lg-none" style={{ width: "100%" }}>
                        <SearchBox />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
