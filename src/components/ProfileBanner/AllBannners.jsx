import axios from 'axios'
import React, { useEffect, useState } from 'react'

const backend_API = import.meta.env.VITE_API_URL;


const AllBannners = () => {
    const [BannerImage, setBannerImage] = useState([])
    const token = JSON.parse(localStorage.getItem('token'))

    const getUserBenner = async () => {
        try {
            const response = await axios.get(`${backend_API}/banner/getAllBanners`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.data;
            console.log(data);

            setBannerImage(data.banners)
            // console.log(data.banners , "data slider");
            if (response.status === 200) {

            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const DeleteBanner = async (bannerId) => {
        console.log(bannerId);
        
        try {
            const response = await axios.delete(`${backend_API}/banner/deleteBanner/`, 
                 {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                data: { bannerId }
            });
            console.log(response.data);
            getUserBenner();
            if (response.status === 200) {
                console.log("Banner deleted successfully");
            }
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    useEffect(() => {
        getUserBenner()
    }, [])

    return (
        <>
            <section className='mt-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            {
                                BannerImage.map((image, i) => {
                                    return (
                                        <div key={i} className="col-md-4 p-1">
                                            <div className="card card-banners h-100 w-100 overflow-hidden">
                                                <div className="img-banner" style={{ height: "100%" }}>
                                                    <img src={image.imageUrl} className="card-img-top overflow-hidden img-fluid" style={{ objectFit: "cover", height: "100%" }} alt="..." />
                                                </div>
                                                <div className='banner-Btn'>
                                                    <button className='btn bg-orange text-white' onClick={() => DeleteBanner(image._id)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBannners