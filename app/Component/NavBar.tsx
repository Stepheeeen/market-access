"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="block">
      <nav className="flex justify-between items-center w-full max-w-1200px mx-auto px-[2em] py-[1.5em]">
        {/* Display this image on large screens (above 990px) */}
        <Image
          src="https://synergygroupcf.com/logo.png"
          alt="Description of the image"
          width={100}
          height={100}
          className="hidden md:inline"
        />

        {/* Display this image on smaller screens (990px and below) */}
        <h1 className="inline lg:hidden font-bold font-nunito text-[21px] text-[#00a99d]">
          
        </h1>

        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          } w-full`}
        >
          <div className="flex flex-col absolute bg-white w-full mt-[50px] left-0 p-4 rounded-lg lg:flex-row lg:relative lg:w-auto lg:mt-0 lg:items-center">
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#00a99d] font-nunito mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              Home
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              Team
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              Services
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1.25em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em] p-[10px] lg:p-0"
            >
              Insights
            </Link>
            <button className="text-white capitalize hover:bg-[#a3d9d7] bg-[#005956] rounded-lg justify-start py-2 px-6 text-lg font-semibold lg:ml-2">
              Contact Us
            </button>
          </div>
        </div>

        <div className="inline lg:hidden text-[30px] cursor-pointer">
          <button onClick={toggleMenu}>{isOpen ? "╳" : "☰"}</button>
        </div>
      </nav>
    </div>
  );
};
