"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import Image from "next/image";
import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";
import Modal from "./Modal";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { time } from "console";

SwiperCore.use([Navigation, Autoplay]);

export const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const teamMembers = [
    {
      id: 1,
      name: "Daniel Okpare",
      position: "Health Professional",
      image: "https://synergygroupcf.com/daniel-okpare.png",
    },
    {
      id: 2,
      name: "Dr Adjoa Bucknor",
      position: "Gynecologist",
      image: "https://synergygroupcf.com/adjoa-bucknor.png",
    },
    {
      id: 3,
      name: "Najim Pedro, MD",
      position: "Director of Affairs",
      image: "https://synergygroupcf.com/najim-pedro.png",
    },
    {
      id: 4,
      name: "Will Jeudy",
      position: "Enterpreneur",
      image: "https://synergygroupcf.com/will-jeudy.png",
    },
    {
      id: 5,
      name: "Benjamin Ogundele",
      position: "Health Professional",
      image: "https://synergygroupcf.com/benjamin-ogundele.png",
    },
  ];

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
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {teamMembers.map((member, index: number) => (
            <section key={index + member.id + index + 1}>
              <SwiperSlide key={index + member.id}>
                <div className="p-4 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} Image`}
                    width={250}
                    height={300}
                    className="w-full md:w-[300px] lg:w-[250px] h-[270px] rounded-t-2xl bg-white"
                  />
                  <div className="flex justify-between items-center md:w-[90%] w-full">
                    <div>
                      <p className="font-nunito text-white text-[1em] md:text-[1.2em] font-medium pt-2">
                        {member.name}
                      </p>
                      <span className="font-nunito text-[#00a99d] text-[.8em] md:text-[1em] font-medium">
                        {member.position}
                      </span>
                    </div>

                    <button
                      onClick={openModal}
                      className="font-semibold flex justify-center items-center float-end text-[25px] md:text-[25px] text-[#fff] font-nunito hover:bg-[#c0e9e6] ease-out bg-[#00a99d] rounded-full w-[40px] md:mt-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              {isModalOpen && (
                <Modal
                  onClose={closeModal}
                  key={index + member.id}
                  header={
                    <h2 className="text-xl font-semibold">{member.name}</h2>
                  }
                  text={<p className="mt-4">{member.position}</p>}
                />
              )}
            </section>
          ))}
        </Swiper>
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
