import axios from 'axios';
import React, { useState } from 'react'
import logo from "../../public/ees-logo.png"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const backend_API = import.meta.env.VITE_API_URL || import.meta.env.BACKEND_API;


const RegisterNextPage = () => {
  const [businessCategory, setBusinessCategory] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const isAuthenticated = localStorage.getItem("token");
  const navigete = useNavigate();
  const location = useLocation();
  const previousData = location.state || {};
  if (isAuthenticated) {
    // Redirect to a protected page if already logged in
    return <Navigate to="/" />;
  }
  let categories = [
    "A.C. SERVICE",
    "ADVOCATE",
    "ALUMINIUM WORKER",
    "AUTO RICKSHAW",
    "AUTO MOBILE & SALES",
    "BABY SITTING",
    "BAGGI (HORSE CART)",
    "BANK SERVICE",
    "BANQUET HALL",
    "BATTERY SERVICE",
    "BEAUTY PARLOUR",
    "BIKE SERVICE",
    "BROKER",
    "BUSINESS CONSULTANT",
    "BICYCLE",
    "CAFE",
    "CAR DECORATOR",
    "CAR SERVICE",
    "CAR WASHING",
    "CAR WIRING",
    "CARE TAKER",
    "CARPENTER",
    "CATERING",
    "CCTV.CAMERA",
    "CHAIR REPAIRING",
    "CHARTERED ACCOUNTAT",
    "CHILDREN WEAR",
    "CLASSES",
    "COMPUTER CLASSES",
    "COMPUTER HARDWARE",
    "COMPUTER SOFTWARE",
    "COSMETIC STORE",
    "COURIER SERVICE",
    "DAIRY PRODUCT",
    "DANCE CLASSES",
    "DESIGNER / EDITOR",
    "DHOLI",
    "DIAMOND BUSINESS",
    "DIGITAL MARKETING",
    "DJ SOUND",
    "DOCTOR",
    "E - COMMERCE",
    "EDUCATION",
    "ELECTRICIAN",
    "ELECTRONIC PRODUCT",
    "EMPLOYEE",
    "ENGINEER",
    "EVENT MANAGEMENT",
    "WELDING",
    "FARMER",
    "FASHION DESIGNER",
    "FAST FOOD",
    "FINANCIAL",
    "FLEX BOARD HOARDING",
    "FLOWER DECORATION",
    "FREELANCER",
    "FURNITURE",
    "GAS CHULA SERVICE",
    "GENERATOR SERVICE",
    "GEYSER SERVICE",
    "GLASS WORK",
    "GOVT. PUBLIC SERVICE",
    "GOVT. EMERGENCY SERVICE",
    "GRUH UDHYOG",
    "GYM",
    "HEALTH CARE",
    "HOME CLEANING",
    "HOSPITAL",
    "HOUSE WIFE",
    "IMITATION JEWELLERY",
    "INDUSTRIAL INSTRUMENT",
    "INSURANCE",
    "INTERIOR DESIGNER",
    "INTERNET DEPARTMENT",
    "INVERTER SERVICE",
    "JOB PLACEMENT",
    "JUICE CENTER",
    "LABOUR",
    "LAUNDRY",
    "LIFT SERVICE",
    "LIGHTING",
    "MAID",
    "MANDAP SERVICE",
    "MANUFACTURING",
    "MARKETING",
    "MARRIAGE BUREAU",
    "MEDICAL STORE",
    "MEHNDI ARTIST",
    "MEN'S WEAR",
    "MOBILE & ACCESSORIES",
    "MOTOR SERVICE",
    "MOVERS & PACKER",
    "NURSERY",
    "ORCHESTRA",
    "OTHER",
    "OVEN SERVICE",
    "PAINTER",
    "PANDIT",
    "PASSPORT AGENT",
    "PEST CONTROL",
    "PETCARE SERVICE",
    "PHOTOGRAPHY",
    "PHYSIOTHERAPIST",
    "PLUMBER",
    "PRINTING PRESS",
    "R.O. SERVICE",
    "REAL - ESTATE",
    "REFRESHMENT",
    "RESTAURANTS",
    "RETIRED",
    "RIDES",
    "RTO AGENT",
    "REFRIGERATOR SERVICE",
    "SCRAP ( BHANGAR )",
    "SECURITY SERVICE",
    "SHOEMAKER ( MOCHI )",
    "SHOP",
    "SHUTTER REPAIR",
    "SOCIAL WORKER",
    "SOFA CLEANING",
    "SOLAR PANEL",
    "SOUND SYSTEM REPAIRING",
    "SPOKEN ENGLISH CLASSES",
    "SPORTS",
    "STATIONERY",
    "STOCK MARKET",
    "STUDENT",
    "STUDY CLASSES",
    "SALON",
    "TAXI",
    "TEA CENTER",
    "TELECOM DEPARTMENT",
    "TEXTILE",
    "TIFFIN SERVICE",
    "TOUR & TRAVELERS",
    "TAILOR",
    "TOWING",
    "TRADERS",
    "TRANSPORT",
    "TRAVEL AGENT",
    "TUITION CLASS",
    "T.V. SERVICE",
    "TWO WHEELERS WIRING",
    "TYRE PUNCTURE FIXING",
    "VEGETABLES & FRUITS",
    "VETER INARY DOCTOR",
    "VISA CONSULTANCY & GUIDANCE",
    "WASHING MACHINE SERVICE",
    "WATER SUPPLIER",
    "WEALTH MANAGEMENT",
    "WOMEN WEAR",
    "XEROX",
    "YOGA CLASSES"
  ]
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category) => {
    setBusinessCategory(category); // Set selected category
    setIsDropdownOpen(false); // Close dropdown
  };
  // const notify = () => toast("Registration Successful");
  const handleSubmits = async (e) => {
    setLoading(true)
    e.preventDefault();
    const fullData = {
      ...previousData,
      businessName: businessName, businessCategory: businessCategory, businessAddress: businessAddress
    };

    console.log(fullData);
    try {
      const response = await axios.post(`${backend_API}/auth/registerUserweb`, fullData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.data;
      console.log(data);
      if (response.status === 200) {
        localStorage.setItem("Users", JSON.stringify(data.user))
        // localStorage.setItem("Users",token)
        navigete('/login');
        console.log('Register successful!');
      } else {
        // Handle error responses
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
      }
    } catch (error) {
      console.log(error);
      return false;
    }


  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" bg-gray-100 text-gray-900 flex justify-center">
            <div className=" sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
              <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
                <div className="flex flex-col items-center">
                  <div className="w-full flex-1 mt-8">
                    <div className="flex flex-col items-center">
                      <div className='mb-12'>
                        <img src={logo} width={100} />
                      </div>
                      <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-2 rounded-full">
                          <svg className="w-4" viewBox="0 0 533.5 544.3">
                            <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                            <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                            <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                            <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                          </svg>
                        </div>
                        <span className="ml-4">
                          Sign In with Google
                        </span>
                      </button>
                    </div>
                    <div className="my-3 border-b text-center">
                      <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">

                      </div>
                    </div>
                    <form action="" onSubmit={handleSubmits}>
                      <div className="mx-auto max-w-xs">
                        <input
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3" type="text" placeholder="Bussiness Name" />

                        <div className="mt-3">
                          {/* Display Selected Category */}
                          <div
                            className="border border-2 rounded-md p-2  bg-gray-100 focus:bg-white cursor-pointer"
                            onClick={toggleDropdown}
                          >
                            {businessCategory ? (
                              <span className="inline-block px-3 py-1 ">
                                {businessCategory}
                              </span>
                            ) : (
                              <span className="text-gray-400">Select a category</span>
                            )}
                          </div>

                          {/* Dropdown Menu */}
                          {isDropdownOpen && (
                            <ul className="z-10 border border-gray-300 bg-white w-full mt-2 rounded-md  max-h-40 overflow-y-auto">
                              {categories.map((category, i) => (
                                <li
                                  key={i}
                                  className={`cursor-pointer px-4 py-2 hover:bg-green-200 ${businessCategory === category ? "bg-green-200" : ""
                                    }`}
                                  onClick={() => selectCategory(category)}
                                >
                                  {category}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <input
                          value={businessAddress}
                          onChange={(e) => setBusinessAddress(e.target.value)}
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3" type="text" placeholder="Bussiness Address" />
                        <button type='submit' className="mt-3 tracking-wide font-semibold bg-green-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                          <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy={7} r={4} />
                            <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <span className="ml-4">
                            Sign Up
                          </span>
                        </button>
                        <p className="mt-4 text-sm text-center text-gray-600">
                          Allready have an account? <Link to={'/login'} className="text-success text-bold hover:underline">login </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" >
                  <img src="https://readymadeui.com/signin-image.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterNextPage