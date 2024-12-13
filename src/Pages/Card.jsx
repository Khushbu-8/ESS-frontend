import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = () => {

    return (
        <>
            <section className='mt-24 p-4'>
                <div className="container">
                    <div className="row">
                        <div className="card border-0 card-side bg-base-100 rounded-md shadow-xl w-full p-3   pt-3  ">
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-12 col-lg-4 w-full d-flex justify-content-center  text-gray-900 py-2">
                                   <div>
                                   <figure className='py-2'>
                                        <img className='rounded-md w-[200px]  overflow-hidden'
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Movie" />
                                    </figure>
                                    <div className='text-center'>
                                        <h1 className='text-xl'>Joye</h1>
                                        <div className="rating rating-sm py-4 w-full text-center d-flex align-items-center  justify-content-center">
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' /> 
                                        </div>
                                    </div>
                                   </div>
                                </div>
                                <div className="mt col-12 col-lg-8  text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <div className=" p-2  shadow-xl mb-1 bg-white d-flex align-items-center text-start gap-5">
                                        <div className='  p-2 w-1/6'>
                                            <h6 >Email</h6>
                                        </div>
                                        <div className='p-2  text-gray'>
                                            <p>Email@gmail.com</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">

                                        <div className='  p-2 w-1/6'>
                                            <h6 >Contact</h6>
                                        </div>
                                        <div className='p-2 text-gray'>
                                            <p>9442556634</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">
                                        <div className='  p-2 w-1/6'>
                                            <h6 >Address</h6>
                                        </div>
                                        <div className='p-2  text-gray'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                        </div>
                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">

                                        <div className='text-sm p-2 w-1/6'>
                                            <h6 >Available</h6>
                                        </div>
                                        <div className='p-2  d-flex justify-content-center'>
                                            <div className="checkbox-con">
                                                <input id="checkbox" type="checkbox" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Card
