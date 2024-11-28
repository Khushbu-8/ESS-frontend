import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const backend_API = "https://ees-121-backend.vercel.app/auth/loginUserweb";
    
            const response = await axios.post(backend_API, {
                phone,
                password,
            }, {
                withCredentials: true, // Important: send cookies with the request
            })
            
            console.log(response.data);
        const token =  JSON.stringify(response?.data?.refreshToken);
          
            if (response.status === 200) {
              localStorage.setItem("token",token)
                navigate("/"); // Corrected 'naviget' to 'navigate'
                console.log("Login Successful...");
            }
        } catch (error) {
            toast("Login Failed");
            console.log(error, "fetch error");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2 disabled:opacity-70 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        {loading ? 'Submitting..' : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
