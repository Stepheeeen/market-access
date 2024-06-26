import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // height: '800px',
  boxShadow: 24,
  p: 4,
};

const Slider = () => {
  // modal functionality for each bio of each members
  const [daniel, setDaniel] = useState(false);
  const DanielOpen = () => setDaniel(true);
  const DanielClose = () => setDaniel(false);

  const [adjoa, setAdjoa] = useState(false);
  const AdjoaOpen = () => setAdjoa(true);
  const AdjoaClose = () => setAdjoa(false);

  const [najim, setNajim] = useState(false);
  const NajimOpen = () => setNajim(true);
  const NajimClose = () => setNajim(false);

  const [will, setWill] = useState(false);
  const WillOpen = () => setWill(true);
  const WillClose = () => setWill(false);

  const [benjamin, setBenjamin] = useState(false);
  const BenjaminOpen = () => setBenjamin(true);
  const BenjaminClose = () => setBenjamin(false);

  const Slider = [
    {
      name: 'Daniel Okpare',
      ImageSrc: 'https://synergygroupcf.com/daniel-okpare.png',
      position: "Health Professional",
      Open: daniel, Button: DanielOpen, handleClose: DanielClose,
      bio: `Daniel Okpare is a passionate global health professional with over 10 years of experience strengthening healthcare systems and expanding access to quality care across Africa and North America. He specializes in policy development, advocacy, strategies, data utilization, and program implementation. His career began as a research project manager at the Hospital for Special Surgery. Daniel currently works Community Healthcare Specialist at NYC Department of Health (NYCDOH), where he supports research and policy planning on health care delivery, primary care and FQHC landscape, safety net access to health care services and preventive care, and other critical health services that address social determinants of health. Daniel is currently a member of the Strategy & Policy AI workgroup under the AI Taskforce at the NYCDOH. Prior to this, he co-coordinated the city's comprehensive health and operational strategy to provide critical services and support to newly- arrived asylum seekers.He also co - authored groundbreaking research illuminating trends and disparities in diabetes prevalence, outcomes, and care across NYC and spearheaded the planning of the health agency's mobile health clinic program to bring essential primary and preventive care services directly to NYC's most vulnerable communities.Daniel holds a Master of Public Health from New York University and a Bachelor's degree in Psychology from Hunter College in New York. He is a dedicated champion for health and rights of marginalized communities.`,
    },
  {
    name: "Dr Adjoa Bucknor",
    ImageSrc: 'https://synergygroupcf.com/adjoa-bucknor.png',
    position: "Gynecologist",
    Open: adjoa, Button: AdjoaOpen, handleClose: AdjoaClose,
    bio: `Dr. Adjoa Bucknor.  A clinician and gynecologist by practice, Adjoa received her medical degree from the Albert Einstein College of Medicine, New York and was a front-line worker during the COVID-19 pandemic. Additionally, she completed her residency in Obstetrics and Gynecology from Mount Sinai Hospital, New York, where she previously served as an Assistant Program Director. Having more than 7 years of diverse experiences in Obstetrics/Gynecology, Dr. Adjoa Bucknor affiliates with Mount Sinai Hospital, cooperates with many other doctors and specialists in many medical groups including Mount Sinai, Lenox Hill Hospital, and East Harlem Council for Human Services Inc. As a Global Health Associate at Synergy Consulting, Adjoa supports clients by building their capabilities in several areas, including women’s health market access, due diligence/feasibility assessments and stakeholder engagement. Her recommendations inform market launches for diagnostic and therapeutic products in Africa and in New York. Prior to joining SC, Adjoa garnered significant experience in working in various facets of the healthcare industry, as a clinician and as a healthcare instructor. Her experience includes working as a Clinical Instructor in Obstetrics and Gynecology at the Mount Sinai Health System, and a resident gynecologist at Cohen Medical Practice – New York.`
  },
  {
    name: "Najim Pedro, MD",
    ImageSrc: 'https://synergygroupcf.com/najim-pedro.png',
    position: "Director of Affairs",
    Open: najim, Button: NajimOpen, handleClose: NajimClose,
    bio: `Najim Pedro, MD, MPH is an Associate Director of Regulatory Affairs & Accreditation in Office of Quality and Safety at NYC Health and Hospitals | Kings County. He earned his medical degree from Lagos State University in Nigeria followed by his MPH degree at NYU. Najim co-founded OneDokita Healthcare Limited with the aim of increasing access to healthcare by staffing mobile clinics in remote areas in Nigeria. He then spent six years working in healthcare transformation and innovation in the ambulatory care setting in the US. He serves as the Assistant Director of Ambulatory Care at King County Hospital and as the Interim Pediatric Program Lead for the integration of Community Health Worker Intervention into ambulatory clinical wing of New York City Health & Hospital, the nation’s largest municipal health system. His passion for growth and leadership in both clinical operation and patient safety and his deep belief in the need for health care innovation led Najim to pursue the Master’s in Clinical Service Operation at Harvard Medical School.`
  },
  {
    name: "Will Jeudy",
    ImageSrc: 'https://synergygroupcf.com/will-jeudy.png',
    position: "Enterpreneur",
    Open: will, Button: WillOpen, handleClose: WillClose,
    bio: `Will Jeudy is an entrepreneur and a seasoned healthcare leader with expertise spanning financial planning and analysis, forecasting, GTM (Go-to-Market) strategy and planning, operations, performance improvement, and health care informatics. His track record showcases a consistent ability to achieve objectives within designated timeframes. Furthermore, he boasts a strong grasp of healthcare applications and is proficient in utilizing technology. Prior to this, Will occupied significant roles, including serving as a senior financial and analytics manager at Memorial Sloan Kettering Cancer Center and working as a management consultant at Cope Health Solutions. In these capacities, he has been instrumental in propelling growth and innovation by introducing high-caliber systems and processes, offering thought leadership, and establishing a world-class finance organization.`
  },
  {
    name: "Benjamin Ogundele",
    ImageSrc: 'https://synergygroupcf.com/benjamin-ogundele.png',
    position: "Health Professional",
    Open: benjamin, Button: BenjaminOpen, handleClose: BenjaminClose,
    bio: `Benjamin Ogundele is a seasoned public health professional with over five years in healthcare data, earned his Bachelor's in Biology from Montclair State University and holds a Master's in Public Health with a concentration in Epidemiology from St. George’s University. Passionate about uplifting vulnerable communities, he dedicates his expertise to addressing health disparities and improving healthcare systems in the US and Africa. Benjamin's commitment is evident in his role at the New York State Department of Health's Office of Aging and Long-Term Care Services, where he employs evidence-based strategies to shape programs in Population and Environmental Health. His diverse interests span Chronic Diseases, Microbiology, Epigenetics, Aging, Real Estate, Urban Development, and Lifestyle Medicine, providing a holistic approach to health initiatives.`
  },
  ]
return (
  <div className='w-full'>
    <Swiper
      spaceBetween={-45}
      slidesPerView={3}  // Number of slides to show
      navigation        // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
    >
      {Slider.map((slides, index) => (
        <SwiperSlide className='p-[50px] w-[400px]' key={index}>
          <div className='bg-white rounded-lg' >
            <Image src={slides.ImageSrc} width={400} height={400} className='rounded-lg'/>
          </div>
          <div className='w-full flex justify-between items-center mt-3'>
            <div className='text-white'>
              <h1>
                {slides.name}
              </h1>
              <p>
                {slides.position}
              </p>
            </div>

            <button onClick={slides.Button} className='text-white text-[28px] w-[35px] h-[35px] pb-1 rounded-full bg-[#00a99d] hover:bg-[#00a99ea5] flex items-center justify-center'>
              +
            </button>

            <Modal
              open={slides.Open}
              onClose={slides.handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className='h-[500px] overflow-y-scroll overflow-x-hidden rounded'>
                <h1 className='text-[21px] font-medium'>
                  {slides.name}
                </h1>
                <p className='text-[14px] mt-5 font-nunito'>
                  {slides.bio}
                </p>
              </Box>
            </Modal>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default Slider;
