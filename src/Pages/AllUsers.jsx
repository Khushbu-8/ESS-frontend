import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllUsers = () => {
 
  const[userList, setUserList] = useState([]);
  const fetchData = async () => {
    const backend_API = "https://ees-121-backend.vercel.app/auth/getuser"
    // const token = JSON.parse(localStorage.getItem('token'))
    //   console.log(token, "token Edit");
    try {
        const response = await axios.get(backend_API, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.data;
        setUserList(data)
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
  <table className="table position-absolut flex bg-red-100 z-0 border  p-5">
    {/* head */}
    <thead className='text-bold text-md text-black z-30'>
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </>
  )
}

export default AllUsers
