import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchScreen = ({setAllServices , allServices}) => {
    const [search, setSearch] = useState("");
    console.log(search);
    

    const backend_API = "https://ees-121-backend.vercel.app"

    const fetchData = async (value) => {
        try {
            const response = await axios.get(`${backend_API}/auth/getAllUser`, {
                headers: {
                    'Content-Type': 'application/json',

                },

            });
            const data = await response.data.user;
                // data = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            setAllServices(data)
            console.log(data, "AllUser get");
            //   if (response.status === 200) {

            //     console.log("All User Successful...");
            //   }
        } catch (error) {
            console.log(error);
            return false;
        }

    }

   
    const hendelChange = (value) =>{
        setSearch(value);
        fetchData(value)

    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>
            <UserSideBar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-12 p-0'>
                            <form action="" className='d-flex flex-wrap'>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                        <input
                                            type="text"
                                            onChange={(e) => hendelChange(e.target.value)} value={search}
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
            </section>
        </>
    )
}

export default SearchScreen 
