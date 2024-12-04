
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiShoppingBagLight } from "react-icons/pi";
import Navebar from './Navebar';
import axios from 'axios';
import UserSideBar from './UserSideBar';

const Profile = () => {
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
    const fetchData = async () => {
        const backend_API = "https://ees-121-backend.vercel.app/auth/getuser"
        const token = JSON.parse(localStorage.getItem('token'))
        //   console.log(token, "token Edit");
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
                navigate('/profile')
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


    return (
        <>
            <Navebar />
            <UserSideBar/>
            <section className='my-32 h-[550px]'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card rounded-md overflow-hidden border-0 bg-base-100 shadow-xl ">
                                
                                <div className="w-full position-reletive bg-orange flex items-center justify-center">
                               
                                    <img className='h-[150px] w-full' src="https://img.freepik.com/free-vector/colorful-watercolor-texture-background_1035-19319.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid" alt="" />
                               
                                    <div className="avatar">
                                        <div className=" position-absolute top-5 start-[-1050px] ring-green ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-12 d-flex">
                                        <div className="col-6 p-5">
                                            <h2 className="text-3xl font-bold  text-gray-700  mt-4">
                                            {profile.name}
                                            </h2>
                                            <h5 className='py-3 text-gray'>{profile.email}</h5>
                                            <p className='text-gray pb-3'>{profile.phone}</p>
                                            <p className='text-gray pb-3'>{profile.address}</p>
                                            
                                            <div className="flex">
                                                <button onClick={() => navigate(`/editprofile`, { state: profile })} className="border-orange text-orange px-8 py-3 rounded-full font-semibold uppercase text-sm">Edit Profile</button>
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <div className='p-5'>
                                                <span className='py-2'> {profile._id}</span>
                                                <h5 className='text-gray pb-3'>Bussiness Category <PiShoppingBagLight className='inline-block' /></h5>
                                                <div className='p-2 d-flex justify-content-center text-uppercase rounded-md text-white bg-orange '>{profile.businessCategory}</div>

                                                <div className="rating rating-sm py-4">
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400  " />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" defaultChecked />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Profile