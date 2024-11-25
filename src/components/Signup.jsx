import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [contact, setContact] = useState('');
    const navigete = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      // const newdata = { name, email, password,confirmPassword, role, contact, address };
  
      try {
        const record = await axios.post(`https://ess-backend.vercel.app/register`, {
            name: name,
            email: email,
            password: password,
            cpassword: cpassword,
            role: role,
            contact: contact,
            address: address
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await record.data;
        console.log(data);
        alert('User Added Successfully');
        navigete('/')
  
    } catch (error) {
        console.log(error);
        return false;
    }
  
  }
  
  
    return (
        <div className="bg-gray-100 flex items-center dark:bg-slate-900 justify-center min-h-screen">
            <div className="modal-box bg-white p-8 rounded-lg shadow-lg w-96">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</Link>
                </form>
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
             <form  onSubmit={handleSubmit}   className='py-3 text-start'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Name
                                </label>
                                <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                            </div>
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
                                    Register
                                </button>
                            </div>
                        </form>
                <p className="mt-4 text-center text-gray-600 text-sm ">
                    Already have an account? <button   onClick={() => document.getElementById('my_modal_3').showModal()}className="text-red-500 hover:text-red-700 ">Log in</button>
                    <Login/>
                </p>
            </div>
        </div>
    );
};

export default Signup;