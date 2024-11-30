import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                </div>
                <div className="drawer-side">

                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="">
                            <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        {/* Sidebar content here */}
                        <li><Link to={"/admin/users"}>All User</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
