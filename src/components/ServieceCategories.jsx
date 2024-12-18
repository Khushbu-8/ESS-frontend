import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

const  ServieceCategories = ({ categories }) => {
 
    const navigate = useNavigate();
  

    return (
        <>
      
        <section className='mt-2'>
            <div className="container">
                <div className="row row-cols-3 row-cols-lg-5 g-lg-3">
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index} className="col " style={{ cursor: "pointer" }} onClick={() => navigate(`/serviceDetail`, { state: item })}>
                                    <div className="border-0 w-100 h-100 text-center items-center justify-content-center rounded-md">
                                        <figure className='w-full m-0 p-4 '>
                                            <img className='img-fluid w-100 p-3 border-orange rounded-4 overflow-hidden' style={{ objectFit: "cover" }} src={item.image} alt={item.categoryName} />
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