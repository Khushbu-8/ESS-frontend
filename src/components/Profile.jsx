import axios from 'axios'
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')

    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token, "token");
    if (token) {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
    
        // Access specific values
        const userId = decoded.userId;
        const email = decoded.email;
        console.log("User ID:", userId);
        console.log("Email:", email);
    } else {
        console.error("No token found.");
    }

    const fetchData = () => {

        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post('https://ees-121-backend.vercel.app/auth/getUser', {}, header)
            .then((res) => {
                setLoading(false)
                setData(res.data.data)
                console.log("User data fetched", res);
            })
            .catch((err) => {
                console.log("Error while fetch data", err)
                setLoading(false)
            })
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