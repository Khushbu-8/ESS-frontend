import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import SearchScreen from '../Pages/SearchScreen ';
import { categories } from '../ServiceCategory';

const  ServieceCategories = () => {
    const [sevices, setServices] = useState();
    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const hendleSubmit = (e) => {
        e.preventDefault();

        navigate(`/serviceDetail`, { state: search })
    
       
    }
      
    const handleFilter = (val) => {
        let filter = categories.slice(0, 10); // Ensure only the first 10 categories are used
        if (val === "all") {
            setFilterRecord(filter);
        } else {
            filter = filter.filter(item => item.name === val);
            setFilterRecord(filter);
        }
        navigate("/serviceDetail");
    };
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
                                 categories.slice(0, 10).map((item, i) => {
                                    return (
                                        <div key={++i} className="col" style={{cursor: "pointer"}} onClick={() => navigate(`/editprofile`, { state: item })}>
                                        <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                            <figure className='w-full m-0 p-2 '>
                                                <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                                </img>
                                            </figure>
                                            <h6 className='text-md'>{item.name}</h6 >
                                        </div>
        
        
                                    </div>
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServieceCategories