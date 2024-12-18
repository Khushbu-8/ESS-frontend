import axios from 'axios';
import React, { useState } from 'react'
import { FaUserAltSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const GetAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await axios.get(`${backend_API}/auth/getAdmin`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                });
                console.log( response.data,"admin response");
                alert("admin true")
                // if (response.status === 200 && response.data.isAdmin) {
                //     setIsAdmin(true);
                // }
            } catch (error) {
                console.error('Error checking admin access:', error);
                // setIsAdmin(false);
            }
        };

        checkAdmin();
    }, []);

    return (
        <>
            <li className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white '>
                <Link  className=' text-lg d-flex align-items-center'>
                    <span className='inline-block mr-2 text-xl '><FaUserAltSlash /></span>
                    Admin</Link>
            </li>
        </>
    )
}

export default GetAdmin
