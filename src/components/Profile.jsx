import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')


    const token = JSON.parse(localStorage.getItem('token'))

    const fetchData =async() => {
        try {
            const response = await fetch(`https://ees-121-backend.vercel.app/auth/getUser`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' ,
               Authorization: `Bearer ${token}`
              },
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
    }
    console.log("data", data)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <p className='text-center font-semibold mt-3'>{loading && "Data is loading..."}</p>
            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Name : {data.name}</h2>
                    <p className="text-gray-700 text-base mb-2">Email: {data.email}</p>
                    <p className="text-gray-700 text-base">ID: {data.id}</p>
                </div>

            </div>
        </div>
    )
}

export default Profile