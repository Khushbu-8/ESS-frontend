import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaLocationDot, FaPhone, FaStar } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import acService from '../../public/service-icons/ac service.png'

const backend_API = import.meta.env.VITE_API_URL; 

// const backend_API = "https://ees-121-backend.vercel.app"


const Recievedrequest = ({recievedRequest}) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const [recievedRequest,setRecievedRequest] = useState([])
      const [requestAccept, setRequestAccept] = useState(false);
 
    const naviget = useNavigate()

    // const requests = [
    //     {
    //         id: 1,
    //         name: "Sended Request",
    //         path: "/reciecedrequest"
    //     },
    //     {
    //         id: 1,
    //         name: "Resived Request"
    //     },
    // ]

    // const fetchUserRequests = async () => {
    //     try {
    //       const response = await axios.get(`${backend_API}/request/getUserRequests`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //     });
    //     const recieve = await response.data.receivedRequests;
    //     setRecievedRequest(recieve)
    //     console.log(recieve, "reciev");
    //       if (response.status === 200) {  
    //         console.log("Requests fetched successfully:", response.data.receivedRequests);        
    //       } else {
    //         console.error("Failed to fetch requests:", response.data.message);
    //         return null;
    //       }
    //     } catch (error) {
    //       console.error("Error fetching user requests:", error);
    //       alert("Failed to fetch user requests. Please try again.");
    //       return null;
    //     }
    //   };
    //   useEffect(()=>{
    //     fetchUserRequests();
    //   },[])

      const hendleAccept = (id) =>{

        console.log(id, "accept");
        setRequestAccept(true)

      }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-12 pt-4 pb-3">
                            <h2>Recieved Request</h2>
                        </div>
                        <div className="col-12 flex flex-wrap py-2">
                            {
                                recievedRequest.map((receive,i) =>{
                                    return(
                                        <div className="col-12 col-md-6 w-full col-lg-4 p-1">
                                        <div className="bg-white border-black rounded-md overflow-hidden d-flex shadow flex-md-column " style={{position:"relative"}}>
                                            <div className='col-5 col-md-12 d-flex'>
                                              <div className="img p-2 " style={ {height:"300px" , width:"100%"}}>
                                              <img className='img-fluid rounded'
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                                                    alt="Movie" style={{width:"100%",height:"100%",objectFit:"cover" ,objectPosition:"top"}} />
                                              </div>
                                              <span className='bg-success position-absolute rounded-full top-5 end-5  p-1 text-sm text-white px-2'>open</span>
                                            </div>
                                            <div className="p-3 pt-0 col-7 col-md-12 d-flex align-items-center">
                                               <div className='w-full '>
                                                <div className='d-flex flex-column flex-md-row justify-content-start justify-content-md-between'>
                                                <div className="rating rating-sm d-flex align-items-center">
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' />
                                                    <FaStar className='text-warning' /> 
                                                </div>
        
                                                    <h6 className='d-flex align-items-center text-orange m-0 text-sm'><span>
                                                        <img src={acService} width={40} alt="" />
                                                        </span> {receive.user.businessCategory}</h6>
                                                        
                                                </div>
                                               <h4 className="">{receive.user.name}</h4>
                                                <h6 className='pt-2'></h6>
                                                <p className='d-flex align-items-center gap-1' ><FaLocationDot/> { receive.user.address.area} </p>
        
                                                <div className='pt-2 d-flex flex-column flex-md-row gap-3  justify-content-between align-items-start w-100 flex-md-row'>
                                                    {
                                                        !requestAccept ? (<Link className='btn p-0  pt-2 gap-2  d-flex align-items-center  rounded-1 text-semibold text-success ' onClick={ () =>hendleAccept(receive.user._id)}>
                                                  
                                                        Accept
                                                        </Link>):(<Link className='btn p-0  pt-2 gap-2  d-flex align-items-center  rounded-1 text-semibold text-success ' onClick={ () =>hendleAccept(receive.user._id)}>
                                                    <FaPhone /> Contect Now
                                                    
                                                    </Link>)
                                                    }
                                                    <Link className='btn pt-2  w-50  border-orange rounded-1 text-semibold text-orange btn-outline-orange '>
                                                        cancel
                                                    </Link>
                                                </div>
        
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