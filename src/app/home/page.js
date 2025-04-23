'use client';
import React from 'react';
import Banner from './components/banner';
import About from './components/about';
import ViewWork from './components/viewWork';
import OurPrice from './components/ourPrice';
import CustomerReviews from './components/customerReviews';
import MedicalProcedure from './components/medicalProcedure';
import Image from '@/components/atoms/Image';
import Head from 'next/head';

import image1 from '@/assets/home/image-1.png';
import image2 from '@/assets/home/image-2.png';
import image3 from '@/assets/home/image-3.png';
import image4 from '@/assets/home/image-4.png';
import image5 from '@/assets/home/image-5.png';
import image6 from '@/assets/home/image-6.png';
import image7 from '@/assets/home/image-7.png';
import about1 from '@/assets/home/about-2.png';
import about2 from '@/assets/home/about-3.png';
import about3 from '@/assets/home/about-4.png';
import logo from '@/assets/Logo.png';
import BannerImage from '@/assets/home/banner.png';

export default function HeroBanner() {
  const images = [
    { 
      src: image1.src,
      position: {
        base: 'top-[15%] left-[20px] w-[15%] h-[auto]',
        md: 'top-[15%] left-[20px] w-[15%] h-[auto]',
        lg: 'top-[15%] left-[20px] w-[15%] h-[auto]'
      }
    },
    { 
      src: image2.src,
      position: {
        base: 'absolute bottom-[75%] left-[40%] w-[7%] h-[auto]',
        md: 'bottom-[75%] left-[40%] w-[7%] h-[auto]',
        lg: 'bottom-[75%] left-[40%] w-[7%] h-[auto]'
      }
    },
    { 
      src: image3.src,
      position: {
        base: 'bottom-[75%] left-[70%] w-[7%] h-[auto]',
        md: 'bottom-[75%] left-[70%] w-[7%] h-[auto]',
        lg: 'bottom-[75%] left-[70%] w-[7%] h-[auto]'
      }
    },
    { 
      src: image4.src,
      position: {
        base: 'top-[10%] right-[20px] w-[15%] h-[auto]',
        md: 'top-[10%] right-[20px] w-[15%] h-[auto]',
        lg: 'top-[10%] right-[20px] w-[15%] h-[auto]'
      }
    },
    { 
      src: image5.src,
      position: {
        base: 'bottom-[229px] left-[178px] w-[11.72%] h-[auto]',
        md: 'bottom-[229px] left-[178px] w-[11.72%] h-[auto]',
        lg: 'bottom-[229px] left-[178px] w-[11.72%] h-[auto]'
      }
    },
    { 
      src: image6.src,
      position: {
        base: 'bottom-[233px] right-[274px] w-[11.72%] h-[auto]',
        md: 'bottom-[233px] right-[274px] w-[11.72%] h-[auto]',
        lg: 'bottom-[233px] right-[274px] w-[11.72%] h-[auto]'
      }
    },
    { 
      src: image7.src,
      position: {
        base: 'bottom-[80px] mx-auto w-[11.72%] h-[auto]',
        md: 'bottom-[80px] mx-auto w-[11.72%] h-[auto]',
        lg: 'bottom-[80px] mx-auto w-[11.72%] h-[auto]'
      }
    }
  ];
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
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "Tattoo Studio Vietnam",
              "description": "Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN"
              },
              "image": logo.src,
              "priceRange": "$$",
              "openingHours": "Mo-Su 10:00-20:00",
              "telephone": "+84-xxx-xxx-xxxx",
              "url": "https://your-tattoo-studio.com"
            })
          }}
        />
      </Head>
      <Banner images={images} />
      <About images={aboutImage} />
      <Image
        className='w-full h-[auto]'
        src={BannerImage.src}
        alt='Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam - Tattoo Studio Vietnam'
      />
      <ViewWork />
      <OurPrice />
      <Image
        className='w-full h-[auto]'
        src={BannerImage.src}
        alt='Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam - Tattoo Studio Vietnam'
      />
      <CustomerReviews />
      <MedicalProcedure />
    </div>
  );
}