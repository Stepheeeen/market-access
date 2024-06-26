"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
// import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import ImageSlider from './Slider/Slider'
// import { Modal, Box, Typography, Button } from '@mui/material';



SwiperCore.use([Navigation, Autoplay]);

export const Team = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <section className="w-[100%] bg-[#003634] p-[10px] m-auto lg:p-14 lg:px-[100px] mt-[60px]">
      <h1 className="text-[#00a99d] text-[2.5em] font-[700] font-nunito text-center lg:text-start">
        Meet Our People
      </h1>

      <p className="ml-5 md:ml-0 text-white w-[90%] md:w-full md:px-8 lg:px-0 text-start md:text-center lg:text-start lg:w-[80%] text-[17px] font-nunito font-medium py-11">
        Our team of seasoned experts combine experience at leading healthcare
        organizations, and lived experience across the African continent. This
        drives the way in which we shape innovation and drive change through
        challenging the status quo and thinking boldly about a new era in
        African healthcare.
      </p>

      <div className="max-w-6xl mx-auto my-8">
        <ImageSlider />
      </div>

      <div className="flex justify-center flex-col items-center md:flex-row pl-2 md:pl-0 md:pb-10">
        <button className="font-semibold flex justify-center items-center text-[18px] text-[#fff] font-nunito hover:bg-[#c0e9e6] ease-out mr-[20px] bg-[#00a99d] py-3 px-8 rounded-xl mt-9 w-[90%] md:w-auto">
          Join Our Team
          <span className="ml-[10px]">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.02166 0.483154L7.57049 1.89315L13.3134 7.48315H0.788086V9.48315H13.3134L7.57049 15.0732L9.02166 16.4832L17.2552 8.48315L9.02166 0.483154Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>

        <button className="font-semibold flex justify-center items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9 w-[90%] md:w-auto mb-[20px] md:mb-0">
          View Team
        </button>
      </div>
    </section>
  );
};
