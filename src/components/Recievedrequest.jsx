import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPhone, FaStar } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const Recievedrequest = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const LoginData = JSON.parse(localStorage.getItem("Users"))

    const [recievedRequest,setRecievedRequest] = useState([])
    const [loginData,setLoginData] = useState(LoginData)
    console.log(loginData.received_requests,"req");
    const naviget = useNavigate()
    


    const requests = [
        {
            id: 1,
            name: "Sended Request",
            path: "/reciecedrequest"
        },
        {
            id: 1,
            name: "Resived Request"
        },
    ]

    const fetchUserRequests = async () => {
        try {
          const response = await axios.get(`https://ees-121-backend.vercel.app/request/getUserRequests`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const recieve = await response.data.receivedRequests;
        setRecievedRequest(recieve)
        console.log(recieve, "reciev");
        

        
          if (response.status === 200) {
           
            console.log("Requests fetched successfully:", response.data.receivedRequests);

        
          } else {
            console.error("Failed to fetch requests:", response.data.message);
            return null;
          }
        } catch (error) {
          console.error("Error fetching user requests:", error);
          alert("Failed to fetch user requests. Please try again.");
          return null;
        }
      };
      useEffect(()=>{
        fetchUserRequests();
      },[])

    return (
        <>
         

            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-12 pt-3">
                            <h4>recieved Request</h4>
                        </div>
                        <div className="col-12 flex flex-wrap py-2">
                            {
                                recievedRequest.map((receive,i) =>{
                                    return(
                                        <div className="col-12 col-md-6 w-full col-lg-4 p-1">
                                        <div className="bg-white border rounded-md overflow-hidden d-flex shadow flex-md-column " style={{position:"relative"}}>
                                            <div className='col-5 col-md-12 d-flex'>
                                              <div className="img p-2" style={ {height:"250px" , width:"100%"}}>
                                              <img className=' img-fluid'
                                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                    alt="Movie" style={{width:"100%",height:"100%",objectFit:"cover" ,objectPosition:"top"}} />
                                              </div>
                                              <span className='bg-success position-absolute rounded-full top-5 end-5  p-1 text-sm text-white px-2'>open</span>
                                            </div>
                                            <div className="p-3 col-10 col-md-12 ">
                                                <h4 className="">{receive.user.name}</h4>
                                                <h6 className='pt-2'>{receive.user.businessCategory}</h6>
                                                <p> { receive.user.address.area} </p>
                                                <div className="rating rating-sm d-flex align-items-center">
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' /> <span className='ps-2'>rating</span>
                                                </div>
        
                                                <div className='pt-2 d-flex flex-wrap justify-content-between flex-column flex-md-row'>
                                                    <Link className='btn  pt-2 gap-2  d-flex align-items-center  rounded-1 text-semibold text-success '>
                                                    <FaPhone /> Contect Now
                                                    </Link>
                                                    <Link className='btn pt-2  w-50  bg-orange rounded-1 text-semibold text-white '>
                                                        cancel
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

export default Recievedrequest