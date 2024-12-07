import React, { useState } from 'react'
import UserSideBar from '../components/UserSideBar'
import SearchScreen from './SearchScreen '
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchResult from '../components/SearchResult'

const Services = () => {
  const [allServices, setAllServices] = useState([])
  const [filterResult,setFilterResult] = useState([])
  

  return (
    <div>
      <div>
   <AdminNavbar/>
   <UserSideBar/>
  
      
     <div className='mt-24'>
    <div className='py-3'>
    <SearchScreen allServices={allServices} setAllServices ={setAllServices} setFilterResult = {setFilterResult}/>
    </div>
     <SearchResult allServices={allServices} setAllServices ={setAllServices} filterResult={filterResult}/>
     </div>
      </div>

    </div>
  )
}

export default Services
