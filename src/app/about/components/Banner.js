'use client';
import React from 'react';
import Background1 from '@/assets/about/about_bg1.png';
import Background2 from '@/assets/about/about_bg2.png';
import Button from '@/components/atoms/Button';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#1b240e',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${Background1.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="relative z-20 text-center text-white px-6 py-12">
        <h2 className="mb-4">ABOUT</h2>
        <h2 className="mb-6">OUR FAMILY</h2>
        <Button 
          className="!mx-auto" 
          sx={{ mt: '40px', px: '25px', py: '16px', fontSize: '20px' }}
        >
          <div className="font-aeonik-bold">More About Us</div>
        </Button>
        <div className="mt-6 text-xl text-white">
          <span className="font-aeonik-bold">SCROLL DOWN</span>
          <div className="flex justify-center items-center mt-4">
            <svg
              className="scroll-down-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="150"
              viewBox="0 0 12 40"
              fill="none"
            >
              <path
                d="M5.64645 39.3536C5.84171 39.5488 6.15829 39.5488 6.35355 39.3536L10.5355 35.1716C10.7308 34.9763 10.7308 34.6597 10.5355 34.4645C10.3403 34.2692 10.0237 34.2692 9.82843 34.4645L6 38.2929L2.17157 34.4645C1.97631 34.2692 1.65973 34.2692 1.46447 34.4645C1.2692 34.6597 1.2692 34.9763 1.46447 35.1716L5.64645 39.3536ZM5.5 0L5.5 39L6.5 39L6.5 0L5.5 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;