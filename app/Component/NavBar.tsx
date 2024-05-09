import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="h-[140px] w-[100%] lg:h-[90px] flex p-[10px] justify-between items-center px-12 fixed top-0 left-0 bg-white md:relative">
      {/* Display this image on large screens (above 990px) */}
      <Image
        src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62961eb456ef602bf8751d0c_maa-full-logo.svg"
        alt="Description of the image"
        width={300}
        height={300}
        className="hidden lg:inline"
      />

      {/* Display this image on smaller screens (990px and below) */}
      <Image
        src="https://global-uploads.webflow.com/628cd1f0013870d234838177/6296274f9c56ba7b62e2b9ee_maa-logo-small.svg"
        alt="Description of the image"
        width={0}
        height={0}
        className="inline lg:hidden w-[6em]"
      />

      <div className="hidden md:inline">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="font-[800] text-[16px] text-[#00a99d] font-nunito mr-[20px]"
          >
            Home
          </Link>
          <Link
            href="/"
            className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]"
          >
            About
          </Link>
          <Link
            href="/"
            className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]"
          >
            Team
          </Link>
          <Link
            href="/"
            className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]"
          >
            Services
          </Link>
          <Link
            href="/"
            className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]"
          >
            Careers
          </Link>
          <Link
            href="/"
            className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[25px]"
          >
            Insights
          </Link>
          <button className="font-semibold text-[18px] text-white font-nunito hover:bg-[#00a99d] ease-out mr-[20px] bg-[#003634f1] py-2 px-7 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>

      <div className="inline md:hidden">hamburger</div>
    </nav>
  );
};
