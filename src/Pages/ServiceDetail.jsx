import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navebar'
import { useNavigate } from 'react-router-dom';

const ServiceDetail = ({filterrecord}) => {
    
    const navigate = useNavigate();

    let profile = [{
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category: "A.C. SERVICE"

    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        address: "456 Elm St, Anytown, USA",
        category: "AUTO RICKSHAW"
    },
    {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category: "BAGGI (HORSE CART)"
    },
    ]

  
  return (
    <>
    <Navebar/>
    <div className='card card-compact bg-base-100  shadow-xl mt-24'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Bussiness</th>
                                <th>profile</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                filterrecord.map((p, i) => (
                                    <tr key={p.id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://via.placeholder.com/150"
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{p.name}</div>
                                                    <div className="text-sm opacity-50">{p.email}</div>
                                                    <div className="text-sm opacity-50">{p.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{p.category}</td>
                                        <td>
                                            <button className="btn">View Profile</button>
                                        </td>
                                    </tr>
                                ))
                            } */}


                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
    </>
  )
}

export default ServiceDetail
