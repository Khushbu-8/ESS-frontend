import React from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import EditUser from '../admincomponents/EditUser'
import AllUsers from './AllUsers'

const Admin = () => {
  return (
  <>
 <AdminNavbar/>
 <Sidebar/>
 <AllUsers/>
 <Routes>
 <Route path="/admin/editUser" element={<EditUser />} />
 </Routes>

  </>
  )
}

export default Admin
