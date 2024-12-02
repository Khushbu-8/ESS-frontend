import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navebar'
import { useNavigate } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

const SearchScreen = () => {
    const[sevices,setServices] = useState();
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

    let profile = [{
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category: "A.C. SERVICE"

    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        address: "456 Elm St, Anytown, USA",
        category: "AUTO RICKSHAW"
    },
    {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category: "BAGGI (HORSE CART)"
    },
    ]

    const FilterServies = (cat) => {
        let filterSevises = [...profile]
        filterSevises = filterSevises.filter(val => val.category === cat)
        setFilterRecord(filterSevises)
        
    }
    useEffect(() => {
        let filter = [...categories];
        if (search.trim()) {
            filter = filter.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        setFilterRecord(filter);
    }, [search])


    useEffect(() => {
        FilterServies();
    }, [])

    return (
        <>
            <Navebar />

            <div className='max-w-sm  mt-20 p-6'>
                <h1 className='py-3'>Serch for Serviesis</h1>

                <div className=''>
                    <label className=" px-3 py-2 border rounded- flex items-center gap-2 ">
                        <input type="text" placeholder="Search For Sercices" onChange={(e) => setSearch(e.target.value)} value={search} className={`grow outline-none dark:bg-slate-900 dark:text-white  bg-base-900`} />
                        <button className="btn btn-square btn-sm">
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
                </div>
            </div>
            <div className='pb-4 pl-5'>
                {filterrecord.length > 0 ?(
                    filterrecord.map((cat, i) => {
                        return (
                            <button onClick={() => FilterServies(cat.name)} className="btn btn-active bg-primary text-white hover:bg-red-700 border-0 rounded-sm m-1">{cat.name}</button>
                        )
                    })
                ) : (
                    <h1>
                    No records found. Please select a category or search.
                </h1>
                )}

                {/* <button className="btn btn-active rounded-sm mx-1">Ac servise</button> */}

            </div>

           <ServiceDetail 
           filterrecord ={filterrecord } 
           profile = {profile}

           />
        </>
    )
}

export default SearchScreen 
