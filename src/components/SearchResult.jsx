import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { HiDotsHorizontal } from "react-icons/hi";
const backend_API = import.meta.env.VITE_API_URL; 

// const backend_API = "https://ees-121-backend.vercel.app"

const SearchResult = ({user,token}) => {
    const [requestSent, setRequestSent] = useState(false);
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
              console.log(response.data.sender,"sended status")

              
    
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
    


    return (

        <>
            <div  className="col-12 col-md-6 col-xl-3 p-2" style={{ cursor: "pointer" }}>
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
    
{/* 
                            {
                                !requestSent ? (<button className='btn btn-success' onClick={() => sendRequest(user._id)}>
                                    Contect Now
                                </button>) : (<button className='btn btn-success'>
                                    cancel
                                </button>)
                            } */}

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchResult