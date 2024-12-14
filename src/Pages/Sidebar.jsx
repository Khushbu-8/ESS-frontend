import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/ess-121.png"
import { FaCalendar, FaCaretDown, FaPage4, FaUser } from 'react-icons/fa'

const Sidebar = () => {
  const sidebarManu = [
    {
      id: 1,
      title: 'Users',
      icon: <FaUser />,
      path: '/admin',
    },
    {
      id: 2,
      title: 'Card',
      icon: <FaCalendar />,
      path: '/admin',
    }
  ]

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
        </div>
        <div className="drawer-side z-30">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

          <div className="menu bg-white text-base-content min-h-full w-80 p-4">
            <div className="logo flex justify-center text-center">
              <img src={logo} width={80} alt="" />
            </div>
            <hr />
            <ul className='mt-3 font-bold'>
              {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' my-1 w-full rounded hover:bg-primary hover:text-white focus:text-white'>
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

export default Sidebar
