import React, { useEffect, useState } from 'react'
import { FaAccessibleIcon, FaCalendar, FaDatabase, FaNetworkWired, FaPowerOff, FaSortAmountDown, FaSuperpowers, FaSupple, FaUser, FaWallet } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../public/ess-121.png"
import axios from 'axios'
import '../AdminCss/dashboard.css'
import { FaSquareDribbble } from 'react-icons/fa6'

const backend_API = import.meta.env.VITE_API_URL; 

const AdminSidebar = () => {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
 
  // console.log(token, "token profil");
    const sidebarManu = [
        {
          id: 1,
          title: 'Dashboard',
          icon: <FaSortAmountDown />,
          path: '/admin',
        },
        {
          id: 2,
          title: 'AllUsers',
          icon: <FaUser />,
          path: '/admin/users',
        },
        {
          id: 3,
          title: 'Manage Category',
          icon: <FaCalendar />,
          path: '/admin/manageCategory',
        },
        
        {
          id: 4,
          title: 'Manage Admin',
          icon: <FaDatabase />,
          path: '/admin/manageAdmin',
        },
        
        {
          id: 5,
          title: 'Support',
          icon: <FaSuperpowers />,
          path: '/admin/support',
        },
        
       
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
  <div className="offcanvas bg-white offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="d-flex  align-items-center p-3">
    
     <div className='w-full d-flex align-items-center gap-4'>
     <div class="img w-[80px] h-[80px]  d-flex">
          <Link to={"/admin"}>  <img src={logo} className='w-full h-full' /></Link>
          </div>
         
     </div>
       <div className=' d-flex justify-content-center'>
       <button  type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />

       </div>
  </div>
  <hr />
  <div className="offcanvas-body adminsidbar p-0 p-3">
    <div>
      <ul classname="">
      {
                sidebarManu.map((manu, i) => {
                  return (
                    <li key={++i} className=' p-2 rounded '>
                      <Link to={manu.path} className=' text-lg d-flex align-items-center'>
                        <span className='inline-block mr-5 text-xl'>{manu.icon}</span>
                        {manu.title}</Link>
                    </li>
                  )
                })
              }
              {/* <li  className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white '>
                      <Link onClick={handleLogout} className=' text-lg d-flex align-items-center'>
                        <span className='inline-block mr-2 text-xl '><FaPowerOff/></span>
                        Logout</Link>
                    </li> */}
      </ul>
    </div>
  </div>
</div>

    
    </>
  )
}

export default AdminSidebar
