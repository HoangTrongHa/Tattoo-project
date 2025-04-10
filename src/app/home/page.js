'use client';
import React from 'react';
import Banner from './components/banner';
import About from './components/about';
import image1 from '@/assets/home/image-1.png';
import image2 from '@/assets/home/image-2.png';
import image3 from '@/assets/home/image-3.png';
import image4 from '@/assets/home/image-4.png';
import image5 from '@/assets/home/image-5.png';
import image6 from '@/assets/home/image-6.png';
import image7 from '@/assets/home/image-7.png';

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

  return (
    <div>
      <Banner images={images} />
      <About />
    </div>
  );
}