'use client';
import React from 'react';
import Background from '@/assets/home/home-background.png';
import Button from '@/components/atoms/Button';
import ImageHandler from '@/components/organisms/ImageHandler';

const Banner = ({ images }) => {
  return (
    <div
      className="relative flex items-center justify-center w-full banner-home bg-[#455927] text-center text-white"
      style={{
        backgroundColor: '#455927',
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-6 py-12">
        <h2 className="uppercase">WE MAKE ART</h2>
        <h2 className="text-4xl mt-4 !text-[#BEBEBE]">NOT JUST TATTOOS</h2>
        <Button className="!mx-auto" sx={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}>
          <div className="font-aeonik-bold">Book a Consultation</div>
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
      <ImageHandler className='' images={images} />
    </div>
  );
};

export default Banner;