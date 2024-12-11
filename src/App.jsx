import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"
import EditProfile from "./components/EditProfile"
import Admin from "./Pages/Admin"
import AllUsers from "./Pages/AllUsers"
import EditUser from "./admincomponents/EditUser"
import SearchScreen from "./Pages/SearchScreen "
import Home from "./components/Home";
import ServiceDetail from "./Pages/ServiceDetail";
import Card from "./Pages/Card";
import Services from "./Pages/Services";
import RegisterNextPage from "./components/RegisterNextPage";

export default function App() {

  return (
    <>
      <div>
      <ToastContainer />
      <Router>
      
        <Routes>
          {/* protected route */}
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/serviceDetail" element={ <ServiceDetail/>} />
            <Route path="/profile" element={<Profile />} />
          {/* </Route> */}
          <Route path="/servises" element={ <Services/>} />
          <Route path="/" element={<Home />} />
          
          <Route path="/register" element={<Registration />} />
          <Route path="/registernext" element={<RegisterNextPage />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/admin/editUser" element={<EditUser />} />
          <Route path="/admin/card" element={<Card />} />


        </Routes>
      </Router>

      </div>
    </>
  )
}