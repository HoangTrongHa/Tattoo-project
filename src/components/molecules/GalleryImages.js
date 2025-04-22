'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from '@/components/atoms/Image';
import { useTheme, useMediaQuery } from '@mui/material';

const calculateImageWidth = (imageWidth, screenWidth) => {
  return (imageWidth / screenWidth) * 100;
};

export default function GalleryImages({ images }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageDimensions = [
    { width: 497, height: 373 },
    { width: 670, height: 373 },
    { width: 670, height: 373 }
  ];

  const calculateTransform = (index) => {
    if (!containerRef.current) return 0;
    
    const totalImages = duplicatedImages.length;
    const isLastThreeImages = index >= totalImages - 3;
    
    if (isLastThreeImages) {
      const containerWidth = containerRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      const maxTranslate = containerWidth - visibleWidth;
      
      return maxTranslate;
    }
    
    return 0;
  };

  const handleMouseMove = (e, index) => {
    if (isTablet) return;

    const imageElement = imageRefs.current[index];
    if (!imageElement) return;

    const rect = imageElement.getBoundingClientRect();
    const x = e.clientX;
    const relativeX = x - rect.left;
    const elementWidth = rect.width;
    const safeZoneStart = elementWidth * 0.05;
    const safeZoneEnd = elementWidth * 0.95;

    if (relativeX > safeZoneStart && relativeX < safeZoneEnd) {
      setHoveredImage(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div 
      className="flex overflow-hidden mt-12 sm:mt-16 lg:mt-24 h-[400px] sm:h-[500px] lg:h-[600px]" 
      ref={containerRef}
    >
      <div 
        className={`flex transition-transform duration-300 ${isTablet ? 'animate-scroll' : 'hover:pause'}`}
        style={{
          transform: !isTablet && hoveredImage !== null ? 
            `translateX(-${calculateTransform(hoveredImage)}px)` : 
            'translateX(0)'
        }}
      >
        <div className="flex min-w-max items-end">
          {duplicatedImages.map((image, index) => {
            const dimensionIndex = index % imageDimensions.length;
            const baseWidth = calculateImageWidth(imageDimensions[dimensionIndex].width, screenWidth);
            const isHovered = !isTablet && hoveredImage === index;
            const width = isHovered ? baseWidth * 2 : baseWidth;

            return (
              <div
                key={index}
                ref={el => imageRefs.current[index] = el}
                className="relative transition-all duration-300 cursor-pointer"
                style={{
                  width: `${width}%`,
                  marginLeft: index > 0 ? (isTablet ? '16px' : `${calculateImageWidth(24, screenWidth)}%`) : '0'
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 16px));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}