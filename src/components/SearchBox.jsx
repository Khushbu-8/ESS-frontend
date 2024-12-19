import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const backend_API = import.meta.env.VITE_API_URL;

const SearchBox = () => {
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
  
    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${backend_API}/category/getAllCategory`);
            const data = response.data.category
            // console.log(data, "category");
            setCategories(data);

        }
        catch (error) {
            console.error("Error fetching categories:", error);
        }
    }
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        // Filter suggestions
        if (value.trim()) {
            const filteredSuggestions = categories.filter((item) => item.categoryName.toLowerCase().includes(value.toLowerCase())).slice(0, 10); // Show only top 10 suggestions
          setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
          navigate(`/serviceDetail`,{state : search});
        }
      };
      const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion);
        navigate(`/serviceDetail`,{state : suggestion});
      };
    useEffect(() => {
        fetchCategory()
    }, []);

    return (
        <>

            <div className='w-full '>
                {/* Search Box for Category */}
                <form action="" onSubmit={handleSubmit} style={{position: 'relative'}} >
                    <div className="search-input border rounded-1 ps-3 pe-2  d-flex align-items-center">
                        <input type="text"
                            value={search}
                            onChange={handleInputChange}
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
                    {suggestions.length > 0 && (
                        <ul className='rounded-2' style={{
                                position: 'absolute',
                                top: '50px',
                                // left: 0,
                                width: '100%',
                                background: '#fff',
                                border: '1px solid #ccc',
                                // zIndex: 10,
                            }}
                        >
                            {suggestions.map((suggestion, index) => (
                                <li className='hover:bg-red-200'
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion.categoryName)}
                                    style={{
                                        padding: '8px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {suggestion.categoryName}
                                </li>
                            ))}
                        </ul>
                    )}

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