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
  <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="d-flex justify-content-between align-items-center">
    
      <div classname="logo d-flex justify-content-end text-center ">
        <img src={logo} width={80} alt />
      </div>
    
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <hr />
  <div className="offcanvas-body">
    <div>
      <ul classname="p-0">
      {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' p-3 rounded hover:bg-primary hover:text-white focus:text-white'>
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
