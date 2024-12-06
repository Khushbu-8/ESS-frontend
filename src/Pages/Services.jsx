import React from 'react'
import UserSideBar from '../components/UserSideBar'
import Navebar from '../components/Navebar'
import SearchScreen from './SearchScreen '
import ServieceCategories from '../components/ServieceCategories'
import AdminNavbar from '../admincomponents/AdminNavbar'

const Services = () => {
  return (
    <div>
      <div>
   <AdminNavbar/>
   <UserSideBar/>
      {/* <SearchScreen/> */}
     <div className='mt-24'>
     <ServieceCategories/>
     </div>
      </div>

    </div>
  )
}

export default Services
