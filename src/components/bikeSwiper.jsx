import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Use SwiperCore and plugins
SwiperCore.use([Virtual, Navigation]);
export default function BikeSwiper() {
  // Set swiper ref and slides state
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState([]);
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.example.com/bike-models');
        setSlides(result.data);
        return result;
      } catch (error) {
        return error.message;
      }
    };
    fetchData();
  }, []);
  // Set breakpoints for swiper
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="pb-2 text-4xl font-bold text-center text-green-400">
          SEH-BIKES MODELS
        </h2>
        <p className="pb-3 text-sm text-gray-300">
          Please select a SEH Bike Model
        </p>
        <div className="w-32 border-b-2 border-gray-300 border-dashed" />
      </div>
      <Swiper
        className="px-4 sm:px-0"
        onSwiper={setSwiperRef}
        centeredSlides
        spaceBetween={20}
        navigation
        virtual
        breakpoints={breakpoints}
        ref={swiperRef}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index}>
            <div className="border-none swiper-slide-content rounded-xl">
              <img
                src={slideContent.image_url}
                className="border-2 rounded-md w-max"
                alt={`Slide ${index + 1}`}
              />
              <div className="swiper-slide-text ">
                <div className="text-md">
                  <h1 className="pt-3 font-bold text-md">{slideContent.name}</h1>
                  <p className="pb-3 text-sm">
                    {slideContent.description}
                  </p>
                </div>
                <ul className="relative flex flex-row items-center justify-center gap-5 mb-10 text-green-500">
                  <li>
                    <a href={slideContent.facebook_link}>
                      <i className="text-sm fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.linkedin_link}>
                      <i className="text-sm fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.twitter_link}>
                      <i className="text-sm fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.amazon_link}>
                      <i className="text-sm fa-brands fa-amazon" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.google_link}>
                      <i className="text-sm fa-brands fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
