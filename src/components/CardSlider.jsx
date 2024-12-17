import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import OfferModal from './OfferModal';
import axios from 'axios';
const backend_API = import.meta.env.VITE_API_URL; 

const CardSlider = () => {
    const [click, setClick] = useState();
    const [BannerImage, setBannerImage] = useState([]);
    const [categories, setCategories] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));
    const sliderRef = useRef(null);
    
    const settings = {
        slidesToShow: 3,
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

    const GetBanner = async () => {
        try {
            const response = await axios.get(`${backend_API}/banner/getAllBanners`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.data;
            setBannerImage(data.banners);
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const GetCategories = async () => {
        try {
            const response = await axios.get(`${backend_API}/category/getAllCategory`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.data;
            setCategories(data.category); // Assuming the response has a 'category' field
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    useEffect(() => {
        GetBanner();
        GetCategories();
    }, []);

    const renderCategoriesAndBanners = () => {
        const result = [];
        const totalCategories = categories.length;
        const totalBanners = BannerImage.length;

        // Render categories in groups of 10
        for (let i = 0; i < totalCategories; i += 10) {
            const categoryGroup = categories.slice(i, i + 10);
            result.push(
                <div key={`category-group-${i}`} className="category-group">
                    {categoryGroup.map((category, index) => (
                        <div key={index} className="category-item">
                            {category.name} {/* Assuming category has a name property */}
                        </div>
                    ))}
                </div>
            );

            // Render banners in groups of 3 after each category group
            if (i < totalBanners) {
                const bannerGroup = BannerImage.slice(i / 10 * 3, (i / 10 + 1) * 3); // Calculate the correct slice for banners
                result.push(
                    <div key={`banner-group-${i}`} className="wrapper">
                        <Slider
                            ref={sliderRef}
                            className="center-slider h-[100%]"
                            {...settings}
                        >
                            {bannerGroup.map((image, index) => (
                                <div
                                    key={index}
                                    className="rounded-sm h-[100%] overflow-hidden"
                                    onClick={() => handleImageClick(image.userId, index)}
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                >
                                    <figure className="overflow-hidden img-flued">
                                        <img
                                            className="w-full h-full"
                                            src={image.imageUrl}
                                        />
                                    </figure>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            }
        }

        // Render any remaining categories
        if (totalCategories % 10 !== 0) {
            const remainingCategories = categories.slice(Math.floor(totalCategories / 10) * 10);
            result.push(
                <div key="remaining-categories" className="category-group">
                    {remainingCategories.map((category, index) => (
                        <div key={index} className="category-item">
                            {category.name}
                        </div>
                    ))}
                </div>
            );
        }

        // Render any remaining banners
        const remainingBanners = BannerImage.slice(Math.floor(totalCategories / 10) * 3);
        if (remainingBanners.length > 0) {
            result.push(
                <div key="remaining-banners" className="wrapper">
                    <Slider
                        ref={sliderRef}
                        className="center-slider h-[100%]"
                        {...settings}
                    >
                        {remainingBanners.map((image, index) => (
                            <div
                                key={index}
                                className="rounded-sm h-[100%] overflow-hidden"
                                onClick={() => handleImageClick(image.userId, index)}
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                            >
                                <figure className="overflow-hidden img-flued">
                                    <img
                                        className="w-full h-full"
                                        src={image.imageUrl}
                                    />
                                </figure>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        return result;
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="py-2">
                            <h1 className="pt-6 text-2xl">Best Offer</h1>
                            <div className="categories-and-banners">
                                {renderCategoriesAndBanners()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OfferModal click={click} />
        </>
    );
};

export default CardSlider;