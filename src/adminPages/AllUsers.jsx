import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../admincomponents/AdminHeader';
import AdminSidebar from '../admincomponents/AdminSidebar';

const backend_API = import.meta.env.VITE_API_URL;

// const backend_API = "https://ees-121-backend.vercel.app"

const AllUsers = () => {

  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
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

  const DeletUser = async (uid) => {
    console.log(uid);


    try {
      const response = await axios.delete(`${backend_API}/auth/deleteUser`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: { id: uid },
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
    <AdminHeader/>
    <AdminSidebar/>
<section className='mt-32'>
<div className="container-fluid">
      <div className=' card bg-base-100 shadow-xl mt-5'>
      <div className="card-header text-xl text-bold z-30 py-3">All Users</div>
        <div className="overflow-x-auto ">
        
          {/* <h1 className='text-center text-xl text-bold z-30 py-3'>All Users</h1> */}
          <table className="table table-bordered  flex  z-0 border  p-5">
            {/* head */}
            <thead className='text-bold text-[15px] text-black z-30'>
              <tr>
                <th >SrNo</th>
                <th >Name</th>
                <th >Email</th>
                <th >Contect</th>
                <th >Address</th>
                <th >businessName</th>
                <th >businessCategory</th>
                <th >businessAddress</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((user, i) => {
                  return (
                    <tr key={i}>
                      <th>{++i}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user?.address?.area} {user?.address?.city} {user?.address?.state} {user?.address?.country} {user?.address?.pincode}</td>
                      <td>{user.businessName}</td>
                      <td>{user.businessCategory}</td>
                      <td>{user.businessAddress}</td>
                      <td className='d-flex'>
                        <button onClick={() => DeletUser(user._id)} className='btn-xl m-1 fs-3 text-primary'><MdOutlineDeleteOutline /></button>
                        <button onClick={() => navigate(`/admin/editUser`, { state: user })} className='btn-xl fs-4 text-green-500'><FaEdit /></button>
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
                <td>Blue jjjjj</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae architecto quis, ex hic sit explicabo perferendis repudiandae! Doloribus odit numquam aut vel corrupti perferendis, repudiandae exercitationem eius sit temporibus?</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat delectus magnam, recusandae eaque cum rem qui explicabo at quo rerum error exercitationem! Consequuntur, ratione doloremque beatae pariatur amet nemo alias.</td>
                <th>
                  <button className=' m-1 text-xl  text-red-500'><MdOutlineDeleteOutline /></button>
                  <button className=' m-1 text-xl text-green-500'><FaEdit /></button>
                </th>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      </div>
</section>
     
    
     
    </>
  )
}

export default AllUsers
