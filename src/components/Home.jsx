import React from 'react'
import Navebar from './Navebar'
import EditProfile from './EditProfile'
import UserSideBar from './UserSideBar'
import Card from '../Pages/Card'
import ServieceCategories from './ServieceCategories'
import CardSlider from './CardSlider'
import Benner from './Benner'
import AdminNavbar from '../admincomponents/AdminNavbar'

const Home = () => {
  return (
    <>

      <AdminNavbar />
      <UserSideBar/>
     
      <Card />
      <CardSlider/>
      <ServieceCategories/>
      <Benner/>
      
      

    </>


  )
}

export default Home