import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const backend_API = import.meta.env.VITE_API_URL;

const SearchBox = () => {
    const [search, setSearch] = useState('')
    const [showList, setShowList] = useState(false);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    // const handleSearchChange = (e) => {
    //     const value = e.target.value;
    //     setSearch(value);
    //     setShowList(!!value);
    // };
    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${backend_API}/category/getAllCategory`);
            const data = response.data.category
            console.log(data, "category");
            setCategories(data);

        }
        catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        navigate(`serviceDetail`, { state: search })

    }
    useEffect(() => {
        fetchCategory()
    }, []);

    return (
        <>

            <div className=' '>
                {/* Search Box for Category */}
                <form action="" onSubmit={hendleSubmit} >
                    <div className="search-input border rounded-1 ps-3 pe-2  d-flex align-items-center">
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            // onFocus={() => search || setShowList(true)}
                            className="grow outline-none  bg-base-100 py-2 " placeholder="Search service" />
                        <button type='submit' className='p-1 rounded-1 btn-sm text-white bg-orange'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5  opacity-100">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>

                    </div>

                </form>

            </div>
            {/* <div className=''>
               
        {showList && (
                        <ul className="">
                            {categories.filter((user) =>
                                    user.categoryName.toLowerCase().includes(search.toLowerCase())
                                    // user.businessCategory.some((category) =>
                                    //   category.toLowerCase().includes(search.toLowerCase())
                                    // )
                                )
                                .map((user, i) => (
                                    <li
                                    key={i}
                                    className="py-2  border-bottom border-gray-200 hover:bg-gray-100 cursor-pointer
                                    ">
                                        <a
                                        className="text-sm text-gray-700 hover:text-gray-900"
                                        >
                                            {user.categoryName}
                                        </a>
                                    </li>
                                  
                                ))}
                        </ul>
                    )}

        </div> */}

        </>
    )
}

export default SearchBox