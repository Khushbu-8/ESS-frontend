import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../components/Navebar';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLocationArrow, FaLocationDot, FaServer } from 'react-icons/fa6';
import { FaRegAddressCard, FaSearch, FaStar } from 'react-icons/fa';
import UserSideBar from '../components/UserSideBar';
import {categories} from '../ServiceCategory'
import axios from 'axios';
import ServiceDetail from './ServiceDetail';

const SearchScreen = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const[auth,setAuth] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([])
    const [showList, setShowList] = useState(true);
    const [showListt, setShowListt] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState("");

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

const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowList(!!value);
};

const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
    setShowListt(!!value);
};

const handleItemClick = (cat) => {
    setSearch(cat); // Update the search box with the selected value
    setShowList(false); // Hide the list
    let filtercat = [...searchResult]
    if(cat){
        filtercat = filtercat.filter((user) =>
        user.businessCategory.some((category) =>
            category == cat)
        )
    }
    setSelectedItem(filtercat); // Set the selected item
    // navigate("/serviceDetail")
};

const handleItemClickLocation = (loc) => {
    setCategoryFilter(loc); // Update the search box with the selected value
    setShowListt(false); // Hide the list
    let filtercat = [...selectedItem]
    if(loc){
        filtercat = filtercat.filter((user) => user.address == loc)
    }
    setSelectedItem(filtercat); // Set the selected item
};

useEffect(()=>{
    if(token){
        setAuth(true)
        }else{
            setAuth(false)
            }


},[token])

    if (selectedItem) {
        console.log(selectedItem);  
    }
    return (
        <>
            <UserSideBar />
            <div className="container mt-24">
                <div className="row">
                    <div className='col-12 col-xl-5 p-3'>
                        {/* Search Box for Address */}
                        <form action=""  >
                            <div className="search-input mb-2 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search service"
                                    value={search}
                                    onChange={handleSearchChange}
                                    onFocus={() => search || setShowList(true)}
                                />
                            </div>
                        
                        </form>
                    </div>
                    <div className='col-12 col-xl-3 p-3'>
                        {/* Search Box for Address */}
                        <form action=""  >
                            <div className="search-input mb-2 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search location "
                                    value={categoryFilter}
                                    onChange={handleCategoryChange}
                                    onFocus={() => categoryFilter || setShowListt(true)}
                                />
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    
                        {showList && (
                             <div className="row row-cols-3 row-cols-lg-5 g-lg-3">
                                    {categories
                                        .filter((user) =>
                                            user.name.toLowerCase().includes(search.toLowerCase()) 
                                        // user.businessCategory.some((category) =>
                                        //   category.toLowerCase().includes(search.toLowerCase())
                                        // )
                                        )
                                        .map((user, i) => (
                                            <div key={++i} className="col" style={{cursor: "pointer"}} onClick={() => handleItemClick(user.name)}>
                                        <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                            <figure className='w-full m-0 p-2 '>
                                                <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                                </img>
                                            </figure>
                                            <h6 className='text-md'>{user.name}</h6 >
                                        </div>
        
        
                                    </div>
                                        ))}
                                </div>
                        )}
                        {showListt && (
                                <div className="col-12 d-flex flex-wrap">
                                    {selectedItem
                                        .filter((user) =>
                                            user.address.toLowerCase().includes(categoryFilter.toLowerCase()) 
                                        // user.businessCategory.some((category) =>
                                        //   category.toLowerCase().includes(search.toLowerCase())
                                        // )
                                        )
                                        .map((user, i) => (
                                            <div key={i} className="col-12 col-md-6 col-xl-3 p-2 " onClick={() => handleItemClickLocation(user.address)}  style={{ cursor: "pointer", height:"350px" }} >
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
            </section>
            {/* <ServiceDetail selectedItem ={selectedItem} handleItemCaregory = {handleItemCaregory} /> */}

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
