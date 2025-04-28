import React, { useRef } from 'react';
import Button from '@/components/atoms/Button';
import ImageHandler from '@/components/organisms/ImageHandler';
import Image from 'next/image';

export default function About({ images }) {
  return (
  <div className="relative z-10 flex flex-col items-center justify-center w-full bg-[#E5DFDB] text-white">
    <h2 className="!text-[#455927] mt-12 md:mt-[315px]">ABOUT THE TEAM</h2>
    <div className="flex flex-col flex-wrap justify-center mt-8">
      <iframe
        className="sm:w-full lg:w-[928px] 2xl:w-[1200px] sm:h-[300px] lg:h-[615px]"
        src="https://www.youtube.com/embed/jyIcTJiEl98?si=RKwXDgI4sYo3ilNt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="relative bottom mt-5 md:mt-0 md:bottom-[50px]">
        <h2 className="!text-[#455927] text-center">Lorem ipsum dolor <br /> sit amet, consectetur <br /> adipiscing elit.</h2>
      </div>
      <div className="max-w-[847px] !text-[#606060] font-aeonik text-center mx-5 md:mx-auto mt-5 md:mt-0">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
        </span>
      </div>
    </div>
    <div className="z-7 mx-auto mt-5 md:mt-[50px] mb-12 md:mb-[229px]">
      <Button
        sx={{ mt: '30px', px: '25px', py: '16px', fontSize: '30px' }}
        md={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}
      >
        <div className="font-aeonik-bold">
          About Us
        </div>
      </Button>
    </div>

    <ImageHandler images={images} />
  </div>
  );
}
