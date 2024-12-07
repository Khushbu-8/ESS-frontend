import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../components/Navebar';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLocationArrow, FaLocationDot, FaServer, FaStar } from 'react-icons/fa6';
import { FaRegAddressCard, FaSearch } from 'react-icons/fa';
import UserSideBar from '../components/UserSideBar';
import axios from 'axios';
import AdminNavbar from '../admincomponents/AdminNavbar';

const SearchScreen = () => {


    const [serchResult, setSearchResult] = useState([])

    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
   
  
    const fetchData = async () => {
         const backend_API = "https://ees-121-backend.vercel.app"
        try {
            const response = await axios.get(`${backend_API}/auth/getAllUser`, {
                headers: {
                    'Content-Type': 'application/json',

                },

            });
            const data = await response.data.user;
            setSearchResult(data)
            console.log(data, "AllUser get");
            //   if (response.status === 200) {

            //     console.log("All User Successful...");
            //   }
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    useEffect(() => {
        fetchData();
    }, [])



    const hendleChange = (value) => {
        if(!value){
            setFilterRecord(filterrecord)
        }
        setSearch(value)
    }

    useEffect(() => {
        let filetrcat = [...serchResult]
        if (search) {
            // filetr = filetr.filter((item) => item.address.toLowerCase().includes(search.toLowerCase()))
            filetrcat = filetrcat.filter((item) => 
                search && 
             // Ensure the item has a valid `id`
                (
                    item.address.toLowerCase().includes(search.toLowerCase()) ||
                    // item.businessAddress.toLowerCase().includes(search.toLowerCase()) ||
                    item.businessCategory.some((category) => 
                        category.toLowerCase().includes(search.toLowerCase())
                      )
                )
              );
         }
         if(search){
            filetrcat = filetrcat.filter(item => item.address == search)
         }

        setFilterRecord(filetrcat)
    }, [search])

    const hendleSubmit = (e) => {
        e.preventDefault();
        const query = {search }
        console.log(query, "search");
        // fetchData(query);
        hendleChange(search)
// setSearch("")

    }




    return (
        <>
        <AdminNavbar/>
            <UserSideBar />
            <div className="container mt-24">
                <div className="row">
                    <div className='col-12 p-3'>
                        <form action="" onSubmit={hendleSubmit} className='d-flex flex-wrap'>
                           
                            <div className="col-12 col-md-6 col-lg-3 p-2">

                                <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                    <input
                                        type="text"
                                        onChange={(e) => hendleChange(e.target.value)} value={search}
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

            <section>
                <div className="container">
                    <div className="row">
                        {
                            filterrecord > 0 ? <h2 className='px-4'>All services</h2> : <h2 className='px-4'>No services</h2>
                        }
                        <div className="col-12 flex flex-wrap">
                            {filterrecord.length > 0 ? (
                                filterrecord.map((cat, i) => {
                                    return (
                                        <div className="col-xl-3 p-2" >
                                            <div className="card border-0 bg-base-100 shadow-xl" style={{height :"400px" , overflow : "auto"}}>
                                                <div className='d-flex justify-content-between'>
                                                    <figure className='rounded-md m-3'>
                                                        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                                        </img>
                                                    </figure>
                                                    <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                </div>
                                                <div className='p-3'>
                                                    <h5 className=" font-bold">{cat.name}</h5>
                                                    <h6 className=" font-bold">{cat.businessCategory}</h6>
                                                    <p className=" text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                    <div className="rating rating-sm py-4 d-flex align-items-center">
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/> <span className='ps-2'>rating</span>
                                                    </div> 

                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <Link to={'/serviceDetail'} className='p-2 bg-orange text-white'>View Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h5>
                                    No records found. Please select a category or search.
                                </h5>
                            )}


                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SearchScreen 
