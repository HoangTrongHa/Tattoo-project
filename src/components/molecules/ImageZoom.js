'use client';
import React from 'react';
import Image from '@/components/atoms/Image';

const ImageZoom = ({ src, onClose }) => {
  return (
    <div className="z-11 fixed top-0 left-0 w-full h-full p-[var(--margin)] pointer-events-none">
      <div
        className="w-full h-full absolute bg-[#455927] opacity-80"
        onClick={onClose} // Close the thumbnail when the background is clicked
      ></div>
      <div className="w-[100%] h-[100%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[100%] h-[100%] flex justify-center items-center">
          <Image         
            src={src} 
            alt="Thumbnail Image" 
            className="w-[30%] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;