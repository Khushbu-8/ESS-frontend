import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {

  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
   const backend_API = "https://ees-121-backend.vercel.app"
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

  const DeletUser = async(id) =>{
    console.log(id);
    

    try {
      const response = await axios.post(`${backend_API}/auth/deleteUser`, { id: id }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(response.data, "delet data");
      if (response.status === 200) {

        alert("User deleted successfully");
        console.log("User deleted successfully");
        
        fetchData();
      }
        
    } catch (error) {
        console.log(error);
        
    }

}

  return (
    <>
 
      <div className='mx-5'>
        <div className="overflow-x-auto  z-30  p-5">
          <h1 className='text-center text-xl text-bold z-30'>All Users</h1>
          <table className="table  flex  z-0 border  p-5">
            {/* head */}
            <thead className='text-bold text-[15px] text-black z-30'>
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
                      <th>{user._id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.businessName}</td>
                      <td>{user.businessCategory}</td>
                      <td>{user.businessAddress}</td>
                      <td>
                        <button onClick={() => DeletUser(user._id)} className=' m-1 text-xl text-red-500'><MdOutlineDeleteOutline /></button>
                        <button onClick={() => navigate(`/admin/editUser`, { state: user })}  className=' text-xl text-green-500'><FaEdit /></button>
                      </td>

                    </tr>
                  )
                })
              }

              {/* <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <th>
                  <button className=' m-1 text-xl  text-red-500'><MdOutlineDeleteOutline /></button>
                  <button className=' m-1 text-xl text-green-500'><FaEdit /></button>
                </th>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllUsers
