
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiShoppingBagLight } from "react-icons/pi";
import Navebar from './Navebar';
import axios from 'axios';
import UserSideBar from './UserSideBar';
import AdminNavbar from '../admincomponents/AdminNavbar';
import { FaStar } from 'react-icons/fa';

// const backend_API = import.meta.env.BACKEND_API;
const backend_API = "https://ees-121-backend.vercel.app"


const Profile = () => {
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
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
            <AdminNavbar />
            <UserSideBar />
            <section className='my-24 p-4 h-[550px]'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card rounded-md overflow-hidden border-0 bg-base-100 shadow-xl ">

                                <div className="w-full position-reletive bg-orange flex items-center justify-center">

                                    <img className='h-[150px] w-full' src="https://img.freepik.com/free-vector/colorful-watercolor-texture-background_1035-19319.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid" alt="" />

                                    <div className="avatar">
                                        <div className=" position-absolute top-[100px] start-[50px] overflow-hidden ring-green ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-12 d-flex flex-wrap ">
                                        <div className="c0l-12 col-md-6 p-5">
                                            <h2 className="text-3xl font-bold  text-gray-700  mt-4">
                                                {profile.name}
                                            </h2>
                                            <h6 className='py-3 text-gray'>{profile.email}</h6>
                                            <p className='text-gray pb-3'> +91{profile.phone}</p>
                                            {/* <p className='text-gray pb-3'>  {profile?.address?.area}</p> */}
                                            <p className="text-gray pb-3">
                                                {profile?.address?.area} {profile?.address?.city}  {profile?.address?.state} {profile?.address?.country}  {profile?.address?.pincode}
                                            </p>

                                            <div className="flex">
                                                <button onClick={() => navigate(`/editprofile`, { state: profile })} className=" text-orange py-3 rounded-full font-semibold uppercase text-sm">Edit Profile</button>
                                            </div>
                                        </div>
                                        <div className="c0l-12 col-md-6 d-flex justify-content-end">
                                            <div className='p-5'>
                                                <p className='text-gray'>Your Bussiness Id :</p>
                                                <span className='py-2'> {profile._id}</span>
                                                <h6 className='text-gray py-3'>Bussiness Category <PiShoppingBagLight className='inline-block' /></h6>
                                                {profile.businessCategory ? (<div className='btn  d-flex justify-content-center text-uppercase rounded-md text-white bg-orange py-2'>{profile.businessCategory}</div>) : (<></>) }

                                                <div className="rating rating-sm py-4 d-flex align-items-center">
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                </div>
                                                    <div className=''>
                                                        <label for="file-upload" class="h-[100px] btn d-inline-block border border-orange d-flex justify-content-center align-items-center  text-center ">
                                                            Add Offer Benner
                                                        </label>
                                                        <input type="file" id="file-upload" />
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