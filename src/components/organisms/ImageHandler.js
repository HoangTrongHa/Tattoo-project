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

  return (
    <>
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
        <ImageZoom src={pathImage} onClose={handleMouseLeave} />
      )}
    </>
  );
};

export default ImageHandler;