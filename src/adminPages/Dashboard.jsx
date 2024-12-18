import React, { useEffect, useState } from 'react'
import AdminHeader from '../admincomponents/AdminHeader'
import AdminSidebar from '../admincomponents/AdminSidebar'
import UserCount from '../admincomponents/dashboardCpmponent/UserCount'
import axios from 'axios';

const backend_API = import.meta.env.VITE_API_URL;

const Dashboard = () => {
 const [Users, setUsers] = useState([]);

    const fetchData = async () => {

        // const token = JSON.parse(localStorage.getItem('token'))
        //   console.log(token, "token Edit");
        try {
          const response = await axios.get(`${backend_API}/auth/getAllUser`, {
            headers: {
              'Content-Type': 'application/json',
    
            },
    
          });
          const data = await response.data;
          setUsers(data.user)
          console.log(data, "AllUser");
          if (response.status === 200) {
    
            console.log("All User Successful...");
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
    <AdminHeader/>
    <AdminSidebar/> 
    <section className='mt-32'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="">Dashboard</h3>
                </div>
                <div className="col-12 pt-3">
                   <div className="col-12 col-md-3">
                   <UserCount Users ={Users}/>
                   </div>
                </div>
            </div>
        </div>
    </section>
  
    </>
  )
}

export default Dashboard
