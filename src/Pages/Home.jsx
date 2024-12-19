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

      <div className='mt-24'>
        {
          auth ? <Card /> : <></>
        }


        {/* <Card />   */}
        <CardSlider />
        <div className=''>
            {groupedCategories.map((group, index) => (
              <React.Fragment key={index}>
                     <ServieceCategories categories={group} /> 
                    <Benner /> 
                </React.Fragment> 
            ))}
        </div>
     
      </div>
     
     


    </>


  )
}

export default Home