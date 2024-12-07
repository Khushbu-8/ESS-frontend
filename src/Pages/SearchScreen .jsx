import React, { useEffect, useState } from 'react'
import UserSideBar from '../components/UserSideBar';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchScreen = ({setAllServices , allServices ,setFilterResult}) => {
    const [search, setSearch] = useState("");
    console.log(search);
    

    const backend_API = "https://ees-121-backend.vercel.app"


    const fetchData = async () => {
        try {
            const response = await axios.get(`${backend_API}/auth/getAllUser`, {
                headers: {
                    'Content-Type': 'application/json',

                },

            });
            const data = await response.data.user;
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

   useEffect(()=>{
    fetchData();
   },[])

   const hendleChange = (value) =>{
    setSearch(value)
   }
    useEffect(() => {
      let filterData = [...allServices]
      if(search) {
        // filterData = filterData.filter(item => search && item.name.toLowerCase().includes(search.toLowerCase()))
        filterData = filterData.filter((item) => 
            search && 
            item.businessCategory.some((category) =>  category.toLowerCase().includes(search.toLowerCase())
            )
          );
        }
        setFilterResult(filterData)

    }, [search])
  
    const hendleSubmit = (e) => {
        e.preventDefault();
        const  query = {search}
    console.log(query, "search");
    fetchData(query);
    }
    
  
    return (
        <>
            <UserSideBar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-12 p-0'>
                            <form action="" className='d-flex flex-wrap'>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div htmlFor="" onSubmit={hendleSubmit} className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                        <input
                                            type="text"
                                            onChange={(e) =>  hendleChange(e.target.value)} value={search}
                                            className=' w-100 outline-0 bg-transparent ' placeholder="Search For Serviecis" />
                                        <button type='submit'>
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
