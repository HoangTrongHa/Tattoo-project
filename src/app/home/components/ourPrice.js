'use client';
import React, { useState } from 'react';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import PriceTabs from '@/components/molecules/PriceTabs';
import GalleryImages from '@/components/molecules/GalleryImages';

// Import your images here
import tattooArtist1 from '@/assets/home/tattoo-artist-1.png';
import tattooArtist2 from '@/assets/home/tattoo-artist-2.png';
import tattooArtist3 from '@/assets/home/tattoo-artist-3.png';

const PriceOption = ({ price, isActive }) => (
  <div className={`text-[24px] sm:text-[32px] lg:text-[48px] font-aeonik ${isActive ? 'text-white' : 'text-[#808080]'}`}>
    {price}
  </div>
);

export default function OurPrice() {
  const [selectedPrice, setSelectedPrice] = useState(0);
  
  const prices = [
    '$50+',
    '$100+',
    '$200+',
    '$500+',
    '$1000+'
  ];

  const handlePriceChange = (event, newValue) => {
    setSelectedPrice(newValue);
  };

  const galleryImages = [
    {
      src: tattooArtist1.src,
      alt: "Tattoo artist working"
    },
    {
      src: tattooArtist2.src,
      alt: "Tattoo studio environment"
    },
    {
      src: tattooArtist3.src,
      alt: "Tattoo artwork"
    }
  ];

  return (
    <div className="relative w-full bg-[#0B3B2D]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Year and Location */}
        <div className="flex justify-between text-white mb-16">
          <div className="font-aeonik">(2025)</div>
          <div className="font-aeonik">Hanoi, Vietnam</div>
        </div>

        {/* Title */}
        <h2 className="text-white text-[32px] sm:text-[48px] lg:text-[64px] font-aeonik-bold text-center mb-16">
          OUR PRICE
        </h2>

        {/* Price Options */}
        <div className="mb-16">
          <PriceTabs 
            prices={prices}
            value={selectedPrice}
            onChange={handlePriceChange}
          />
        </div>

        {/* Book a Consultation Button */}
        <div className="text-center">
          <span className="inline-block font-aeonik-bold text-[20px] sm:text-[24px] lg:text-[32px] text-white cursor-pointer">
            <span className="border-b border-white">Book a Consultation</span>
          </span>
        </div>

        {/* Gallery Images */}
        <GalleryImages images={galleryImages} />
      </div>
    </div>
  );
} 