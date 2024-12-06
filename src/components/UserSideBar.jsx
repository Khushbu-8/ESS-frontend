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
  <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="d-flex  align-items-center p-3">
    
     <div className='w-full d-flex align-items-center gap-4'>
     <div class="img w-[80px] h-[80px] rounded-lg border bg-red overflow-hidden d-flex">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
          </div>
          <div>
          <h3>joy</h3>
          </div>
     </div>
       <div className=' d-flex justify-content-center'>
       <button  type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />

       </div>
  </div>
  <hr />
  <div className="offcanvas-body p-0 p-2">
    <div>
      <ul classname="">
      {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white'>
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
