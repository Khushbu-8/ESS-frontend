import React, { useEffect, useState } from 'react'
import UserSideBar from './UserSideBar'
import Card from '../Pages/Card'
import ServieceCategories from './ServieceCategories'
import CardSlider from './CardSlider'
import Benner from './Benner'
import AdminNavbar from '../admincomponents/AdminNavbar'

const Home = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const[auth,setAuth] = useState(false);

  useEffect(()=>{
    if(token){
        setAuth(true)
        }else{
            setAuth(false)
            }


},[token])

  return (
    <>

      <AdminNavbar />  
      <UserSideBar/>
      {
        auth ? <Card /> : <></>
      }
      
      {/* <Card />  */}
      
      
    
     <CardSlider/>
      <ServieceCategories/>
      <Benner/>
      <ServieceCategories/>
      
      

    </>


  )
}

export default Home