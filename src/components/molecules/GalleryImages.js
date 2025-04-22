'use client';
import React, { useEffect, useState } from 'react';
import Image from '@/components/atoms/Image';

const calculateImageWidth = (imageWidth, screenWidth) => {
  return (imageWidth / screenWidth) * 100;
};

export default function GalleryImages({ images }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Original image dimensions from Figma
  const imageDimensions = [
    { width: 497, height: 373 }, // First image
    { width: 670, height: 373 }, // Second image
    { width: 670, height: 373 }  // Third image
  ];

  const renderImageSet = () => {
    return (
      <div className="flex min-w-max items-end">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            style={{
              width: `${calculateImageWidth(imageDimensions[index].width, screenWidth)}%`,
              aspectRatio: `${imageDimensions[index].width}/${imageDimensions[index].height}`,
              marginLeft: index > 0 ? `${calculateImageWidth(24, screenWidth)}%` : '0'
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex overflow-hidden mt-24">
      <div className="flex animate-scroll">
        {renderImageSet()} {/* Original set */}
        {renderImageSet()} {/* Duplicate set for infinite scroll */}
      </div>
    </div>
  );
} 