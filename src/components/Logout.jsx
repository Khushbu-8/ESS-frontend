import React from 'react'
import { FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const backend_API = import.meta.env.VITE_API_URL;

const Logout = () => {

  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token'))
  const handleLogout = async() => {
    try {
      const response = await axios.get(`${backend_API}/auth/logout`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.data;
      console.log(data, "data logout");
      if (response.status === 200) {
        console.log("Logout Successful...");
        localStorage.removeItem('token'); // Clear the token
    localStorage.removeItem('Users'); // Clear the User
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
      return false;
    }



    
    navigate('/login'); // Redirect to login
    window.location.reload();
  };
  return (
    <>
      <li className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white '>
        <Link onClick={handleLogout} className='w-100 text-lg d-flex justify-content-center  justify-content-lg-start align-items-center'>
          <span className='inline-block mr-2 text-xl '><FaPowerOff /></span>
          Logout</Link>
      </li>
    </>
  )
}

export default Logout
