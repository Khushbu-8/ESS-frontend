import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchScreen = () => {
    const [search,setSearch] = useState("");
    const [allServices,setAllServices] = useState

    const backend_API = "https://ees-121-backend.vercel.app"
  const fetchData = async () => {
    try {
      const response = await axios.get(`${backend_API}/auth/getAllUser`, {
        headers: {
          'Content-Type': 'application/json',

        },

      });
      const data = await response.data;
    //   setAllServices(data.user)
      console.log(data, "AllUser");
    //   if (response.status === 200) {

    //     console.log("All User Successful...");
    //   }
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  useEffect(() => {
    fetchData()
  }, [])
    


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
                                        onChange={(e) => setSearch(e.target.value)} value={search}
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
