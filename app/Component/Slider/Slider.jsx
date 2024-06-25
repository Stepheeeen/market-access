import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.module.css'

const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}  // Number of slides to show
      navigation        // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
    >
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
      <SwiperSlide className='p-[30px]'><div style={{background: 'red', height: '100px'}}>Slide 1</div></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
