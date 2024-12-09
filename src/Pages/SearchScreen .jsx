import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../components/Navebar';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLocationArrow, FaLocationDot, FaServer } from 'react-icons/fa6';
import { FaRegAddressCard, FaSearch, FaStar } from 'react-icons/fa';
import UserSideBar from '../components/UserSideBar';
import axios from 'axios';

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([])
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);

    const fetchData = async () => {
        const API_URL = "https://ees-121-backend.vercel.app/auth/getAllUser";
        try {
            const response = await axios.get(API_URL);
            const data = response.data.user;
            console.log(data);
            setSearchResult(data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // for refrence
    const handleItemClick = (address) => {
        setSearch(address); // Update the search box with the selected value
        setShowList(false); // Hide the list
        let filteritem = [...searchResult];
        if (address) {
            filteritem = filteritem.filter(item => item.address.toLowerCase().includes(address.toLowerCase()));
        }
        if (address) {
            filteritem = filteritem.filter(item => item.address == address);
        }
        setSelectedItem(filteritem)
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setShowList(!!value); 

    };

    const handleItemCaregory = (cat) => {
        console.log(cat);
        
        let filteredCategory = [...selectedItem]
        filteredCategory = filteredCategory.filter((user) =>
            user.businessCategory.some((category) =>
                category == cat)
        )
        console.log(filteredCategory);
        
        setSelectedItem(filteredCategory);
    }
    
    if (selectedItem) {
        console.log(selectedItem);  
    }
    return (
        <>
            <UserSideBar />
            <div className="container mt-24">
                <div className="row">
                    <div className='col-12 col-xl-4 p-3'>
                        {/* Search Box for Address */}
                        <form action=""  >
                            <div className="search-input mb-2 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by address"
                                    value={search}
                                    onChange={handleSearchChange}
                                    onFocus={() => search && setShowList(true)}
                                />
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        {showList && (
                                <div className="col-12 d-flex flex-wrap">
                                    {searchResult
                                        .filter((user) =>
                                            user.address.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((user, i) => (
                                            <div key={i} className="col-12 col-md-6 col-xl-3 p-2 " onClick={() => handleItemClick(user.address)}  style={{ cursor: "pointer", height:"350px" }} >
                                            <div className="card border-0 bg-base-100 shadow-xl"  style={{height:"100%"}}>
                                                <div className='d-flex justify-content-between'>
                                                    <figure className='rounded-md m-3'>
                                                        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                                        </img>
                                                    </figure>
                                                    <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                </div>
                                                <div className='p-3'>
                                                    <h4 className="font-bold">{user.name}</h4>
                                                    <h5 className="font-bold">{user.address}</h5>
                                                    <h6 className="font-bold">{user.businessCategory}</h6>

                                                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                    <div className="rating rating-sm py-4 d-flex align-items-center">
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/> <span className='ps-2'>rating</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-12 flex flex-wrap">
                            {
                                selectedItem ? (
                                    selectedItem.map((user, i) => {
                                        return (
                                            <div key={i} className="col-12 col-md-6 col-xl-3 p-2" onClick={() => handleItemCaregory(user.businessCategory)} style={{ cursor: "pointer" }}>
                                                <div className="card border-0 bg-base-100 shadow-xl" >
                                                    <div className='d-flex justify-content-between'>
                                                        <figure className='rounded-md m-3'>
                                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" >

                                                            </img>
                                                        </figure>
                                                        <span className='bg-white rounded-full m-2 shadow-xl w-[30px] h-[30px] d-flex align-items-center justify-content-center '><HiDotsHorizontal /></span>
                                                    </div>
                                                    <div className='p-3'>
                                                        <h2 className=" font-bold">{user.name}</h2>
                                                        <h5 className=" font-bold">{user.businessCategory}</h5>
                                                        <h6 className=" font-bold">{user.address}</h6>

                                                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum.</p>
                                                        <div className="rating rating-sm py-4 d-flex align-items-center">
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/>
                                                        <FaStar className='text-warning'/> <span className='ps-2'>rating</span>
                                                    </div>

                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                ) : (
                                    <h4>No item Found</h4>
                                )
                            }
                       

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SearchScreen 
