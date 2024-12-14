import React, { useState } from 'react'
import UserSideBar from '../components/UserSideBar'
import SearchScreen from './SearchScreen '
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchResult from '../components/SearchResult'
import ServiceDetail from './ServiceDetail'

const Services = () => {


  return (
    <div>
      <div>
   <AdminNavbar/>
   <UserSideBar/>
  
      
     <div className='mt-32'>
    
    <SearchScreen/>
    {/* <ServiceDetail/> */}
     </div>
      </div>

    </div>
  )
}

export default Services
