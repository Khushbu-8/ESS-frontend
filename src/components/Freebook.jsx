import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carts from './Carts';


const Freebook = () => {
  const filterData = list.filter((data) => data.category === "free");
  // console.log(filterData); // Add this line to check the data

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <>
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-12'>
              <div>
                  <h1 className='font-sembold text-xl pb-2'>Free offered Course</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
              <div>
                  {filterData.length > 0 ? (
                      <Slider {...settings}>
                          {filterData.map((item) => (
                              <Carts item={item} key={item.id} />
                          ))}
                      </Slider>
                  ) : (
                      <div>No free courses available</div>
                  )}
              </div>
          </div>
      </>
  );
}

export default Freebook
