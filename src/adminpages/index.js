import Dashboard from "./dashboard/Dashboard";
import Layout from "../admincomponents/Layout";
import NftMarketplace from "./nft-marketplace/NftMarketplace";
import Users from "./users/Users";
import CreateUser from "./creatUser/CreateUser";
import EditUser from "./creatUser/EditUser";
import Profile from "./profile/Profile";
import Register from "./register/Register";
import Login from "./login/Login";
import PageNotFound from "../admincomponents/PageNotFound";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contect from "../contect/Contect";
{/* <div className='dark:bg-slate-900 dark:text-white'>
<BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/nextsignup" element={<BussinessDetaile/>}/>
   <Route path="/login" element={<Login/>}/>  
   <Route path="/contect" element={<Contect/>}/>
  
 </Routes>
</BrowserRouter> */}
// </div>
export {
	Dashboard,
	Layout,
	NftMarketplace,
	Users,
	CreateUser,
	EditUser,
	Profile,
	PageNotFound,
	Register,
	Login,
	Contect,
	Home
};


