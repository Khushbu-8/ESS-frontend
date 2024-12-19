import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import OfferModal from './OfferModal';
import axios from 'axios';
const backend_API = import.meta.env.VITE_API_URL; 

const CardSlider = () => {
    const [click, setClick] = useState()
    const [BannerImage,setBannerImage] = useState([])
    const token = JSON.parse(localStorage.getItem('token'))
    const sliderRef = useRef(null);
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 200,
        centerPadding: '10px',
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleImageClick = async(userId,index) => {
        console.log(userId);
        setClick(userId)

        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);

            try {
                const response = await axios.get(`${backend_API}/banner/getUserByBanner`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.data;
                // setBannerImage(data.banners)
                console.log(data, "data Modal");
                if (response.status === 200) {
                  
                }
            } catch (error) {
                console.log(error);
                return false;
            }
        }

    };

    const images = [
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/corporate-business-flyer-design-brochure-cover-page-template_674761-4262.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid",

    ];
 
    const GetBanner = async() =>{
        try {
            const response = await axios.get(`${backend_API}/banner/getAllBanners`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.data;
            setBannerImage(data.banners)
            // console.log(data.banners , "data slider");
            if (response.status === 200) {
              
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    useEffect(()=>{
        GetBanner()
    },[])

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="py-2">
                            <h1 className=" text-2xl">Best Offer</h1>
                            <div className="wrapper">
                                <Slider
                                    ref={sliderRef}
                                    className="center-slider h-[100%]"
                                    {...settings}
                                >
                                    {BannerImage.length > 0 ? (
                                        BannerImage.map((image, index) => (
                                            <div
                                                key={index}
                                                className="rounded-sm h-[100%] overflow-hidden"
                                                onClick={() => handleImageClick(image.userId , index)}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            >
                                                <figure className="overflow-hidden  img-flued ">
                                                    <img
                                                        className=" w-full h-full"
                                                        src={image.imageUrl}
                                                        
                                                    />
                                                </figure>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OfferModal click={click}/>
        </>
    );
};

export default CardSlider;
