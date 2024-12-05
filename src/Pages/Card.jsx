import React from 'react'

const Card = () => {
   
    return (
        <>
            <section className='mt-24 p-4'>
                <div className="container">
                    <div className="row">
                        <div className="card border-0 card-side bg-base-100 rounded-md shadow-xl w-full p-3   pt-3  ">
                            <div className="sm:grid sm:grid-cols-3 w-full sm:gap-4 sm:px-0">
                                <div className="text-sm/6  text-gray-900 py-2">
                                    <figure className='py-2'>
                                        <img className='rounded-md w-[200px]  overflow-hidden'
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Movie" />
                                    </figure>
                                    <div className='text-center'>
                                        <h1 className='text-xl'>Joye</h1>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400  " />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" defaultChecked />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <span className='pl-3'>245 rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center text-start gap-5">
                                        <div className=' text-xl p-2 w-1/6'>
                                            <h5 >Email</h5>
                                        </div>
                                        <div className='p-2 text-lg text-gray'>
                                            <p>Email@gmail.com</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">

                                        <div className=' text-xl p-2 w-1/6'>
                                            <h5 >Contact</h5>
                                        </div>
                                        <div className='p-2 text-lg text-gray'>
                                            <p>9442556634</p>
                                        </div>

                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">
                                        <div className=' text-xl p-2 w-1/6'>
                                            <h5 >Address</h5>
                                        </div>
                                        <div className='p-2 text-lg text-gray'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                        </div>
                                    </div>
                                    <div className=" p-2 shadow-xl mb-1 bg-white d-flex align-items-center gap-5">

                                        <div className=' text-xl p-2 w-1/6'>
                                            <h5 >PFP</h5>
                                        </div>
                                        <div className='p-2  d-flex justify-content-center'>
                                            <input
                                                type="checkbox"
                                                value="synthwave"
                                                className="toggle theme-controller hover:bg-red-500  border-red-400 bg-red-500  checked:border-green-800 checked:bg-green-500  checked:hover:bg-green-500 " />
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
