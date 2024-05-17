import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="block">
      <nav className="flex justify-between items-center w-full max-w-1200px mx-auto px-[2em] lg:px-2 py-[1.5em]">
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
          className="inline lg:hidden w-[3em]"
        />

        <div className="hidden md:inline">
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#00a99d] font-nunito mx-[0.5em] px-[0.5em]"
            >
              Home
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em]"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em]"
            >
              Team
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em]"
            >
              Services
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em]"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="font-[600] text-[1em] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mx-[0.5em] px-[0.5em]"
            >
              Insights
            </Link>
            <button className="text-white capitalize hover:bg-[#a3d9d7] bg-[#005956] rounded-lg justify-start py-2 px-6 text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>

        <div className="inline md:hidden">hamburger</div>
      </nav>
    </div>
  );
};
