// src/app/home/components/HomePageContent.js
'use client';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Banner from './banner';
import About from './about';
import ViewWork from './viewWork';
import OurPrice from './ourPrice';
import CustomerReviews from './customerReviews';
import MedicalProcedure from './medicalProcedure';
import Image from '@/components/atoms/Image';
import BannerImage from '@/assets/home/banner.png';

export default function HomePageContent() {
  const { images, loading, error } = useSelector((state) => state.gallery);
  const transformGalleryImages = (images) => {
    return images.map((src, index) => ({
      src,
      position: {
        base: getPositionForIndex(index),
        md: getPositionForIndex(index),
        lg: getPositionForIndex(index)
      }
    }));
  };

  // Helper function to get position based on index
  const getPositionForIndex = (index) => {
    const positions = [
      'top-[15%] left-[20px] w-[15%] h-[auto]',
      'absolute bottom-[75%] left-[40%] w-[7%] h-[auto]',
      'bottom-[75%] left-[70%] w-[7%] h-[auto]',
      'top-[10%] right-[20px] w-[15%] h-[auto]',
      'bottom-[229px] left-[178px] w-[11.72%] h-[auto]',
      'bottom-[233px] right-[274px] w-[11.72%] h-[auto]',
      'bottom-[80px] mx-auto w-[11.72%] h-[auto]'
    ];
    return positions[index] || positions[0];
  };

  // Transform about images
  const transformAboutImages = (images) => {
    return images.map((src, index) => ({
      src,
      position: {
        base: getAboutPositionForIndex(index),
        md: getAboutPositionForIndex(index),
        lg: getAboutPositionForIndex(index)
      }
    }));
  };

  // Helper function to get about position based on index
  const getAboutPositionForIndex = (index) => {
    const positions = [
      'absolute top-[107px] left-[20px] w-[8%] h-[auto]',
      'absolute bottom-[135px] left-[20px] w-[15%] h-[auto]',
      'absolute top-[203px] right-[20px] w-[16%] h-[auto]',
      'absolute bottom-[274px] right-[20px] w-[8%] h-[auto]'
    ];
    return positions[index] || positions[0];
  };

  const bannerImages = images.banner_home ? transformGalleryImages(images.banner_home) : [];
  const aboutImages = images.about_home ? transformAboutImages(images.about_home) : [];

  return (
    <div>
      {bannerImages.length > 0 && <Banner images={bannerImages} />}
      {aboutImages.length > 0 && <About images={aboutImages} />}
      <Image
        className='w-full h-[auto]'
        src={BannerImage.src}
        alt='Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam - Tattoo Studio Vietnam'
      />
      <ViewWork />
      <OurPrice />
      <Image
        className='w-full h-[auto]'
        src={BannerImage.src}
        alt='Xăm hình nghệ thuật chuyên nghiệp tại Việt Nam - Tattoo Studio Vietnam'
      />
      <CustomerReviews />
      <MedicalProcedure />
    </div>
  );
}