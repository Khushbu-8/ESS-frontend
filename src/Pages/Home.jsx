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
  const [BannerImage,setBannerImage] = useState([])
  const token = JSON.parse(localStorage.getItem('token'))
  const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
 
    console.log(BannerImage,"bannerImg");
    
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
// const chunkArray = (array, chunkSize) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//       result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// };
function processCategoriesAndBanners(categories, BannerImage , categoryGroupSize = 10, bannerGroupSize = 9) {
  const groupedResult = []; // Array of grouped categories and banners
  let i = 0; // Pointer for categories
  let j = 0; // Pointer for banners

  while (i < categories.length || j < BannerImage.length) {
      const group = {
          categories: categories.slice(i, i + categoryGroupSize),
          BannerImage: BannerImage.slice(j, j + bannerGroupSize),
      };

      groupedResult.push(group);

      i += categoryGroupSize;
      j += bannerGroupSize;
  }

  return groupedResult;
}
useEffect(() => {
  fetchCategories();
}, []);

// Split the categories into groups of 10
// const groupedCategories = chunkArray(categories, 10);
const groupedCategoriesAndBanners = processCategoriesAndBanners(categories, BannerImage, 10, 9);

console.log(groupedCategoriesAndBanners,"groups");



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
        <CardSlider BannerImage ={BannerImage} setBannerImage = {setBannerImage}/>
        {/* <div className=''>
            {groupedCategories.map((group, index) => (
              <React.Fragment key={index}>
                     <ServieceCategories categories={group} /> 
                    <Benner /> 
                </React.Fragment> 
            ))}
        </div> */}
        <div className=''>
            {groupedCategoriesAndBanners.map((group, index) => (
                <React.Fragment key={index}>
                    {/* Render Categories */}
                    {/* <CardSlider BannerImage={group.BannerImage} setBannerImage = {setBannerImage} /> */}
                    <ServieceCategories categories={group.categories} />
                   <Benner/>
                </React.Fragment>
            ))}
        </div>
      </div>
     
     


    </>


  )
}

export default Home