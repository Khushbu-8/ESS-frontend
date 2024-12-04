import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navebar'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location?.state?.cat);

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
    {
        id: 4,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category: "BAGGI (HORSE CART)"
    },
    ]


    return (
        <>
            <Navebar />
            

            <section className='mt-24'>
                <div className="container">
                    <div className="row">
                        <div className='d-flex'>
                            <h3 className='py-4 px-3'>Servies Detaile </h3>

                        </div>

                        <div className="col-12 d-flex flex-wrap">
                            {
                                profile.map((card, i) => {
                                    return (
                                        <div className="col-12 col-md-6 w-full col-lg-3 p-2 ">
                                            <div className="bg-white rounded-md overflow-hidden flex d-md-block w-full">
                                                <div className='col-5 col-md-12'>
                                                    <img className='w-full'
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Movie" />
                                                </div>
                                                <div className="p-3 col-10 col-md-12 ">
                                                    <h2 className="card-title">{card.name}</h2>
                                                    <p>{card.email}</p>
                                                    <p>{card.phone}</p>
                                                    <p>{card.address}</p>
                                                   
                                                    <div className="rating rating-sm">
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400  " />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" defaultChecked />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                                        <span className='pl-3'>245 rating</span>
                                                    </div>
                                                   
                                                  <div className=' pt-3'>
                                                  <Link className='btn pt-2  bg-orange rounded-1 text-semibold text-white '>
                                                        View Profile
                                                    </Link>
                                                  </div>

                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }




                        </div>
                    </div>
                </div>
            </section>
            <div className='card card-compact bg-base-100 shadow-xl mt-32'>
                <h1 className='text-xl mb-4'>Detail</h1>
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
                            {/* row 1 */}
                            <tr>
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
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
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
                                                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                            <div className="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>Red</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>



                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail
