import React, { useEffect, useState } from 'react'
import { FaLocationDot, FaPhone, FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import AdminNavbar from '../admincomponents/AdminNavbar'
import UserSideBar from './UserSideBar'
import acService from '../../public/service-icons/ac service.png'
import axios from 'axios'

const backend_API = import.meta.env.VITE_API_URL;

const Senedrequest = ({sendedRequest}) => {
    const [status, setStatus] = useState('');

    const token = JSON.parse(localStorage.getItem('token'))
    const cancleRequest = async(senderId) => {

        try {
            const response = await axios.get(`${backend_API}/request/getUserRequests`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data : {senderId}
            });
           alert("Requests cansel successfully:")
            if (response.status === 200) {
                console.log("Requests Cancle successfully:", response.data);        
            } else {
                console.error("Failed to cancle requests:", response.data.message);
                return null;
            }
        } catch (error) {
            console.error("Error cancel user requests:", error);
            alert("Failed to cancle user requests. Please try again.");
            return null;
        }
        

    }
    useEffect(() => {
        if(sendedRequest){
           setStatus(sendedRequest.status)
        }
    },[sendedRequest])
    console.log(status,"status");
    

    return (
        <>
            <AdminNavbar />
            <UserSideBar />
            <div className='mt-2'>
                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-12 pt-3">
                                <h4>Sended Request</h4>
                            </div>
                            <div className="col-12 flex flex-wrap py-2">
                                {sendedRequest.map((receive, i) => {
                                    return (
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
                                               <div className='w-full pt-2'>
                                                <div className='d-flex flex-column flex-md-row  justify-content-start justify-content-md-between'>
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
        
                                                <div className='pt-2 d-flex   gap-2  justify-content-between align-items-start w-100 flex-md-row'>
                                                   {/* after accept */}
                                                    {/* <Link className='btn p-0  pt-2 gap-2  d-flex align-items-center  rounded-1 text-semibold text-success '>
                                                    <FaPhone /> Contect Now
                                                    </Link> */}
                                                    <Link   className='btn pt-2  w-50  border-orange rounded-1 text-semibold text-orange btn-outline-orange' >
                                                       {receive.status}
                                                    </Link>

                                                    {
                                                        status === "canceled" ? (
                                                            <Link onClick={() => cancleRequest(receive._id)} className='btn pt-2  w-50  border-green rounded-1 text-semibold text-green btn-outline-orange' >
                                                            Contect Now
                                                         </Link>
                                                        ) : ( <Link onClick={() => cancleRequest(receive._id)} className='btn pt-2  w-50  border-orange rounded-1 text-semibold text-orange btn-outline-orange' >
                                                        cancle
                                                     </Link>)
                                                    }
                                                   
                                                                                                     
                                                   
                                                </div>
        
                                               </div>
        
                                            </div>
                                        </div>
                                    </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>

                </section>
            </div>


        </>
    )
}

export default Senedrequest