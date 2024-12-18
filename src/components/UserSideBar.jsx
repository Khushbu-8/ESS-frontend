import React, { useEffect, useState } from 'react'
import { FaCalendar, FaNetworkWired, FaPowerOff, FaUser, FaWallet } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../public/ess-121.png"
import axios from 'axios'
import GetAdmin from './GetAdmin'

const backend_API = import.meta.env.VITE_API_URL;

const UserSideBar = () => {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))

  // console.log(token, "token profil");
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
      id: 4,
      title: 'wallete',
      icon: <FaWallet />,
      path: '/admin/card',
    },
    {
      id: 5,
      title: 'work',
      icon: <FaNetworkWired />,
      path: '/work',
    }

  ]
  const fetchData = async () => {

    try {
      const response = await axios.get(`${backend_API}/auth/getuser`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.data;
      setProfile(data.user)
      console.log(data, "data sidebar");
      if (response.status === 200) {
        localStorage.setItem("Users", JSON.stringify(data.user))
        console.log("profile Successful...");
      }
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    localStorage.removeItem('Users'); // Clear the User
    navigate('/login'); // Redirect to login
    window.location.reload();
  };
  return (
    <>
      <div className="offcanvas bg-white offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="d-flex  align-items-center p-3">

          <div className='w-full d-flex align-items-center gap-4'>
            <div class="img w-[80px] h-[80px] rounded-lg border bg-red overflow-hidden d-flex">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
            </div>
            <div>
              <h3>{profile.name}</h3>
            </div>
          </div>
          <div className=' d-flex justify-content-center'>
            <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />

          </div>
        </div>
        <hr />
        <div className="offcanvas-body p-0 p-2">
          <div>
            <ul classname="">
              {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' p-2 rounded hover:bg-orange hover:text-white focus:text-white'>
                      <Link to={manu.path} className=' text-lg d-flex align-items-center'>
                        <span className='inline-block mr-2 text-xl'>{manu.icon}</span>
                        {manu.title}</Link>
                    </li>
                  )
                })
              }
              <GetAdmin/>
              <li className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white '>
                <Link onClick={handleLogout} className=' text-lg d-flex align-items-center'>
                  <span className='inline-block mr-2 text-xl '><FaPowerOff /></span>
                  Logout</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default UserSideBar
