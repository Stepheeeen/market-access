import Image from "next/image";
import Link from "next/link";
import { Footer } from "./Component/Footer";
import { Team } from "./Component/Team";
import { NavBar } from "./Component/NavBar";
import { Blog } from "./Component/Blog";

export default function Home() {

  const blogContainer = [
    { image: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/64a40bc2f0df3bde45d93271_IMG-20230704-WA0007-p-500.jpg", topic: "Commentary", title: "Making Markets for Health Care Work: A Conversation with Market Access Africa Managing Partner", text: "In this interview, Market Access Africa Managing Partner Olawale Ajose discusses the role of private markets in enhancing access to healthcare for Africa. ", subimage: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51f0a34f18243edb04f9d_Olawale%20Ajose.png", name: "Olawale Ajose", date: "July 4, 2024" },
    { image: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/646e5fdf6ad5c1fa6178c96a_Screenshot%202023-04-20%20at%202.22.28%20PM-p-500.png", topic: "PDF", title: "Child Survival Action: A Blueprint for Advocacy and Action", text: "The Blueprint for Advocacy and Action on Child Survival guides a network coalition of national, regional, and global level actors, around a coordinated campaign with a common brand identity and a unified purpose to child survival", subimage: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51f1b91d0a2b7bf4efd48_Kudzai%20Makomva.png", name: "Kudzai Makomva", date: "May 24, 2023" },
    { image: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/64494f52f401ee56b0f11ba1_MAA%20malaria%20day%20-p-500.jpg", topic: "Commentary", title: "Will Global Supply of New Malaria Vaccines meet the African Demand?", text: "Investing in innovation for better tools as well as for rapidly scaling up supply is critical, and it has to be fuelled by the same sense of urgency with which the world developed, produced, and deployed a COVID-19 vaccine", subimage: "https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62d51f1b91d0a2b7bf4efd48_Kudzai%20Makomva.png", name: "Kudzai Makomva", date: "April 26, 2023" },

  ]

  return (
    <main className="grid w-[100%] m-0 p-0 box-border">
      {/* <NavBar /> */}

      <section className="bg-[#003634] w-100% grid place-items-center px-10 h-[1330px]">
        <section className="w-100% flex max-[600px]:flex-col-reverse justify-around items-center px-[65px]">
          <div className="md:w-[700px] max-[600px]:pt-10">
            <h1 className="text-[2.9em] font-[600] font-nunito text-white">
              Reimagining African healthcare
            </h1>

            <p className="leading-[125%] text-[16px] font-nunito font-medium w-[80%] text-white mt-9 flex-nowrap">
              Market Access Africa is a mission-driven healthcare organization
              that works with the public, private and third-sector to design and
              deliver transformational healthcare solutions for Africa.
              <br />
              <br />
              We envision an Africa where world-class healthcare is the
              standard, and where deep-rooted inequities in access to lifesaving
              technologies and services are a thing of the past. To solve
              complex problems on the ground, we curate and advance bold, new
              ideas to accelerate access to the best innovations and appropriate
              solutions for Africa’s health systems and markets.
            </p>

            <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
              More about us
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
          </div>
          <Image
            src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62eb74791c29173cebdcedff_home-hero-p-800.png"
            alt="Description of the image"
            width={570}
            height={700}
          />
        </section>
        <section className="flex justify-center max-[600px]:flex-col items-center bg-white p-7 mt-10">
          <div className="p-6">
            <p className="text-[2em] mb-[3rem] font-bold font-nunito text-[#003634] mt-[-100px]">
              Areas Of Expertise
            </p>

            <p className="font-nunito font-normal text-[#003634] text-[16px]">
              We deliver extensive knowledge and expertise on health systems and
              markets to help our partners solve complex challenges across the
              African continent. <br />
              <br />
              We are daring to raise the level of ambition for what is possible
              in African healthcare. We do this by partnering with organizations
              across the healthcare ecosystem to develop bespoke solutions that
              recognize and leverage the uniqueness and dynamism of the
              different African countries where we work.
            </p>

            <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
              Read More
            </button>
          </div>
          <div className="p-5">
            <div className="mt-8">
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb61280938e7e52939_tiles-3.svg"
                alt="Description of the image"
                width={50}
                height={50}
              />
              <h3 className="font-nunito font-bold mt-[16px]">
                Product Commercialization
              </h3>
              ‍
              <p className="font-nunito font-normal text-[#003634] text-[16px]">
                Our work on product introduction and commercialization brings
                together the firm’s expertise in commercial life science,
                healthcare markets, and public health. We work with product
                developers and innovators across the value chain to accelerate
                and streamline the product introduction pathway.
              </p>
            </div>

            <div className="mt-8">
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffebb01eb44a33a4cfbd_tiles-1.svg"
                alt="Description of the image"
                width={50}
                height={50}
              />
              <h3 className="font-nunito font-bold mt-[16px]">
                Public Affairs
              </h3>
              ‍
              <p className="font-nunito font-normal text-[#003634] text-[16px]">
                We leverage our deep networks with policy-makers and key opinion
                leaders across the continent to convene novel, game-changing
                partnerships that design bold transformative policy campaigns
                and initiatives, mobilize resources, and influence change.
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className="mt-8">
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb87e915cf1d84662c_tiles-2.svg"
                alt="Description of the image"
                width={50}
                height={50}
              />
              <h3 className="font-nunito font-bold mt-[16px]">
                Healthcare Delivery
              </h3>
              ‍
              <p className="font-nunito font-normal text-[#003634] text-[16px]">
                We work with public and third sector healthcare organizations to
                build and implement world class programs, increase capacity,
                improve systems, and deliver transformational results.
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb6cdaebe6eac97cfc_tiles.svg"
                alt="Description of the image"
                width={50}
                height={50}
              />
              <h3 className="font-nunito font-bold mt-[16px]">
                Health System Enablers
              </h3>
              ‍
              <p className="font-nunito font-normal text-[#003634] text-[16px]">
                We help our partners to deploy cutting-edge technologies and
                solutions that have the potential to radically expand access to
                lifesaving products and services in the public and private
                healthcare sectors.
              </p>
            </div>
          </div>
        </section>
        <hr className="border-[#00a99d] w-[87%] border mb-[50px] block mx-auto mt-[60px]" />
      </section>
      <div className="h-[200px] w-[100%]"></div>
      <section className="grid place-items-center w-[100%] mt-[100px]">
        <h1 className="mb-[40px] text-[32px] font-nunito font-bold text-[#003634]">
          Our Case Studies
        </h1>

        <div className="flex items-center max-[600px]:flex-col justify-center w-[80%]">
          <div className="p-[20px] rounded-xl bg-[#a3d9d7] min-w-[50%] hover:bg-[#47b3ae] pointer ease-in-out duration-500 mr-5 ">
            <Image
              src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62e8dc318aa3c2502a9a6565_Case%20Study%2014-p-800.jpg"
              alt="Description of the image"
              width={497}
              height={50}
              className="w-[100%] rounded-xl"
            />

            <div className="mt-6 font-nunito font-normal text-[#003634]">
              <span className="text-white rounded-2xl bg-[#003634] text-[14px] py-2 px-3 mr-2 pt-2">
                Product Commercialization
              </span>
              Featured Case Study
              <h2 className="text-[24px] py-[15px]">ARV Compliance Assay</h2>
              <p className="text-[18px] pb-6">
                Our go-to-market strategy helped to integrate a simple and
                cost-effective point of care tool to improve HIV treatment
                compliance
              </p>
            </div>
          </div>

          <div className="">
            <div className="p-[20px] rounded-xl bg-[#a3d9d7] hover:bg-[#47b3ae] pointer ease-in-out duration-500 flex">
              <div>
                <Image
                  src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62e8d960ae45603ce7359ee0_Case%20Study%203%20In%20Copy-p-500.jpg"
                  alt="image Description"
                  width={275}
                  height={200}
                  className="w-[275px] h-[150px] rounded-2xl"
                />
              </div>

              <div className="w-[75%] pl-4">
                <span className="text-white rounded-2xl bg-[#003634] text-[14px] py-2 px-3 mr-2 pt-2">
                  Product Commercialization
                </span>

                <h2 className="text-[20px] py-[15px]">
                  Point of Care Antimicrobial Diagnostics in Low- and
                  Middle-Income Countries
                </h2>

                <p className="text-[16px]">
                  Our market landscape report supported the commercialization
                  planning for true and near point-of-care AMR diagnostic tests
                </p>
              </div>
            </div>
            <div className="p-[15px] rounded-xl bg-[#a3d9d7] hover:bg-[#47b3ae] pointer ease-in-out duration-500 mt-3 flex">
              <div>
                <Image
                  src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62e8d91afaa16635d15d58a1_Case%20Study%202-p-500.jpg"
                  alt="image Description"
                  width={275}
                  height={200}
                  className="w-[275px] h-[150px] rounded-2xl"
                />
              </div>

              <div className="w-[75%] pl-4">
                <span className="text-white rounded-2xl bg-[#003634] text-[14px] py-2 px-3 mr-2 pt-2">
                  Health System Enablers
                </span>

                <h2 className="text-[24px] py-[15px]">
                  Go to Market Strategy for New Molecular TB Diagnostic in LMICs
                </h2>

                <p className="text-[18px]">
                  Our go-to-market strategy enabled significant improvements in
                  the diagnosis of TB in Africa
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out bg-[#f2b630] py-3 px-9 rounded-xl mt-9">
          Read More
        </button>
      </section>

      <section className="grid place-items-center  w-[100%] mt-[100px]">
        <h1 className="mb-[40px] text-[32px] font-nunito font-bold text-[#003634]">
          Our Partners
        </h1>

        <p className="text-wrap text-center w-[80%] text-[18px] font-nunito font-medium text-[#003634]">
          Our work cuts across the entire healthcare value chain. We take a
          multi-disciplinary approach and apply our deep expertise to solve
          complex problems and bring about access to the latest and best health
          tools and service delivery models.
        </p>

        <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
          View Our Services
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
      </section>

      <Team />
      <section className="mt-[50px] mb-9">
        <div className="text-[#003634] text-[2em] font-[700] leading-[120%] text-center font-nunito">Featured Insights</div>

        <div className="flex justify-between max-[600px]:flex-col items-center p-[50px]">
          {
            blogContainer.map((blog, i) => (
              <Blog text={blog.text} title={blog.title} image={blog.image} name={blog.name} date={blog.date} subimage={blog.subimage} topic={blog.topic} key={i} />
            ))
          }
        </div>


        <button className="font-semibold block m-auto  text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out bg-[#f2b630] py-3 px-8 rounded-xl mt-4">
          Read More
        </button>

      </section>

      <section className="mt-7 grid place-content-center w-70%">
        <div className="bg-[url('https://global-uploads.webflow.com/628cd1f0013870d234838177/62bc197783fd9c58e0ea34fc_banner-bg-dark-green.svg')] w-[1200px] font-nunito font-normal text-[#fff] flex justify-between items-center rounded-lg py-[6.25rem] px-[4em]">
          <div>
            <h1 className="text-[2em] font-[700] leading-[120%]">
              Have A Question?
            </h1>
            <p className="text-[1.125em] font-[400]">Please fill out our form or email us.</p>
          </div>

          <button className="font-semibold flex justify-around items-center text-[18px] text-[#fff] font-nunito hover:bg-[#c0e9e6] ease-out mr-[20px] bg-[#00a99d] py-3 px-8 rounded-xl">
            Contact Us
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
