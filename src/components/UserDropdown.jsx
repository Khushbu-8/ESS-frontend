import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function UserDropdown() {
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token, "token profil");

  const fetchData = async () => {
    const backend_API = "https://ees-121-backend.vercel.app/auth/getuser"

    try {
      const response = await axios.get(backend_API, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.data;
      setProfile(data.user)
      console.log(data, "data Edit");
      if (response.status === 200) {
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
    navigate('/login'); // Redirect to login
    window.location.reload();
  };

  return (
    <>
      <div className="dropdown dropstart rounded-lg m-3 border bg-red">
        <div  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <div class="img w-[60px] h-[50px] rounded-lg border bg-red overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
          </div>
        </div>
        <ul class="dropdown-menu mt-5">
    <li><Link class="dropdown-item text-lg" href="#">Welcom {profile.name}</Link></li>
    <li><Link class="dropdown-item" to={"/profile"} >Profile</Link></li>
    <li><Link class="dropdown-item"onClick={handleLogout}>Logout</Link></li>
  </ul>
      </div>
      
     
      
    </>
  );
}

export default UserDropdown;
