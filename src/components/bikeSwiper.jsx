import React, { useState, useEffect } from 'react';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotorcycles } from '../redux/motorcycles/motorcycles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Use SwiperCore and plugins
SwiperCore.use([Virtual, Navigation]);

export default function BikeSwiper() {
  const dispatch = useDispatch();
  // Set swiper ref and slides state
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    dispatch(getMotorcycles());
  }, [dispatch]);

  const motorcycles = useSelector((state) => state.motorcycle);
  console.log(motorcycles);

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
    1124: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  };
  return (
    <>
      <div className="items-center justify-center text-center">
        <h2 className="pb-2 text-4xl font-bold text-center">
          SEH-BIKES MODELS
        </h2>
        <p className="pb-3 pt-2 text-sm font-bold text-gray-400">
          Please select a SEH Bike Model
        </p>
      </div>
      <Swiper
        className="px-4 sm:px-0"
        // onSwiper={setSwiperRef}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        breakpoints={breakpoints}
      >
        {motorcycles.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id}>
            <div className="border-none swiper-slide-content rounded-xl">
              <img
                src={slideContent.imageUrl}
                className="border-2 rounded-md w-max"
                alt={`Slide ${index + 1}, ${slideContent.name}`}
              />
              <div className="swiper-slide-text">
                <div className="text-md">
                  <h1 className="pt-3 font-bold text-md">{slideContent.name}</h1>
                  <h4 className="pt-3 font-bold text-sm text-gray-400">{slideContent.modelYear}</h4>
                  <p className="pb-3 font-bold text-sm text-gray-400">
                    {slideContent.description}
                  </p>
                </div>
                <ul className="relative flex flex-row items-center justify-center gap-5 mb-10 text-gray-400">
                  <li>
                    <a href={slideContent.facebook_link}>
                      <i className="text-md fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.linkedin_link}>
                      <i className="text-md fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.twitter_link}>
                      <i className="text-md fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.amazon_link}>
                      <i className="text-md fa-brands fa-amazon" />
                    </a>
                  </li>
                  <li>
                    <a href={slideContent.google_link}>
                      <i className="text-md fa-brands fa-google" />
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
