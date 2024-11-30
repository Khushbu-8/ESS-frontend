import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const AllUsers = () => {

  const [userList, setUserList] = useState([]);
  const fetchData = async () => {
    const backend_API = "https://ees-121-backend.vercel.app/auth/getAllUser"
    // const token = JSON.parse(localStorage.getItem('token'))
    //   console.log(token, "token Edit");
    try {
      const response = await axios.get(backend_API, {
        headers: {
          'Content-Type': 'application/json',

        },

      });
      const data = await response.data;
      setUserList(data.user)
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

      <div className='mx-5'>
        <div className="overflow-x-auto  z-30  p-5">
          <h1 className='text-center text-xl text-bold z-30'>All Users</h1>
          <table className="table  flex  z-0 border  p-5">
            {/* head */}
            <thead className='text-bold text-lg text-black z-30'>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Contect</th>
                <th>Address</th>
                <th>businessName</th>
                <th>businessCategory</th>
                <th>businessAddress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((user, i) => {
                  return (
                    <tr key={i}>
                      <th>{++i}</th>
                      <th>{user.name}</th>
                      <th>{user.email}</th>
                      <th>{user.phone}</th>
                      <th>{user.address}</th>
                      <th>{user.businessName}</th>
                      <th>{user.businessCategory}</th>
                      <th>{user.businessAddress}</th>
                      <th>
                        <button className=' m-1 text-xl'><MdOutlineDeleteOutline /></button>
                        <button className=' m-1 text-xl'><FaEdit /></button>
                      </th>
                      
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllUsers
