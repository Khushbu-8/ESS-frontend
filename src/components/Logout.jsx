import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

   const Logout = () =>{
    const navigete = useNavigate();
    localStorage.removeItem('token');
    navigete('/')
    
   }
  return (
    <div>
       <button onClick={() => Logout()} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Logout</button>
    </div>
  )
}

export default Logout
