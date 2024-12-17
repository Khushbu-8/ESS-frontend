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
            const response = await axios.get(`${backend_API}/category/getAllCategory`);
            const sortedCategories = response.data.category.sort((a, b) =>
                a.categoryName.localeCompare(b.categoryName)
            );

            setCategories(sortedCategories);
            console.log(sortedCategories, "sortedCategories");
        }
        catch (error) {
            console.error("Error fetching categories:", error);
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

        // Loop through categories and banners
        for (let i = 0; i < Math.max(totalCategories, totalBanners); i++) {
            // Add categories
            if (i < totalCategories && i < 10) {
                result.push(
                    <div key={`category-${i}`} className="category-item">
                        {categories[i].name} {/* Assuming category has a name property */}
                    </div>
                );
            }

            // Add banners after every 10 categories
            if (i % 10 === 9 && i < totalBanners) {
                const bannerSlice = BannerImage.slice(i - 2, i + 1); // Get the last 3 banners
                result.push(
                    <div key={`banner-${i}`} className="wrapper">
                        <Slider
                            ref={sliderRef}
                            className="center-slider h-[100%]"
                            {...settings}
                        >
                            {bannerSlice.map((image, index) => (
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

        // Add remaining categories
        for (let i = 10; i < totalCategories; i++) {
            result.push(
                <div key={`remaining-category-${i}`} className="category-item">
                    {categories[i].name}
                </div>
            );
        }

        // Add remaining banners
        const remainingBanners = BannerImage.slice(3); if (remainingBanners.length > 0) {
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