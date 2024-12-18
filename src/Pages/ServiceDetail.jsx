import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import AdminNavbar from '../admincomponents/AdminNavbar';
import UserSideBar from '../components/UserSideBar';
import { HiDotsHorizontal } from "react-icons/hi";
const backend_API = import.meta.env.VITE_API_URL;

const ServiceDetail = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const loggedInUser = JSON.parse(localStorage.getItem("Users"))
    console.log(loggedInUser.address.city, "LoginData");
    const [category, setCategory] = useState();
    const [service, setService] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state, "catrgorys");
    console.log(location.state, "catrgoryss");


    const fetchData = async (cat, loggedInUserCity) => {
        try {
            const response = await axios.get(`${backend_API}/auth/getAllUser`);
            const data = response.data.user;

            // Filter users where `businessCategory` includes `cat` and `address.city` matches logged-in user's city
            const filteredData = data.filter(
                (user) =>
                    user.businessCategory?.some((category) => category.toLowerCase() === cat.toLowerCase()) &&
                    user.address?.city?.toLowerCase() === loggedInUserCity.toLowerCase()
            );


            console.log(filteredData, "Filtered Data");

            // Update the state with the filtered data
            setService(filteredData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        if (location.state && loggedInUser.address.city) {
            const categoryName = location.state;
            setCategory(categoryName); // Set the category in state
            fetchData(categoryName, loggedInUser.address.city); // Fetch data with category and city
        }
    }, [location.state, loggedInUser.address.city]);

    let profile = [{
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "ahmdabad",
        category: "A.C. SERVICE"

    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        address: "surat",
        category: "AUTO RICKSHAW"
    },
    {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "rajkot",
        category: "BAGGI (HORSE CART)"
    },
    {
        id: 4,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "surat",
        category: "BAGGI (HORSE CART)"
    },
    ]


    return (
        <>
            <AdminNavbar />
            <UserSideBar />
            <section className='mt-32'>
                <div className="container">
                    <div className="row">
                        <div className='d-flex'>
                            <h3 className='py-4 px-3'>Servies Detaile </h3>

                        </div>

                        <div className="col-12 d-flex flex-wrap">
                            {
                                service.map((user, i) => {
                                    return (
                                         <div  className="col-12 col-md-6 col-xl-3 p-2"  style={{ cursor: "pointer" }}>
                                                        <div className="card border-0 bg-base-100 shadow-xl" >
                                                            <div className='d-flex justify-content-between'>
                                                                <figure className='rounded-md m-3'>
                                                                    <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                        
                                                                    </img>
                                                                </figure>
                                                                <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                            </div>
                                                            <div className='p-3'>
                                                                <h2 className=" font-bold">{user.name}</h2>
                                                                <h5 className=" font-bold">{user.businessCategory}</h5>
                                                                <h6 className=" font-bold">{user.address.city}</h6>
                                        
                                                                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                                <div className="rating rating-sm py-4 d-flex align-items-center">
                                                                    <FaStar className='text-warning' />
                                                                    <FaStar className='text-warning' />
                                                                    <FaStar className='text-warning' />
                                                                    <FaStar className='text-warning' />
                                                                    <FaStar className='text-warning' /> <span className='ps-2'>rating</span>
                                                                </div>
                                        
                                                                <div>
                                                                <button className='btn btn-success' onClick={() => sendRequest(user._id)}>
                                                                            Contect Now
                                                                        </button>
                                                                  
                                        
                                                                </div>
                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                        
                                        
                                    )
                                })
                            }
{/* 
<div className="col-12 col-md-6 w-full col-lg-3 p-2 ">
                                            <div className="bg-white rounded-md overflow-hidden flex d-md-block w-full">
                                                <div className='col-5 col-md-12'>
                                                    <img className='w-full'
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Movie" />
                                                </div>
                                                <div className="p-3 col-10 col-md-12 ">
                                                    <h4 className="">{card.name}</h4>
                                                    <p>{card.email}</p>
                                                    <p>{card.phone}</p>
                                                    <p>{card.address.city}</p>

                                                    <div className="rating rating-sm py-4 d-flex align-items-center">
                                                        <FaStar className='text-warning' />
                                                        <FaStar className='text-warning' />
                                                        <FaStar className='text-warning' />
                                                        <FaStar className='text-warning' />
                                                        <FaStar className='text-warning' /> <span className='ps-2'>rating</span>
                                                    </div>

                                                    <div className=' pt-3'>
                                                        <Link className='btn pt-2  bg-orange rounded-1 text-semibold text-white '>
                                                            View Profile
                                                        </Link>
                                                    </div>


                                                </div>
                                            </div>
                                        </div> */}


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServiceDetail
