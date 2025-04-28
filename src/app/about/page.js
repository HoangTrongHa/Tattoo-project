import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from './components/Banner';
import GlobalAbout from '@/components/organisms/GlobalAbout';
import OurMission from './components/OurMission';
import about1 from '@/assets/home/about-2.png';
import about2 from '@/assets/home/about-3.png';
import about3 from '@/assets/home/about-4.png';
import CallToAction from '@/components/organisms/GlobalCallToAction';
const AboutPage = () => {
  const aboutImage = [
    { 
      src: about1.src,
      position: {
        base: 'absolute top-[107px] left-[20px] w-[8%] h-[auto]',
        md: 'top-[107px] left-[20px] w-[8%] h-[auto]',
        lg: 'top-[107px] left-[20px] w-[8%] h-[auto]'
      }
    },
    { 
      src: about2.src,
      position: {
        base: 'absolute bottom-[135px] left-[20px] w-[24%] h-[auto]',
        md: 'bottom-[135px] left-[20px] w-[24%] h-[auto]',
        lg: 'bottom-[135px] left-[20px] w-[24%] h-[auto]'
      }
    },
    { 
      src: about3.src,
      position: {
        base: 'absolute top-[203px] right-[20px] w-[16%] h-[auto]',
        md: 'top-[203px] right-[20px] w-[16%] h-[auto]',
        lg: 'top-[203px] right-[20px] w-[16%] h-[auto]'
      }
    },
    { 
      src: about1.src,
      position: {
        base: 'absolute bottom-[274px] right-[20px] w-[8%] h-[auto]',
        md: 'bottom-[274px] right-[20px] w-[8%] h-[auto]',
        lg: 'bottom-[274px] right-[20px] w-[8%] h-[auto]'
      }
    }
  ];
  return (
    <div className="min-h-screen bg-[#455927]">
      {/* Hero Section */}
      <Banner
      />
      <GlobalAbout images={aboutImage} isButton={false} />
      <OurMission />
      <CallToAction 
        title="ARE YOU READY TO BRING YOUR VISION TO LIFE? VISIT US TODAY AND LET'S CREATE SOMETHING COOL TOGETHER!" 
        buttonText="Book a Consultation" 
      />
    </div>
  );
};

export default AboutPage; 