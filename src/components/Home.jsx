import React, { useEffect, useState } from 'react'
import UserSideBar from './UserSideBar'
import Card from '../Pages/Card'
import ServieceCategories from './ServieceCategories'
import CardSlider from './CardSlider'
import Benner from './Benner'
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchScreen from '../Pages/SearchScreen '

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
<section>
  <div className="container">
    <div className="row">
      
     <div>
      <h3 className='ps-2 py-2'>Servises</h3>
     </div>
     <div>
      <SearchScreen/>
     </div>
    </div>
  </div>
</section>
      <ServieceCategories/>
      <Benner/>
     <div className='p-5'>
     <ServieceCategories/>
     </div>
      

    </>


  )
}

export default Home