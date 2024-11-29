import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import jwtDecode from 'jwt-decode'

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')

    
    const fetchData = () => {

        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token, "token");
        if (token) {
            // Split the token into its components
            const payload = token.split('.')[1];
        
            // Decode the Base64 URL-encoded payload
            const decodedPayload = JSON.parse(atob(payload));
            console.log("Decoded Token:", decodedPayload);
            setData(decodedPayload.user)
            console.log("User ID:", userId);
            console.log("Email:", email);
            console.log("Name:",name);
        } else {
            console.error("No token found.");
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