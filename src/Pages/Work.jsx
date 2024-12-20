import React, { useEffect, useState } from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import UserSideBar from '../components/UserSideBar'
import Recievedrequest from '../components/Recievedrequest'
import AllRequests from './AllRequests'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Senedrequest from '../components/Senedrequest'

const backend_API = import.meta.env.VITE_API_URL; 

const Work = () => {
    const token = JSON.parse(localStorage.getItem('token'))
     const [recievedRequest,setRecievedRequest] = useState([])
      const [sendedRequest, setSendedRequest] = useState([]);
      const [currentRequest, setCurrentRequest] = useState('');
    const requests = [
        {
            id: 1,
            name: "Sended Request",
            // path : "/work/sendrequest"
        },
        {
            id: 1,
            name: "Resived Request",
            // path : "/work"
        },
    ]
 const hendleRequest = (req) =>{
    console.log(req);
    setCurrentRequest(req); 
    
      
 }
    
    const fetchUserRequests = async () => {
        try {
          const response = await axios.get(`${backend_API}/request/getUserRequests`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const all = await response.data;
        const recieve = await response.data.receivedRequests;
        const sended = await response.data.sendedRequests;
        // setRecievedRequest(recieve)
        console.log(all, "All reuestss");
        console.log(recieve, "reciev reuestss");
        console.log(sended, "sended reuestss");
        setSendedRequest(sended)
        setRecievedRequest(recieve)
          if (response.status === 200) {  
            // console.log("Requests fetched successfully:", response.data.receivedRequests);        
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
            <AdminNavbar />
            <UserSideBar />
            <div className='mt-32'>
            <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex gap-3">

                                {
                                    requests.map((req, i) => {
                                        return (
                                            <div key={i} className="receivReqBtn" onClick={ () => hendleRequest(req.name)}>
                                                <Link   className={`btn btn-success rounded-0 text-white`}>
                                                    {req.name}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mt-4">
                    {/* Render based on current request type */}
                    {currentRequest === "Sended Request" && (
                        <Senedrequest sendedRequest={sendedRequest} />
                    )}
                    {currentRequest === "Received Request" && (
                        <Recievedrequest recievedRequest={recievedRequest} />
                    )}
                </div>
                {/* <Senedrequest sendedRequest= {sendedRequest}/>    */}
                {/* <Recievedrequest /> */}
                {/* <AllRequests/> */}
            </div>
        </>
    )
}

export default Work