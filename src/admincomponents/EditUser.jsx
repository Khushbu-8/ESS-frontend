import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from '../Pages/Sidebar';
const backend_API = import.meta.env.BACKEND_API;
import { categories } from '../ServiceCategory'
// const backend_API = "https://ees-121-backend.vercel.app"


const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const [businessCategory, setBusinessCategory] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigete = useNavigate()
  // let categories = [
  //   "A.C. SERVICE",
  //   "ADVOCATE",
  //   "ALUMINIUM WORKER",
  //   "AUTO RICKSHAW",
  //   "AUTO MOBILE & SALES",
  //   "BABY SITTING",
  //   "BAGGI (HORSE CART)",
  //   "BANK SERVICE",
  //   "BANQUET HALL",
  //   "BATTERY SERVICE",
  //   "BEAUTY PARLOUR",
  //   "BIKE SERVICE",
  //   "BROKER",
  //   "BUSINESS CONSULTANT",
  //   "BICYCLE",
  //   "CAFE",
  //   "CAR DECORATOR",
  //   "CAR SERVICE",
  //   "CAR WASHING",
  //   "CAR WIRING",
  //   "CARE TAKER",
  //   "CARPENTER",
  //   "CATERING",
  //   "CCTV.CAMERA",
  //   "CHAIR REPAIRING",
  //   "CHARTERED ACCOUNTAT",
  //   "CHILDREN WEAR",
  //   "CLASSES",
  //   "COMPUTER CLASSES",
  //   "COMPUTER HARDWARE",
  //   "COMPUTER SOFTWARE",
  //   "COSMETIC STORE",
  //   "COURIER SERVICE",
  //   "DAIRY PRODUCT",
  //   "DANCE CLASSES",
  //   "DESIGNER / EDITOR",
  //   "DHOLI",
  //   "DIAMOND BUSINESS",
  //   "DIGITAL MARKETING",
  //   "DJ SOUND",
  //   "DOCTOR",
  //   "E - COMMERCE",
  //   "EDUCATION",
  //   "ELECTRICIAN",
  //   "ELECTRONIC PRODUCT",
  //   "EMPLOYEE",
  //   "ENGINEER",
  //   "EVENT MANAGEMENT",
  //   "WELDING",
  //   "FARMER",
  //   "FASHION DESIGNER",
  //   "FAST FOOD",
  //   "FINANCIAL",
  //   "FLEX BOARD HOARDING",
  //   "FLOWER DECORATION",
  //   "FREELANCER",
  //   "FURNITURE",
  //   "GAS CHULA SERVICE",
  //   "GENERATOR SERVICE",
  //   "GEYSER SERVICE",
  //   "GLASS WORK",
  //   "GOVT. PUBLIC SERVICE",
  //   "GOVT. EMERGENCY SERVICE",
  //   "GRUH UDHYOG",
  //   "GYM",
  //   "HEALTH CARE",
  //   "HOME CLEANING",
  //   "HOSPITAL",
  //   "HOUSE WIFE",
  //   "IMITATION JEWELLERY",
  //   "INDUSTRIAL INSTRUMENT",
  //   "INSURANCE",
  //   "INTERIOR DESIGNER",
  //   "INTERNET DEPARTMENT",
  //   "INVERTER SERVICE",
  //   "JOB PLACEMENT",
  //   "JUICE CENTER",
  //   "LABOUR",
  //   "LAUNDRY",
  //   "LIFT SERVICE",
  //   "LIGHTING",
  //   "MAID",
  //   "MANDAP SERVICE",
  //   "MANUFACTURING",
  //   "MARKETING",
  //   "MARRIAGE BUREAU",
  //   "MEDICAL STORE",
  //   "MEHNDI ARTIST",
  //   "MEN'S WEAR",
  //   "MOBILE & ACCESSORIES",
  //   "MOTOR SERVICE",
  //   "MOVERS & PACKER",
  //   "NURSERY",
  //   "ORCHESTRA",
  //   "OTHER",
  //   "OVEN SERVICE",
  //   "PAINTER",
  //   "PANDIT",
  //   "PASSPORT AGENT",
  //   "PEST CONTROL",
  //   "PETCARE SERVICE",
  //   "PHOTOGRAPHY",
  //   "PHYSIOTHERAPIST",
  //   "PLUMBER",
  //   "PRINTING PRESS",
  //   "R.O. SERVICE",
  //   "REAL - ESTATE",
  //   "REFRESHMENT",
  //   "RESTAURANTS",
  //   "RETIRED",
  //   "RIDES",
  //   "RTO AGENT",
  //   "REFRIGERATOR SERVICE",
  //   "SCRAP ( BHANGAR )",
  //   "SECURITY SERVICE",
  //   "SHOEMAKER ( MOCHI )",
  //   "SHOP",
  //   "SHUTTER REPAIR",
  //   "SOCIAL WORKER",
  //   "SOFA CLEANING",
  //   "SOLAR PANEL",
  //   "SOUND SYSTEM REPAIRING",
  //   "SPOKEN ENGLISH CLASSES",
  //   "SPORTS",
  //   "STATIONERY",
  //   "STOCK MARKET",
  //   "STUDENT",
  //   "STUDY CLASSES",
  //   "SALON",
  //   "TAXI",
  //   "TEA CENTER",
  //   "TELECOM DEPARTMENT",
  //   "TEXTILE",
  //   "TIFFIN SERVICE",
  //   "TOUR & TRAVELERS",
  //   "TAILOR",
  //   "TOWING",
  //   "TRADERS",
  //   "TRANSPORT",
  //   "TRAVEL AGENT",
  //   "TUITION CLASS",
  //   "T.V. SERVICE",
  //   "TWO WHEELERS WIRING",
  //   "TYRE PUNCTURE FIXING",
  //   "VEGETABLES & FRUITS",
  //   "VETER INARY DOCTOR",
  //   "VISA CONSULTANCY & GUIDANCE",
  //   "WASHING MACHINE SERVICE",
  //   "WATER SUPPLIER",
  //   "WEALTH MANAGEMENT",
  //   "WOMEN WEAR",
  //   "XEROX",
  //   "YOGA CLASSES"
  // ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category) => {
    setBusinessCategory(category); // Set selected category
    setIsDropdownOpen(false); // Close dropdown
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(location?.state?.adress, "Edit Id");
    const newadd = {
      city
    }

    try {
      const response = await axios.put(`${backend_API}/auth/UpdateUser`, {
        id: location?.state?._id,
        name: name,
        email: email,
        phone: phone,
        address: newadd,
        businessCategory: businessCategory,
        businessName: businessName,
        businessAddress: businessAddress
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // For cookies/session authentication if required
      });

      console.log(response.data, "Data Edit");

      // console.log(data);
      if (response.status === 200) {
        navigete('/admin')

      }
      // console.log(data);

    } catch (error) {
      console.log(error);
      return false;
    }

  };
  useEffect(() => {
    setName(location?.state?.name)
    setEmail(location?.state?.email)
    setPhone(location?.state?.phone)
    setAddress(location?.state?.address)
    setBusinessCategory(location?.state?.businessCategory || []),
      setBusinessName(location?.state?.businessName),
      setBusinessAddress(location?.state?.businessAddress)
  }, [location?.state])

  return (
    <>
      <AdminNavbar />


      <div className="bg-gray-200 pt-15 flex items-center mt-24 justify-center ">
        <div className="w-[600px] bg-white  rounded-lg overflow-hidden shadow-md mt-5 mx-2">

          <div className="py-3 px-6 grid grid-cols-1 gap-6">
            <div className="flex flex-col items-center">

              <h3 className="text-3xl font-semibold text-red-500 pt-3">Edit User</h3>
            </div>
            <form onSubmit={handleSubmit} method='post' className="space-y-4  dark:text-white">
              <div>
                <input type="text" name="" id="" />
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">contact</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="w-full mt-10">
                <label className="block text-sm font-medium">
                  Select Business Categories:
                </label>
                <div className="mt-3 w-full">
                  {/* Display Selected Category */}
                  <div
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    onClick={toggleDropdown}
                  >
                    {businessCategory.length > 0 ? (

                      <span className="inline-block  text-black py-1  ">
                        {businessCategory}
                      </span>


                    ) : (
                      <span className="  py-1">Select a category</span>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="z-10 border border-gray-300 bg-white w-full mt-2 rounded-md  max-h-40 overflow-y-auto">
                      {categories.map((category, i) => (
                        <li
                          key={i}
                          className={`cursor-pointer px-4 py-2 hover:bg-green-200 ${businessCategory === category.name ? "bg-green-200" : ""
                            }`}
                          onClick={() => selectCategory(category.name)}
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Business Address</label>
                <input
                  type="text"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font -bold py-2 rounded-md hover:bg-red-600"
              >
                Edit User
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="relative">
      {/* Profile Photo Button */}


    </>
  );
};

export default EditUser;