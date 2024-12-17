import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

const  ServieceCategories = ({ categories }) => {
 
    const navigate = useNavigate();
  

    return (
        <>
        <section>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-4">
              <label className=" px-3  border  flex items-center gap-2 ">
                <input type="text" className="grow outline-none  bg-base-100 p-2 "  placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section className='mt-2'>
            <div className="container">
                <div className="row row-cols-3 row-cols-lg-5 g-lg-3">
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index} className="col" style={{ cursor: "pointer" }} onClick={() => navigate(`/editprofile`, { state: item })}>
                                    <div className="border-0 w-100 h-100 text-center items-center justify-content-center rounded-md">
                                        <figure className='w-full m-0 p-2'>
                                            <img className='img-fluid w-100 rounded-md overflow-hidden' style={{ objectFit: "cover" }} src={item.image} alt={item.categoryName} />
                                        </figure>
                                        <h6 className='text-md text-capitalize'>{item.categoryName}</h6>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>

        </>
    )
}

export default ServieceCategories