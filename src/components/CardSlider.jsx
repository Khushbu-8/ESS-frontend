import React, { useRef } from 'react';
import Slider from "react-slick";

const CardSlider = () => {
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
                                            className="rounded-md overflow-hidden"
                                            onClick={() => handleImageClick(index)}
                                        >
                                            <figure className="rounded-md overflow-hidden w-full">
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
        </>
    );
};

export default CardSlider;
