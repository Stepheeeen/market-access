import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid w-[100%] m-0 p-0 box-border">
      <nav className="w-100% h-[90px] flex p-[10px] justify-between items-center px-[90px]">
        <Image
          src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62961eb456ef602bf8751d0c_maa-full-logo.svg"
          alt="Description of the image"
          width={300}
          height={300}
        />

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
      </nav>

      <section className="bg-[#003634] w-100% grid place-items-center px-10 h-[1330px]">
        <section className="w-100% p-[105px] flex justify-around items-center px-[65px]">
          <div className="w-[700px]">
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
        <section className="flex justify-center items-center bg-white p-7 mt-10">
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

        <div className="flex items-center justify-center w-[80%]">
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

      <section className="grid place-items-center w-[100%] mt-[100px]">
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

        <div className="flex w-[100%] items-center justify-between">
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
      <section>
        <div>Featured Insights</div>
      </section>

      <section className="mt-4 grid place-content-center w-70%">
        <div className="bg-[url('https://global-uploads.webflow.com/628cd1f0013870d234838177/62bc197783fd9c58e0ea34fc_banner-bg-dark-green.svg')] w-[1200px] font-nunito font-normal text-[#fff] text-[1.4em] flex justify-between items-center rounded-lg py-20 px-12">
          <div>
            <h1 className="text-[1.6em] font-semibold">
              Have A Question?
            </h1>
            <p>Please fill out our form or email us.</p>
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

      <footer className="w-100% p-8 bg-[#003634] mt-14 text-white">
        <div className="flex justify-between items-center">
          <div>
            <ul>
              <h4>READ MORE</h4>
              <li>About Us</li>
              <li>Services</li>
              <li>Insights</li>
            </ul>

            <ul>
              <h4>CAREERS</h4>
              <li>Join Us</li>
              <li>Job Listings</li>
              <li>Become a Consultant</li>
            </ul>

            <ul>
              <h4>LEGAL</h4>
              <li>Ts & Cs</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          <div>
            <h3>
              CONTACT US
            </h3>

            <p>
              Reach out to learn more about how we can help you access the African market and deliver practical and enduring results. <br />
              <br />
              Email: <span>hello@marketaccess.africa</span>
            </p>
          </div>

        </div>

        <hr />

        <div className="flex justify-between">
          <p>
            ©
            2024
            Market Access Africa All rights reserved.
          </p>

          <div>
            <div className="flex justify-center items-center"><a href="https://www.linkedin.com/company/market-access-africa/">

              <div className="w-[20px] mr-2"><svg viewBox="0 0 69 66" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 66H0V21H15V66ZM7.503 15C3.354 15 0 11.637 0 7.497C0 3.357 3.36 0 7.503 0C11.637 0 15 3.363 15 7.497C15 11.637 11.637 15 7.503 15ZM69 66H54.579V44.1C54.579 38.877 54.48 32.16 47.082 32.16C39.573 32.16 38.418 37.848 38.418 43.722V66H24V20.967H37.842V27.12H38.037C39.963 23.58 44.67 19.848 51.69 19.848C66.3 19.848 69 29.175 69 41.301C69 41.301 69 66 69 66Z" fill="#fff"></path>
              </svg></div></a>

              <a href="https://twitter.com/MarktAccessAfri" className="sm-link w-inline-block"><div className="w-[20px]"><svg viewBox="0 0 79 64" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M79.0001 7.81098C76.1291 9.08598 73.0451 9.94398 69.8081 10.331C73.1141 8.35098 75.6491 5.21598 76.8431 1.47798C73.7531 3.31098 70.3271 4.64298 66.6791 5.36298C63.7601 2.25198 59.6021 0.307983 55.0001 0.307983C46.1621 0.307983 38.9981 7.47499 38.9981 16.31C38.9981 17.564 39.1421 18.788 39.4121 19.955C26.1131 19.289 14.3231 12.917 6.42707 3.23298C5.05307 5.59698 4.26407 8.34498 4.26407 11.282C4.26407 16.832 7.08707 21.731 11.3801 24.599C8.75807 24.515 6.28907 23.795 4.13207 22.598C4.13207 22.667 4.13207 22.73 4.13207 22.799C4.13207 30.554 9.64607 37.022 16.9691 38.489C15.6281 38.855 14.2121 39.05 12.7511 39.05C11.7221 39.05 10.7171 38.948 9.74207 38.765C11.7791 45.122 17.6891 49.751 24.6911 49.88C19.2161 54.173 12.3161 56.732 4.81607 56.732C3.52607 56.732 2.25107 56.657 0.99707 56.507C8.08007 61.046 16.4891 63.695 25.5281 63.695C54.9641 63.695 71.0561 39.311 71.0561 18.164C71.0561 17.471 71.0411 16.781 71.0111 16.094C74.1401 13.835 76.8551 11.018 79.0001 7.81098Z" fill="#fff"></path>
              </svg></div></a></div>
          </div>
        </div>

      </footer>
    </main>
  );
}
