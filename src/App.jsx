import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"
import EditProfile from "./components/EditProfile"
import Admin from "./Pages/Admin"

import EditUser from "./admincomponents/EditUser"
import SearchScreen from "./Pages/SearchScreen "

import ServiceDetail from "./Pages/ServiceDetail";
import Card from "./Pages/Card";
import Services from "./Pages/Services";
import RegisterNextPage from "./components/RegisterNextPage";
import Work from "./Pages/Work";
import Senedrequest from "./components/Senedrequest";
import Home from "./Pages/Home";
import AllUsers from "./adminPages/AllUsers";
import ManageCatagory from "./adminPages/ManageCatagory";
import MangeAdmin from "./components/MangeAdmin";
import Dashboard from "./adminPages/Dashboard";
import GetAdmin from "./components/GetAdmin";

export default function App() {

  return (
    <>
 
      <ToastContainer />
      <Router>
        <Routes>
          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/serviceDetail" element={ <ServiceDetail/>} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/admin" element={<Dashboard />} /> */}
          </Route>
          <Route path="/servises" element={ <Services/>} />

          {/* work  */}
          <Route path="/work" element={ <Work/>} />
          <Route path="/work/sendrequest" element={ <Senedrequest/>} />

          <Route path="/" element={<Home />} />
          
          <Route path="/register" element={<Registration />} />
          <Route path="/registernext" element={<RegisterNextPage />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
         
          {/* <Route element={<GetAdmin/>}> */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/editUser" element={<EditUser />} />
          <Route path="/admin/manageAdmin" element={<MangeAdmin/>} />
          <Route path="/admin/card" element={<Card />} />
          <Route path="/admin/manageCategory" element={<ManageCatagory />} />
          {/* </Route> */}


        </Routes>
      </Router>

  
    </>
  )
}