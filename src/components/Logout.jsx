import React from 'react'

const Logout = () => {

   const Logout = () =>{
    localStorage.removeItem('token');
    window.location.reload();
   }
  return (
    <div>
       <button onClick={() => Logout()} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duretion-300 cursor-pointer">Login</button>
    </div>
  )
}

export default Logout
