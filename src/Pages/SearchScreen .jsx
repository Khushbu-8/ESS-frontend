import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../components/Navebar';
import { HiDotsHorizontal } from "react-icons/hi";

const SearchScreen = () => {
    const [sevices, setServices] = useState();
    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    let categories = [
        { id: 1, name: "A.C. SERVICE" },
        { id: 2, name: "ADVOCATE" },
        { id: 3, name: "ALUMINIUM WORKER" },
        { id: 4, name: "AUTO RICKSHAW" },
        { id: 5, name: "AUTO MOBILE & SALES" },
        { id: 6, name: "BABY SITTING" },
        { id: 7, name: "BAGGI (HORSE CART)" },
        { id: 8, name: "BANK SERVICE" },
        { id: 9, name: "BANQUET HALL" },
        { id: 10, name: "BATTERY SERVICE" },
        { id: 11, name: "BEAUTY PARLOUR" },
        { id: 12, name: "BIKE SERVICE" },
        { id: 13, name: "BROKER" },
        { id: 14, name: "BUSINESS CONSULTANT" },
        { id: 15, name: "BICYCLE" },
        { id: 16, name: "CAFE" },
        { id: 17, name: "CAR DECORATOR" },
    ];
    const hendleSubmit = (e) => {
        e.preventDefault();



        navigate(`/serviceDetail`, { state: search })
    }
    useEffect(() => {
        let filter = [...categories];
        if (search) {
            filter = filter.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (sevices) {
            filter = filter.filter(item => item.name === sevices);
        }

        setFilterRecord(filter);
    }, [search, sevices])

    return (
        <>
            <Navebar />

          <div className="container mt-24">
            <div className="row">
            <div className=' p-3'>
                <div className='max-w-sm p-6 bg-white mt-4 rounded-md shadow-xl'>
                    <h1 className='py-3 text-lg'>Serch for Serviesis</h1>
                    <form action="" onSubmit={hendleSubmit} className=''>
                        <label className=" px-3 py-2 border rounded-md flex items-center gap-2 ">
                            <input type="text" placeholder="Search For Sercices" onChange={(e) => setSearch(e.target.value)} value={search} className={`grow outline-none bg-white`} />
                            <button type='submit' className="btn btn-square btn-sm">
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
                            </button>
                        </label>
                    </form>
                </div>
            </div>

            </div>
          </div>




            <div className='flex flex-wrap'>
                {filterrecord.length > 0 ? (
                    filterrecord.map((cat, i) => {
                      
                    })
                ) : (
                    <h1>
                        No records found. Please select a category or search.
                    </h1>
                )}

                
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <h2 className='px-4'>All services</h2>
                        <div className="col-12 flex flex-wrap">
                        {filterrecord.length > 0 ? (
                    filterrecord.map((cat, i) => {
                      return(
                        <div className="col-xl-3 p-2">
                                <div className="card border-0 bg-base-100 shadow-xl">
                                    <div className='d-flex justify-content-between'>
                                        <figure className='rounded-md m-3'>
                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                            </img>
                                        </figure>
                                        <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                    </div>
                                    <div className='p-3'>
                                        <h2 className="text-lg font-bold">{cat.name}</h2>
                                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400  " />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400"  />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                                            <span className='pl-3'>245 rating</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                      )
                    })
                ) : (
                    <h1>
                        No records found. Please select a category or search.
                    </h1>
                )}

                        
                        </div>
                    </div>
                </div>
            </section>

            {/* <ServiceDetail
                filterrecord={filterrecord}
                profile={profile}

            /> */}
        </>
    )
}

export default SearchScreen 
