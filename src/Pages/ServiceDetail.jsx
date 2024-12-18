import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import AdminNavbar from '../admincomponents/AdminNavbar';
import UserSideBar from '../components/UserSideBar';
const backend_API = import.meta.env.VITE_API_URL; 

const ServiceDetail = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const loggedInUser = JSON.parse(localStorage.getItem("Users"))
    console.log(loggedInUser.address.city,"LoginData");
    const [category,setCategory] = useState();
    const [service, setService] = useState([]);

    const navigate = useNavigate();   
    const location = useLocation();
    console.log(location.state.categoryName,"catrgory");
    
    const fetchData = async (cat, loggedInUserCity) => {
        try {
          const response = await axios.get(`${backend_API}/auth/getAllUser`);
          const data = response.data.user;
      
          // Filter users where `businessCategory` includes `cat` and `address.city` matches logged-in user's city
          const filteredData = data.filter(
            (user) =>
              user.businessCategory?.includes(cat) && user.address?.city === loggedInUserCity
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
          const categoryName = location.state.categoryName;
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
          <AdminNavbar/>
          <UserSideBar/>
            <section className='mt-32'>
                <div className="container">
                    <div className="row">
                        <div className='d-flex'>
                            <h3 className='py-4 px-3'>Servies Detaile </h3>

                        </div>

                        <div className="col-12 d-flex flex-wrap">
                            {
                                service.map((card, i) => {
                                    return (
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
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/> <span className='ps-2'>rating</span>
                                                    </div>
                                                   
                                                  <div className=' pt-3'>
                                                  <Link className='btn pt-2  bg-orange rounded-1 text-semibold text-white '>
                                                        View Profile
                                                    </Link>
                                                  </div>

                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }




                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default ServiceDetail
