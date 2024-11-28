import React from 'react'
import Navebar from '../components/Navebar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>
    <Navebar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
