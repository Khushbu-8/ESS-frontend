
import { FaStar } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const backend_API = import.meta.env.VITE_API_URL; 

// const backend_API = "https://ees-121-backend.vercel.app"

const Card = () => {
    const [profile, setProfile] = useState([]);
    const fetchData = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        //   console.log(token, "token Edit");
        try {
            const response = await axios.get(`${backend_API}/auth/getuser`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.data;
            setProfile(data.user)
            console.log(data.user, "data profile");
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
    return (
        <>
            <section className='mt-24 p-4'>
                <div className="container">
                    <div className="row">
                        <div className="card border-0 card-side bg-base-100 rounded-md shadow-xl w-full p-3   pt-3  ">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 col-lg-4 w-full d-flex justify-content-center  text-gray-900 py-2">
                                   <div>
                                   <figure className=''>
                                        <img className='rounded-md w-[200px]  overflow-hidden'
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Movie" />
                                    </figure>
                                    <div className='text-center'>
                                        <h1 className='text-xl'>{profile.name}</h1>
                                    </div>
                                        <div className="rating rating-sm py-1 w-full text-center d-flex align-items-center  justify-content-center">
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' /> <span> User rating</span>
                                        </div>
                                        <div className="rating rating-sm py-1 w-full text-center d-flex align-items-center  justify-content-center">
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' /><span> Provider</span>
                                            
                                        </div>
                                   </div>
                                </div>
                                <div className="mt col-12 col-lg-8  text-gray-700 sm:col-span-2 sm:mt-0">
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center text-start ">
                                        <div className='col-4 p-2 '>
                                            <h6 className=''>Email</h6>
                                        </div>
                                        <div className='col-8 p-2 text-gray'>
                                            <p>  {profile.email}</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center ">

                                        <div className='col-4 p-2 '>
                                            <h6 >Contact</h6>
                                        </div>
                                        <div className='col-8 p-2 text-gray'>
                                            <p>{profile.phone}</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center ">
                                        <div className='col-4  p-2 '>
                                            <h6 >Address</h6>
                                        </div>
                                        <div className='col-8 p-2  text-gray'>
                                            <p>{profile?.address?.area} {profile?.address?.city} {profile?.address?.state} {profile?.address?.country} {profile?.address?.pincode}</p>
                                        </div>
                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">

                                        <div className='text-sm p-2 '>
                                            <h6 >Available</h6>
                                        </div>
                                        <div className='p-2  d-flex justify-content-center'>
                                            <div className="checkbox-con">
                                                <input id="checkbox" type="checkbox" />
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

export default Card
