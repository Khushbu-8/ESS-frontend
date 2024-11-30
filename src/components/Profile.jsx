import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import jwtDecode from 'jwt-decode'
import { RiStarSFill } from "react-icons/ri";
import Navebar from './Navebar';

const Profile = () => {
    const [profile,setProfile] = useState();
    const navigate = useNavigate();
  
    const fetchData = () => {
  
      const token = JSON.parse(localStorage.getItem('token'))
      console.log(token, "token");
      if (token) {
          // Split the token into its components
          const payload = token.split('.')[1];
          // Decode the Base64 URL-encoded payload
          const decodedPayload = JSON.parse(atob(payload));
          console.log("Decoded Token:", decodedPayload.user);
          setProfile(decodedPayload.user)
          
      } else {
          console.error("No token found.");
      }
  }
  
  console.log("data", profile)
  
  useEffect(() => {
      fetchData()
  }, [])
  

    return (
       <>
       <Navebar/>
     <div className=''>
     <div className="bg-gray-200 mx-auto  max-w-full  pt-20 flex items-center   justify-center ">
      <div className="w-[600px] bg-white h-[700px] rounded-lg overflow-hidden shadow-md mt-5">
        <div className="w-full h-[160px] bg-red-600 flex items-center justify-center">
        <div className="avatar">
  <div className="ring-green ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
        </div>
        <div className="py-3 px-6 grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center">
            <span>UserId</span>
            <h3 className="text-3xl font-semibold text-red-600">user name</h3>
          </div>
         <div>
        <div>
        <p className="font-semibold text-gray-700">bussiness category:</p>
         <button className="bg-red-600 text-white px-8 py-3 px-2 rounded-1 font-semibold uppercase text-sm">
          ADVOCATE
            </button>
        </div>
         </div>
         <p className="font-semibold text-gray-700">Contect :</p>
         <p className="font-semibold text-gray-700">Address :</p>
          <div className="">
          <p className="font-semibold text-gray-700">User Service rating :</p>
        <span><RiStarSFill /></span>
          </div>
          <div className="flex">
            <Link to={"/editprofile"} className="bg-red-600 text-white px-8 py-3 rounded font-semibold uppercase text-sm">
             Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
     </div>


       </>
    )
}

export default Profile