import React from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import EditUser from '../admincomponents/EditUser'
import AllUsers from './AllUsers'
import Card from './Card'
import UserSideBar from '../components/UserSideBar'

const Admin = () => {
  return (
  <>
 <div className=''>
 <AdminNavbar/>
 <UserSideBar/>
 <AllUsers/>
 <Routes>
 <Route path="/admin/editUser" element={<EditUser />} />
 <Route path="/admin/card" element={<Card />} />
 

 </Routes>
 </div>
  </>
  )
}

export default Admin
