import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid w-100% m-0 p-0 box-border">
      <nav className="w-100% h-[90px] flex p-[10px] justify-between items-center px-[90px]">
        <Image
          src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62961eb456ef602bf8751d0c_maa-full-logo.svg"
          alt="Description of the image"
          width={300}
          height={300} />

        <div className='flex justify-center items-center'>
          <Link href="/" className="font-[800] text-[16px] text-[#00a99d] font-nunito mr-[20px]">
            Home
          </Link>
          <Link href="/" className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]">
            About
          </Link>
          <Link href="/" className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]">
            Team
          </Link>
          <Link href="/" className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]">
            Services
          </Link>
          <Link href="/" className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[30px]">
            Careers
          </Link>
          <Link href="/" className="font-normal text-[16px] text-[#6e6e6e] font-nunito hover:text-[#00a99d] ease-out mr-[25px]">
            Insights
          </Link>
          <button className="font-semibold text-[18px] text-white font-nunito hover:bg-[#00a99d] ease-out mr-[20px] bg-[#003634f1] py-2 px-7 rounded-xl">
            Contact Us
          </button>
        </div>
      </nav>

      <section className='bg-[#003634] w-100% grid place-items-center px-10 h-[1330px]'>
        <section className='w-100% p-[105px] flex justify-around items-center px-[65px]'>
          <div className='w-[700px]'>
            <h1 className='text-[2.8125em] font-[600] font-nunito text-white'>
              Reimagining African healthcare
            </h1>

            <p className='leading-[125%] text-[16px] font-nunito font-medium w-[80%] text-white mt-9 flex-nowrap'>Market Access Africa is a mission-driven healthcare organization that works with the public, private and third-sector to design and deliver transformational healthcare solutions for Africa.<br /><br />We envision an Africa where world-class healthcare is the standard, and where deep-rooted inequities in access to lifesaving technologies and services are a thing of the past. To solve complex problems on the ground, we curate and advance bold, new ideas to accelerate access to the best innovations and appropriate solutions for Africa’s health systems and markets.</p>

            <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
              More about us <span className='ml-[10px]'><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02166 0.483154L7.57049 1.89315L13.3134 7.48315H0.788086V9.48315H13.3134L7.57049 15.0732L9.02166 16.4832L17.2552 8.48315L9.02166 0.483154Z" fill="currentColor"></path>
              </svg></span>
            </button>
          </div>
          <Image
            src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62eb74791c29173cebdcedff_home-hero-p-800.png"
            alt="Description of the image"
            width={570}
            height={700}
          />
        </section>
        <section className='flex justify-center items-center bg-white p-7 mt-10'>
          <div className='p-6'>
            <p className='text-[2em] mb-[3rem] font-bold font-nunito text-[#003634] mt-[-100px]'>
              Areas Of Expertise
            </p>

            <p className='font-nunito font-normal text-[#003634] text-[16px]'>
              We deliver extensive knowledge and expertise on health systems and markets to help our partners solve complex challenges across the African continent. <br />
              <br />
              We are daring to raise the level of ambition for what is possible in African healthcare. We do this by partnering with organizations across the healthcare ecosystem to develop bespoke solutions that recognize and leverage the uniqueness and dynamism of the different African countries where we work.
            </p>

            <button className="font-semibold flex justify-around items-center text-[18px] text-[#003634] font-nunito hover:bg-[#e9d5a9] ease-out mr-[20px] bg-[#f2b630] py-3 px-8 rounded-xl mt-9">
              Read More
            </button>
          </div>
          <div className='p-5'>
            <div className='mt-8'>
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb61280938e7e52939_tiles-3.svg"
                alt="Description of the image"
                width={50}
                height={50} />
              <h3 className='font-nunito font-bold mt-[16px]'>
                Product Commercialization
              </h3>
              ‍
              <p className='font-nunito font-normal text-[#003634] text-[16px]'>
                Our work on product introduction and commercialization brings together the firm’s expertise in commercial life science, healthcare markets, and public health. We work with product developers and innovators across the value chain to accelerate and streamline the product introduction pathway.
              </p>
            </div>

            <div className='mt-8'>
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffebb01eb44a33a4cfbd_tiles-1.svg"
                alt="Description of the image"
                width={50}
                height={50} />
              <h3 className='font-nunito font-bold mt-[16px]'>
                Public Affairs
              </h3>
              ‍<p className='font-nunito font-normal text-[#003634] text-[16px]'>
                We leverage our deep networks with policy-makers and key opinion leaders across the continent to convene novel, game-changing partnerships that design bold transformative policy campaigns and initiatives, mobilize resources, and influence change.
              </p>
            </div>
          </div>
          <div className='p-5'>
            <div className='mt-8'>
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb87e915cf1d84662c_tiles-2.svg"
                alt="Description of the image"
                width={50}
                height={50} />
              <h3 className='font-nunito font-bold mt-[16px]'>
                Healthcare Delivery
              </h3>

              ‍<p className='font-nunito font-normal text-[#003634] text-[16px]'>
                We work with public and third sector healthcare organizations to build and implement world class programs, increase capacity, improve systems, and deliver transformational results.
              </p>

            </div>
            <div className='mt-8'>
              <Image
                src="https://global-uploads.webflow.com/628cd1f0013870d234838177/62cbffeb6cdaebe6eac97cfc_tiles.svg"
                alt="Description of the image"
                width={50}
                height={50} />
              <h3 className='font-nunito font-bold mt-[16px]'>
                Health System Enablers
              </h3>
              ‍<p className='font-nunito font-normal text-[#003634] text-[16px]'>
                We help our partners to deploy cutting-edge technologies and solutions that have the potential to radically expand access to lifesaving products and services in the public and private healthcare sectors.
              </p>

            </div>
          </div>

        </section>
        <hr className="border-[#00a99d] w-[87%] border mb-[50px] block mx-auto mt-[60px]" />
      </section>
      <div className='h-[200px] w-[100%]'></div>
      <section className='grid place-items-center w-[100%] mt-[100px]'>
        <h1>
          Our Case Studies
        </h1>

        <div className='flex items-center justify-center w'>
          <div className='p-[15px] rounded-xl bg-[#a3d9d7] hover:bg-[#003634] pointer ease-in-out'>
            <Image
              src="https://global-uploads.webflow.com/628f3ec4a439cd94e2b14707/62e8dc318aa3c2502a9a6565_Case%20Study%2014-p-800.jpg"
              alt="Description of the image"
              width={485}
              height={50}
              className='rounded-xl'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
