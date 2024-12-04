import React from 'react'
import { FaCalendar, FaNetworkWired, FaUser, FaWallet } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "../../public/ess-121.png"

const UserSideBar = () => {
    const sidebarManu = [
        {
          id: 1,
          title: 'profile',
          icon: <FaUser />,
          path: '/profile',
        },
        {
          id: 2,
          title: 'Card',
          icon: <FaCalendar />,
          path: '/',
        },
        {
          id: 2,
          title: 'wallete',
          icon: <FaWallet />,
          path: '/admin/card',
        },
        {
          id: 2,
          title: 'work',
          icon: <FaNetworkWired />,
          path: '/admin/card',
        }
      ]
  return (
    <>
     <div className="drawer">
        <input id="my-slider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
        </div>
        <div className="drawer-side z-30">
          <label htmlFor="my-slider" aria-label="close sidebar" className="drawer-overlay"></label>

          <div className="menu bg-white text-base-content min-h-full w-80 p-4">
            <div className="logo flex justify-center text-center">
              <img src={logo} width={80} alt="" />
            </div>
            <hr />
            <ul className='mt-3 font-bold'>
              {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' my-1 rounded hover:bg-primary hover:text-white focus:text-white'>
                      <Link to={manu.path} className=' text-lg'>
                        <span className='inline-block mr-2 text-xl'>{manu.icon}</span>
                        {manu.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSideBar
