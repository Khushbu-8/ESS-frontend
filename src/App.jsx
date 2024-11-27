import React from 'react'
import Home from './Home/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Course'
import Signup from './components/Signup'
import Contect from './contect/Contect'
import Login from './components/Login'
import BussinessDetaile from './components/BussinessDetaile'

const App = () => {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/nextsignup" element={<BussinessDetaile/>}/>
      <Route path="/login" element={<Login/>}/>  
      <Route path="/contect" element={<Contect/>}/>
     
    </Routes>
   </BrowserRouter>
   </div>
   </>
  )
}

export default App
