'use client';
import React from 'react';
import Banner from './components/banner';
import About from './components/about';
import ViewWork from './components/viewWork';
import Image from '@/components/atoms/Image';

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
import BannerImage from '@/assets/home/banner.png';

export default function HeroBanner() {
  const images = [
    { src: image1.src, position: 'top-[30%] left-[20px] w-[15%] h-[auto]' },
    { src: image2.src, position: 'bottom-[75%] left-[40%] w-[7%] h-[auto]' },
    { src: image3.src, position: 'bottom-[75%] left-[70%] w-[7%] h-[auto]' },
    { src: image4.src, position: 'top-[25%] right-[20px] w-[15%] h-[auto]' },
    { src: image5.src, position: 'bottom-[229px] left-[178px] w-[11.72%] h-[auto]' },
    { src: image6.src, position: 'bottom-[233px] right-[274px] w-[11.72%] h-[auto]' },
    { src: image7.src, position: 'bottom-[80px] mx-auto w-[11.72%] h-[auto]' },
  ];
  const aboutImage = [
    { src: about1.src, position: 'top-[107px] left-[20px] w-[8%] h-[auto]' },
    { src: about2.src, position: 'bottom-[135px] left-[20px] w-[24%] h-[auto]' },
    { src: about3.src, position: 'top-[203px] right-[20px] w-[16%] h-[auto]' },
    { src: about1.src, position: 'bottom-[274] right-[20px] w-[8%] h-[auto]' },
  ]
  return (
    <div>
      <Banner images={images} />
      <About images={aboutImage} />
      <Image
        className='w-full h-[auto]'
        src={BannerImage.src}
        alt='banner'
      />
      <ViewWork />
    </div>
  );
}