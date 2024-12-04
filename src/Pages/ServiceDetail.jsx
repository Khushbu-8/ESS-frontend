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
           
        </>
    )
}

export default ServiceDetail
