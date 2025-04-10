'use client';
import React, { useState, useCallback } from 'react';
import Background from '@/assets/home/home-background.png';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';

const Banner = ({ images }) => {
  const [pathImage, setPathImage] = useState('');
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handleMouseEnter = useCallback((src) => {
    setPathImage(src);
    setShowThumbnail(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowThumbnail(false);
  }, []);

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
        <Button sx={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}>
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
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute z-10 hover-image image-${index + 1} ${image.position}`}
        >
          <Image
            className="cursor-pointer"
            onMouseEnter={() => handleMouseEnter(image.src)}
            onMouseLeave={handleMouseLeave}
            src={image.src}
            alt={`image-${index + 1}`}
          />
        </div>
      ))}
      {showThumbnail && (
        <div className="z-11 fixed top-0 left-0 w-full h-full p-[var(--margin)] pointer-events-none">
          <div className="w-full h-full absolute bg-[#455927] opacity-80"></div>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <Image src={pathImage} alt="pathImage" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;