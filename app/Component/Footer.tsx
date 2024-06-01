import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-[100%] p-10 md:p-[5em] mx-auto bg-[#003634] mt-14 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex mb-[20px] md:mb-0 w-full md:w-auto">
          <div className="flex flex-col items-start mr-10 md:mr-[5em]">
            <div className="text-[#a3d9d7] text-[.875em] font-nunito mb-[1em] font-[700]">
              READ MORE
            </div>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Insights
            </Link>
          </div>

          <div className="flex flex-col items-start mr-10 md:mr-[5em]">
            <div className="text-[#a3d9d7] text-[.875em] font-nunito mb-[1em] font-[700]">
              CAREERS
            </div>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Join Us
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Job Listings
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Become a Consultant
            </Link>
          </div>

          <div className="flex flex-col items-start mr-10 md:mr-[5em]">
            <div className="text-[#a3d9d7] text-[.875em] font-nunito mb-[1em] font-[700]">
              LEGAL 
            </div>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Ts & Cs
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-[.875em] mb-[1em] text-white font-nunito"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="max-w-[23.75em]">
          <div className="text-[#a3d9d7] text-[.875em] font-nunito mb-[1em] font-[700]">
            CONTACT US
          </div>

          <p className="text-[.875em] mb-[1em] text-white font-nunito">
            Reach out to learn more about how we can help you access the African
            market and deliver practical and enduring results. <br />
            <br />
            Email:{" "}
            <span className="text-[#f2b630] font-[600] underline pointer">
              hello@marketaccess.africa
            </span>
          </p>
        </div>
      </div>

      <hr className="mt-[4em]" />

      <div className="flex justify-between pt-[1.5em]">
        <p className="text-[.875em] text-white font-nunito">
          © 2024 Market Access Africa All rights reserved.
        </p>

        <div>
          <div className="flex justify-center items-center">
            <a href="https://www.linkedin.com/company/market-access-africa/">
              <div className="w-[20px] mr-2">
                <svg
                  viewBox="0 0 69 66"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 66H0V21H15V66ZM7.503 15C3.354 15 0 11.637 0 7.497C0 3.357 3.36 0 7.503 0C11.637 0 15 3.363 15 7.497C15 11.637 11.637 15 7.503 15ZM69 66H54.579V44.1C54.579 38.877 54.48 32.16 47.082 32.16C39.573 32.16 38.418 37.848 38.418 43.722V66H24V20.967H37.842V27.12H38.037C39.963 23.58 44.67 19.848 51.69 19.848C66.3 19.848 69 29.175 69 41.301C69 41.301 69 66 69 66Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
            </a>

            <a
              href="https://twitter.com/MarktAccessAfri"
              className="sm-link w-inline-block"
            >
              <div className="w-[20px]">
                <svg
                  viewBox="0 0 79 64"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.0001 7.81098C76.1291 9.08598 73.0451 9.94398 69.8081 10.331C73.1141 8.35098 75.6491 5.21598 76.8431 1.47798C73.7531 3.31098 70.3271 4.64298 66.6791 5.36298C63.7601 2.25198 59.6021 0.307983 55.0001 0.307983C46.1621 0.307983 38.9981 7.47499 38.9981 16.31C38.9981 17.564 39.1421 18.788 39.4121 19.955C26.1131 19.289 14.3231 12.917 6.42707 3.23298C5.05307 5.59698 4.26407 8.34498 4.26407 11.282C4.26407 16.832 7.08707 21.731 11.3801 24.599C8.75807 24.515 6.28907 23.795 4.13207 22.598C4.13207 22.667 4.13207 22.73 4.13207 22.799C4.13207 30.554 9.64607 37.022 16.9691 38.489C15.6281 38.855 14.2121 39.05 12.7511 39.05C11.7221 39.05 10.7171 38.948 9.74207 38.765C11.7791 45.122 17.6891 49.751 24.6911 49.88C19.2161 54.173 12.3161 56.732 4.81607 56.732C3.52607 56.732 2.25107 56.657 0.99707 56.507C8.08007 61.046 16.4891 63.695 25.5281 63.695C54.9641 63.695 71.0561 39.311 71.0561 18.164C71.0561 17.471 71.0411 16.781 71.0111 16.094C74.1401 13.835 76.8551 11.018 79.0001 7.81098Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
