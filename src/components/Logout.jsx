import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
   }
  return (
    <div>
       <button onClick={handleLogout} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Logout</button>
    </div>
  )
}

export default Logout
