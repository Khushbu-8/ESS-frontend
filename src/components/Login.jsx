import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const naviget = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://ess-backend.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
          'Accept': 'application/json',
          withCredentials: true
        },
        
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = '/dashboard';
        naviget('/dashboard')
        console.log('Login successful!');
      } else {
        // Handle error responses
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
      }
      
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

      
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
                        <form onSubmit={handleSubmit} method='post' className='py-3 text-start'>
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                               />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>

                        <Link class="mt-5 text-center text-gray-600 text-sm" to={'/signup'}>
                            Don't have an account?
                            <a href="#" class="text-red-500 hover:text-red-700 ps-1">Sign up</a>
                        </Link>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
