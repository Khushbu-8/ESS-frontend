import React, { useEffect, useState } from 'react'
import logo from "../../public/ess-121.png"
import { Link } from 'react-router-dom'
import UserDropdown from '../components/UserDropdown'
const AdminNavbar = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const [auth, setAuth] = useState(false)

    const NaveItems = (
        <>
            <li><a className='list-none' href='/'>Home</a></li>
            <li><a href='/servises'>Servises</a></li>
        </>
    )
    useEffect(() => {
        if (token) {
            setAuth(true)
        } else {
            setAuth(false)
        }


    }, [token])

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white">
                <div class="container-fluid px-3">
                    <div className="col-12 d-flex align-items-center">
                        <div className="col-4 d-flex align-items-center">
                            <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
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

                           
                            <div className="logo navbar-brand">
                                <img src={logo} width={80} alt="" />
                            </div>

                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-end">
                            <div className="manu d-flex  d-none d-lg-flex">
                                <ul className='d-flex gap-3 '>

                                    {NaveItems}

                                </ul>
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

                            {
                                auth ? <UserDropdown /> :
                                    <div className="">
                                        <Link to={"/login"} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Login</Link>

                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
