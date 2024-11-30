import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"
import EditProfile from "./components/EditProfile"
import Admin from "./Pages/Admin"
import AllUsers from "./Pages/AllUsers"

export default function App() {

  return (
    <>
      <ToastContainer />
      <Router>
      
        <Routes>
          {/* protected rout */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<AllUsers />} />


        </Routes>
      </Router>

    </>
  )
}