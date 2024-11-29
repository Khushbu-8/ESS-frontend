import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const isAuthenticated = localStorage.getItem("token");
    const navigete = useNavigate();
    if (isAuthenticated) {
      // Redirect to a protected page if already logged in
      return <Navigate to="/" />;
  }
  const handleSubmits = (e) =>{
    e.preventDefault();

  }
  return (
    <>
    <div className="max-w-2xl mx-auto p-8 bg-white shadow rounded-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
      <form action="" onSubmit={handleSubmits}>
                  <div className="mx-auto max-w-xs">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" placeholder="Name" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" placeholder="Email" />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" />
                    <input
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Confirm Password" />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Contect" />

                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="text" placeholder="Address" />

                    <button type='submit' className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-4">
                        Sign Up Next
                      </span>
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-600">
                      Allready have an account? <Link to={'/login'} className="text-green-600 hover:underline">login </Link>
                    </p>
                  </div>
                </form>
    </div>

    </>
  )
}

export default EditProfile
