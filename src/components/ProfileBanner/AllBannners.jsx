import axios from 'axios'
import React, { useEffect, useState } from 'react'

const backend_API = import.meta.env.VITE_API_URL; 


const AllBannners = () => {
     const [BannerImage,setBannerImage] = useState([])
        const token = JSON.parse(localStorage.getItem('token'))

    const getUserBenner = async() =>{
        try {
            const response = await axios.get(`${backend_API}/banner/getUserByBanner`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.data.banner;
            // console.log(data,"Users banner");
            
            setBannerImage(data)

            if (response.status === 200) {
              
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    useEffect(()=>{
        getUserBenner()
    },[])

  return (
    <>
        <section className='mt-3'>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-4 p-1">
                        <div className="card">
                            <img src="https://plus.unsplash.com/premium_vector-1727480500630-fc174355eee9?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                            className="card-img-top" alt="..."/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllBannners