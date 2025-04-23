'use client';
import React, { useState, useCallback } from 'react';
import Image from '@/components/atoms/Image';
import ImageZoom from '@/components/molecules/ImageZoom';

const ImageHandler = ({ images }) => {
  const [pathImage, setPathImage] = useState('');
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handleMouseEnter = useCallback((src) => {
    setPathImage(src);
    setShowThumbnail(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowThumbnail(false);
  }, []);

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
        
        return (
          <div
            key={index}
            className={`hidden md:block absolute z-10 hover-image image-${index + 1} ${positionClasses}`}
          >
            <Image
              className="w-full h-auto cursor-pointer"
              onMouseEnter={() => handleMouseEnter(image.src)}
              onMouseLeave={handleMouseLeave}
              src={image.src}
              alt={`image-${index + 1}`}
            />
          </div>
        );
      })}
      {showThumbnail && (
        <ImageZoom src={pathImage} onClose={handleMouseLeave} />
      )}
    </>
  );
};

export default ImageHandler;