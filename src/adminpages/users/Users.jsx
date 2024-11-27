import { useState, useEffect } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

import { Link, useNavigate } from 'react-router-dom';
const Users = () => {
	const [record,setRecord] = useState([])
  const navigete = useNavigate();
  //  const backend_API = "http://localhost:4000"
  const backend_API = "https://ess-backend.vercel.app"

  const FetchData = async () => {
    try {
      const response = await fetch(`https://ees-121-backend.vercel.app/auth/getuser`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data);
      

   // Parse manually to catch issues
      if (data.success) {
        setRecord(data.user);
      } 
    } catch (err) {
      console.log('Error fetching users:', err.message);
    }
  };
 
 
   useEffect(() =>{
    FetchData();
  }, []);
  
  const DeletUser = async(id) =>{
    try {
        const record = await fetch(`${backend_API}/admin/deleteUser`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id})
        })
        const res = await record.json()
       if(res.success){
        alert("User deleted successfully");
        FetchData();
       }
        
    } catch (error) {
        console.log(error);
        
    }

}
  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4  dark:text-white">All User</h1>
      <table className="min-w-ful dark:text-white ">
        <thead>
          <tr >
            <th className="px-4 py-2 ">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">ContactNo</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Business Name</th>
            <th className="px-4 py-2">Business Category</th>
            <th className="px-4 py-2">Business Address</th>
            <th className="px-4 py-2">Action</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
{
    record.map((val,i) =>{
        const {_id,name,email,password,contact,address,role,businessName,businessCategory,businessAddress} = val;
       return(
        <tr key={i}>
            <td className="px-4 py-2">{++i}</td>
            <td className="px-4 py-2">{name}</td>
            <td className="px-4 py-2">{email}</td>
            <td className="px-4 py-2">{password}</td>
            <td className="px-4 py-2">{contact}</td>
            <td className="px-4 py-2">{address}</td>
            <td className="px-4 py-2">{role}</td>
            <td className="px-4 py-2">{businessName}</td>
            <td className="px-4 py-2">{businessCategory}</td>
            <td className="px-4 py-2">{businessAddress}</td>
            <td className="px-4 py-2 flex flex-row">
                <button onClick={() => DeletUser(_id)} className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 mx-2"><AiTwotoneDelete /></button>
                <button onClick={() => navigete(`/dashboard/editUser`,{state:val})} className="bg-green-800 hover:bg-green-700 text-white font-bold p-2"><CiEdit /></button>
            </td>
        </tr>
       )
    })
}
        </tbody>
      </table>
    </div>


  );
};

export default Users;
