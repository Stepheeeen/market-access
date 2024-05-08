import React from 'react'
import Image from 'next/image'

export const Team = () => {
    return (
        <section className="w-[100%] bg-[#003634] p-14 px-[100px] mt-[60px]">
            <h1 className="text-[#00a99d] text-[2.5em] font-[700] font-nunito">
                Meet Our People
            </h1>

            <p className=" text-white w-[80%] text-[17px] font-nunito font-medium py-11">
                Our team of seasoned experts combine experience at leading healthcare
                organizations, and lived experience across the African continent. This
                drives the way in which we shape innovation and drive change through
                challenging the status quo and thinking boldly about a new era in
                African healthcare.
            </p>

            <div className="flex w-[100%] max-[600px]:flex-col items-center justify-between">
                <div>
                    <Image
                        src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51f0a34f18243edb04f9d_Olawale%20Ajose.png"
                        alt="image Description"
                        width={250}
                        height={300}
                        className="rounded-2xl"
                    />
                    <p className="font-nunito text-[#fff] text-[1.4em] font-medium pt-2">Olawale Ajose</p>
                    <span className="font-nunito text-[#00a99d] text-[1.2em] font-medium">Managing Partner</span>
                </div>

                <div>
                    <Image
                        src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51f1b91d0a2b7bf4efd48_Kudzai%20Makomva.png"
                        alt="image Description"
                        width={250}
                        height={300}
                        className="rounded-2xl"
                    />
                    <p className="font-nunito text-[#fff] text-[1.4em] pt-2">Kudzai Makomva</p>
                    <span className="font-nunito text-[#00a99d] text-[1.2em] font-medium">Managing Partner</span>
                </div>

                <div>
                    <Image
                        src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62f619bc5d479bf0c611f193_Shabnam%20Zavahir.png"
                        alt="image Description"
                        width={250}
                        height={300}
                        className="rounded-2xl"
                    />
                    <p className="font-nunito text-[#fff] text-[1.4em] pt-2"> Shabnam Zavahir</p>
                    <span className="font-nunito text-[#00a99d] text-[1.2em] font-medium">Partner</span>
                </div>

                <div>
                    <Image
                        src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51ee7ab269ba8e4455504_Spring%20Gombe.png"
                        alt="image Description"
                        width={250}
                        height={300}
                        className="rounded-2xl"
                    />
                    <p className="font-nunito text-[#fff] text-[1.4em] pt-2">Spring Gombe</p>
                    <span className="font-nunito text-[#00a99d] text-[1.2em] font-medium">Partner</span>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="font-semibold flex justify-around items-center text-[18px] text-[#fff] font-nunito hover:bg-[#c0e9e6] ease-out mr-[20px] bg-[#00a99d] py-3 px-8 rounded-xl mt-9">
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

                <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
                    View Team
                </button>
            </div>
        </section>
    )
}
