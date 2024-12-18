import React from 'react'
import { FaUserAltSlash } from 'react-icons/fa'

const GetAdmin = () => {
    return (
        <>
            <li className=' p-2 rounded hover:bg-primary hover:text-white focus:text-white '>
                <Link  className=' text-lg d-flex align-items-center'>
                    <span className='inline-block mr-2 text-xl '><FaUserAltSlash /></span>
                    Addmin</Link>
            </li>
        </>
    )
}

export default GetAdmin
