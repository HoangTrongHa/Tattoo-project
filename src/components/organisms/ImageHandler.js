'use client';
import React, { useState, useCallback } from 'react';
import Image from '@/components/atoms/Image';
import ImageZoom from '@/components/molecules/ImageZoom';

const ImageHandler = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback((src, index) => {
    setHoveredImage({ src, index });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredImage(null);
  }, []);

  const handleMouseMove = useCallback((e, index) => {
    if (hoveredImage?.index !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, [hoveredImage]);

  const getResponsiveClasses = (position) => {
    if (typeof position === 'string') return position;
    
    if (typeof position === 'object') {
      const mdClasses = position.md ? ` md:${position.md}` : '';
      const lgClasses = position.lg ? ` lg:${position.lg}` : '';
      return `${position.base}${mdClasses}${lgClasses}`.trim();
    }

    return '';
  };

  return (
    <>
      {images.map((image, index) => {
        const positionClasses = getResponsiveClasses(image.position);
        const isHovered = hoveredImage?.index === index;
        
        return (
          <div
            key={index}
            className={`hidden md:block absolute z-10 hover-image image-${index + 1} ${positionClasses}`}
          >
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(image.src, index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <Image
                className={`w-full h-auto cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                }}
                src={image.src}
                alt={`image-${index + 1}`}
              />
            </div>
          </div>
        );
      })}
      <div className={`z-11 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${hoveredImage ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <ImageZoom 
          src={hoveredImage?.src} 
          onClose={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default ImageHandler;