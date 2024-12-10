import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import AdminNavbar from '../admincomponents/AdminNavbar';
import UserSideBar from '../components/UserSideBar';

const ServiceDetail = ({selectedItem ,handleItemCaregory}) => {


    return (
        <>
        <AdminNavbar/>
        <UserSideBar/>          
          <section>
                <div className="container">
                    <div className="row">

                        <div className="col-12 flex flex-wrap">
                            {
                                selectedItem ? (
                                    selectedItem.map((user, i) => {
                                        return (
                                            <div key={i} className="col-12 col-md-6 col-xl-3 p-2" onClick={() => handleItemCaregory(user.businessCategory)} style={{ cursor: "pointer" }}>
                                                <div className="card border-0 bg-base-100 shadow-xl" >
                                                    <div className='d-flex justify-content-between'>
                                                        <figure className='rounded-md m-3'>
                                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                                            </img>
                                                        </figure>
                                                        <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                    </div>
                                                    <div className='p-3'>
                                                        <h2 className=" font-bold">{user.name}</h2>
                                                        <h5 className=" font-bold">{user.businessCategory}</h5>
                                                        <h6 className=" font-bold">{user.address}</h6>

                                                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                        <div className="rating rating-sm py-4 d-flex align-items-center">
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/> <span className='ps-2'>rating</span>
                                                    </div>

                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                ) : (
                                    <h4>No item Found</h4>
                                )
                            }
                       

                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default ServiceDetail
