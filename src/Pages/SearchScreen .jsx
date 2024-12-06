import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar';
import { FaSearch } from 'react-icons/fa';

const SearchScreen = () => {
    return (
        <>
            <UserSideBar />
            <div className="container">
                <div className="row">
                    <div className='col-12 p-0'>
                        <form action=""  className='d-flex flex-wrap'>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                    <input
                                        type="text"
                                        // onChange={(e) => setSearch(e.target.value)} value={search}
                                        className=' w-100 outline-0 bg-transparent ' placeholder="Search For Serviecis" />
                                    <button type=''>
                                        <FaSearch className='text-lg' />
                                    </button>
                                </div>
                            </div>
                            
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchScreen 
