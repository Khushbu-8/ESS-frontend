import React, { useEffect, useState } from 'react'
import Card from './Card'
import ServieceCategories from '../components/ServieceCategories'
import CardSlider from '../components/CardSlider'
import Benner from '../components/Benner'
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchScreen from './SearchScreen '
import UserSideBar from '../components/UserSideBar'

const Home = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }


  }, [token])

  return (
    <>

      <AdminNavbar />
      <UserSideBar />

      <div className='mt-32'>
        {
          auth ? <Card /> : <></>
        }


        {/* <Card />  */}
        <CardSlider />
      </div>
      <section>
        <div className="container">
          <div className="row">

            <div>
              <h3 className='ps-2 py-2'>Servises</h3>
            </div>
            <div>
              {/* <SearchScreen/> */}
            </div>
          </div>
        </div>
      </section>
    
      <ServieceCategories />
      <Benner />
      <div className='p-5'>
        <ServieceCategories />
      </div>


    </>


  )
}

export default Home