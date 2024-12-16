import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import OfferModal from './OfferModal';

const CardSlider = () => {
    const [click, setClick] = useState()
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

    const handleImageClick = (index) => {
        // console.log(index);
        setClick(index)

        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
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
    console.log(click);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="py-2">
                            <h1 className="pt-6 text-2xl">Best Offer</h1>
                            <div className="wrapper">
                                <Slider
                                    ref={sliderRef}
                                    className="center-slider"
                                    {...settings}
                                >
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="rounded-sm overflow-hidden"
                                            onClick={() => handleImageClick(index,)}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                            <figure className="overflow-hidden w-full">
                                                <img
                                                    className=""
                                                    src={image}
                                                    alt={`Slide ${index}`}
                                                />
                                            </figure>
                                        </div>
                                    ))}
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
