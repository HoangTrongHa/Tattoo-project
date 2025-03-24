'use client'
import React, { useState, useCallback } from 'react';
import Background from '@/assets/home/home-background.png';
import image1 from '@/assets/home/image-1.png';
import image2 from '@/assets/home/image-2.png';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import Thumbnail from '@/components/molecules/Thumbnail';

export default function HeroBanner() {
  const [pathImage, setPathImage] = useState('');
  const [showThumbnail, setShowThumbnail] = useState(false);

  // Hàm sử dụng useCallback để tránh việc tạo lại hàm mỗi lần render
  const handleMouseEnter = useCallback((src) => {
    setPathImage(src);
    setShowThumbnail(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowThumbnail(false);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-[#455927] text-center text-white"
      style={{
        backgroundColor: '#455927',
        backgroundImage: `url(${Background.src})`, // using the imported image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-6 py-12">
        <h2 className="uppercase">WE MAKE ART</h2>
        <h2 className="text-4xl mt-4 !text-[#BEBEBE]">
          NOT JUST TATTOOS
        </h2>
        <Button 
          sx={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}
        >
          <div className='font-aeonik-bold'>
            Book a Consultation
          </div>
        </Button>
        <div className="mt-6 text-xl text-white">
          <span>SCROLL DOWN</span>
          <div className="mt-2">
            {/* Icon scroll down có thể thêm sau */}
          </div>
        </div>
      </div>
      <div 
        className='absolute z-10 hover-image image-1 top-[30%] left-[20px] w-[15%] h-[auto]'
      >
        <Image
          className='cursor-pointer'
          onMouseEnter={() => handleMouseEnter(image1.src)}
          onMouseLeave={handleMouseLeave}
          src={image1.src}
          alt="image-1"
        />  
      </div>
      <div 
        className='absolute z-10 hover-image image-1 top-[10%] left-[40%] w-[7%] h-[auto]'
      >
        <Image
          className='cursor-pointer'
          onMouseEnter={() => handleMouseEnter(image2.src)}
          onMouseLeave={handleMouseLeave}
          src={image2.src}
          alt="image-2"
        />  
      </div>
      
      { showThumbnail && (
        <div className="z-11 fixed top-0 left-0 w-full h-full p-[var(--margin)] pointer-events-none">
        <div className='w-full h-full absolute bg-[#455927] opacity-80'></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={pathImage}
            alt="pathImage"
          />
        </div>
      </div>
      )}
    </div>
  );
}
