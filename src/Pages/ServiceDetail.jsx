import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import AdminNavbar from '../admincomponents/AdminNavbar';
import UserSideBar from '../components/UserSideBar';
import { HiDotsHorizontal } from "react-icons/hi";
import SearchResult from '../components/SearchResult';
const backend_API = import.meta.env.VITE_API_URL;

const ServiceDetail = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const loggedInUser = JSON.parse(localStorage.getItem("Users"))

    // console.log(loggedInUser.address.city, "LoginData");
    const [category, setCategory] = useState();
    const [service, setService] = useState([]);

      const [requestSent, setRequestSent] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state, "catrgorys");
    // console.log(location.state, "catrgoryss");


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

    const sendRequest = async (userId) => {
        console.log(userId);
        
        try {
            const response = await axios.post(`${backend_API}/request/sentRequest`, {
                receiverId: userId,
            }, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
              });
              console.log(response.data,"sended res")
              
    
          if (response.status === 200) {
            alert("Request Sent Successfully!");
             setRequestSent(true); // Update state to show Cancel button  
            
            
          } else {
            alert("Failed to send request!");
          }
        } catch (error) {
          console.error("Error sending request:", error);
          alert("Something went wrong. Try again.");
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
                                service.length > 0 ? (
                                    service.map((user, i) => (
                                        <SearchResult key={i} user={user} token={token}  />
                                    ))
                                ) : (
                                    <h4>No item Found</h4>
                                )
                            }
                            


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServiceDetail
