import React from 'react';
import GlobalBanner from '@/components/organisms/GlobalBanner';
import ImageGallery from '@/components/organisms/ImageGallery';
import image1 from '@/assets/gallery/item.png';

const AboutPage = () => {
  const images = [
    { src: image1.src },
    { src: image1.src },
    { src: image1.src },
    { src: image1.src },
    { src: image1.src },
]
  return (
    <div className="min-h-screen bg-[#fff]">
      {/* Hero Section */}
      <GlobalBanner
        title1="MASTERPIECE"
        title2="GALLERY"
      />
      <ImageGallery images={images} />
    </div>
  );
};

export default AboutPage; 