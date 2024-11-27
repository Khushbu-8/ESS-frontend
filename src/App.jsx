import React from 'react'
import Home from './Home/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Course'
import Signup from './components/Signup'
import Contect from './contect/Contect'
// import Login from './components/Login'
import BussinessDetaile from './components/BussinessDetaile'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	Dashboard,
	Layout,
	NftMarketplace,
	Users,
	CreateUser,
	EditUser,
	Profile,
	Register,
	PageNotFound,
	

} from "./adminpages/index";
import Login from './components/Login'

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/dashboard",
			element: <Layout />,	
			children: [

				{
					path: "/dashboard",
					element: <Dashboard />,
				},
				{
					path: "nft-marketplace",
					element: <NftMarketplace />,
				},
				{
					path: "users",
					element: <Users />,
				},
				{
					path: "createUser",
					element: <CreateUser />,
				},
				{
					path: "editUser",
					element: <EditUser />,
				},
				{
					path: "profile",
					element: <Profile />,
				}
				,{
					path: "register",
					element: <Register/>,
				},
				
			],
		},
		{
			path: "/",
			element: <Home/>,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/contect",
			element: <Contect />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);
	
     
	return <RouterProvider router={router} />;

}

export default App
