import React from 'react'
import UserSideBar from '../components/UserSideBar'
import SearchScreen from './SearchScreen '
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchResult from '../components/SearchResult'

const Services = () => {
  return (
    <div>
      <div>
   <AdminNavbar/>
   <UserSideBar/>
  
      
     <div className='mt-24'>
    <div className='py-3'>
    <SearchScreen/>
    </div>
     <SearchResult/>
     </div>
      </div>

    </div>
  )
}

export default Services
