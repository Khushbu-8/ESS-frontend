import React, { useEffect, useState } from 'react'
import logo from "../../public/ess-121.png"
const AdminNavbar = () => {
    const [sticky,setSticky] = useState(false);

    useEffect(() =>{
        const handlScroll= () =>{
            if(window.scrollY > 0){
                setSticky(true)
            }else{
                setSticky(false)
            }
        }
window.addEventListener('scroll',handlScroll)
return() =>{
    window.removeEventListener("scroll",handlScroll)
}
    },[])
    return (
        <>
            <div className={`navbar max-w-screen-2xl shadow-md bg-base-100 rounded-md m-5 w-[97%] overflow-hidden  container mx-auto md:px-20 dark:bg-slate-900 dark:text-white px-4  fixed top-0 right-5 ${
                sticky? "sticky-navbar shadow-md bg-base-100 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out":" "
            }`}>
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn  drawer-button"> <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg></label>
                </div>
                <div className="flex-1">
                    <div className="logo">
                        <img src={logo} width={80} alt="" />
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminNavbar
