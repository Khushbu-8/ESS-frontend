
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import jwtDecode from 'jwt-decode'
import { RiStarSFill } from "react-icons/ri";
import Navebar from './Navebar';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();

    const fetchData = async() => {
        // if (token) {
        //     // Split the token into its components
        //     const payload = token.split('.')[1];
        //     // Decode the Base64 URL-encoded payload
        //     const decodedPayload = JSON.parse(atob(payload));
        //     console.log("Decoded Token:", decodedPayload.user);
        //     setProfile(decodedPayload.user)

        // } else {
        //     console.error("No token found.");
        // }
        const backend_API = "https://ees-121-backend.vercel.app/auth/getuser"
        const token = JSON.parse(localStorage.getItem('token'))
          console.log(token, "token Edit");
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
          // console.log(data);
          if (response.status === 200) {
            // localStorage.setItem('token', JSON.stringify(response.data.token))
            // localStorage.setItem("Users",JSON.stringify(data.user))
            // localStorage.setItem("Users",token)
              // navigete('/profile')
              console.log("profile Successful...");

        
          }
            // console.log(data);
          
          } catch (error) {
            console.log(error);
            return false;
          }
        
    }

    console.log("profile", profile)
    console.log("profile", profile.name)
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Navebar />
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
                                <span>UserId : {profile._id}</span>
                                <h3 className="text-3xl font-semibold text-red-600">{profile.name}</h3>
                            </div>
                            <div>
                                <div>
                                    <p className="font-semibold text-gray-700">bussiness category:</p>
                                    <button className="bg-red-600 text-white px-8 py-3 px-2 rounded-1 font-semibold uppercase text-sm">
                                        ADVOCATE {profile.businessCategory}
                                    </button>
                                </div>
                            </div>
                            <p className="font-semibold text-gray-700">Contect : {profile.phone}</p>
                            <p className="font-semibold text-gray-700">Address : {profile.address}</p>
                            <div className="">
                                <p className="font-semibold text-gray-700">User Service rating :</p>
                                <span><RiStarSFill /></span>
                            </div>
                            <div className="rating">
                           < p className="font-semibold text-gray-700">User Service rating :</p>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex">
                                <button onClick={() => navigate(`/editprofile`,{state:profile})}  className="bg-red-600 text-white px-8 py-3 rounded font-semibold uppercase text-sm">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile