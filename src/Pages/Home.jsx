import React, { useEffect, useState } from 'react'
import Card from './Card'
import ServieceCategories from '../components/ServieceCategories'
import CardSlider from '../components/CardSlider'
import Benner from '../components/Benner'
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchScreen from './SearchScreen '
import UserSideBar from '../components/UserSideBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const backend_API = import.meta.env.VITE_API_URL;
const Home = () => {
  const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
 // Function to fetch categories from the backend API
 const fetchCategories = async () => {
  try {
      const response = await axios.get(`${backend_API}/category/getAllCategory`);
      const sortedCategories = response.data.category.sort((a, b) =>
          a.categoryName.localeCompare(b.categoryName)
      );
      setCategories(sortedCategories);
  } catch (error) {
      console.error("Error fetching categories:", error);
  }
};

// Function to chunk the array into groups of 10
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

useEffect(() => {
  fetchCategories();
}, []);

// Split the categories into groups of 10
const groupedCategories = chunkArray(categories, 10);



  const token = JSON.parse(localStorage.getItem('token'))
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }


  }, [token])

  return (
    <>

      <AdminNavbar />
      <UserSideBar />

      <div className='mt-32'>
        {
          auth ? <Card /> : <></>
        }


        {/* <Card />  */}
        <CardSlider />
      </div>
      <section>
        <div className="container">
          <div className="row">

            <div>
              <h3 className='ps-2 py-2'>Servises</h3>
            </div>
            <div>
              {/* <SearchScreen/> */}
            </div>
          </div>
        </div>
      </section>
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
      <div className='mt-4'>
            {groupedCategories.map((group, index) => (
                <React.Fragment key={index}>
                    <ServieceCategories categories={group} /> {/* Render the group of categories */}
                    <Benner /> {/* Render the banner after each group */}
                </React.Fragment>
            ))}
        </div>
     


    </>


  )
}

export default Home