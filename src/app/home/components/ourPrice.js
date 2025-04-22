'use client';
import React, { useState } from 'react';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import PriceTabs from '@/components/molecules/PriceTabs';
import GalleryImages from '@/components/molecules/GalleryImages';
import { TabPanel, Fade } from '@mui/material';
import backgroundPrice1 from '@/assets/home/background-out-price-1.png';
import backgroundPrice2 from '@/assets/home/background-out-price-2.png';

// Import your images here
import tattooArtist1 from '@/assets/home/tattoo-artist-1.png';
import tattooArtist2 from '@/assets/home/tattoo-artist-2.png';
import tattooArtist3 from '@/assets/home/tattoo-artist-3.png';

const PriceOption = ({ price, isActive }) => (
  <div className={`text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[48px] font-aeonik ${isActive ? 'text-white' : 'text-[#808080]'}`}>
    {price}
  </div>
);

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <Fade in={value === index} timeout={600}>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`price-tabpanel-${index}`}
        aria-labelledby={`price-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    </Fade>
  );
}

export default function OurPrice() {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const currentYear = new Date().getFullYear();
  
  const prices = [
    '$50+',
    '$100+',
    '$200+',
    '$500+',
    '$1000+'
  ];

  // Define different gallery images for each price tab
  const galleryByPrice = {
    0: [ // $50+
      {
        src: tattooArtist1.src,
        alt: "Tattoo artist working - Small tattoos"
      },
      {
        src: tattooArtist2.src,
        alt: "Studio environment - Small tattoos"
      },
      {
        src: tattooArtist3.src,
        alt: "Artwork - Small tattoos"
      }
    ],
    1: [ // $100+
      {
        src: tattooArtist2.src,
        alt: "Tattoo artist working - Medium tattoos"
      },
      {
        src: tattooArtist3.src,
        alt: "Studio environment - Medium tattoos"
      },
      {
        src: tattooArtist1.src,
        alt: "Artwork - Medium tattoos"
      }
    ],
    // ... Define for other price ranges
  };

  const handlePriceChange = (event, newValue) => {
    setSelectedPrice(newValue);
  };

  return (
    <div className="relative w-full bg-[#0F3412]">
      {/* Background images */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundPrice2.src})`,
          backgroundPosition: 'left top, right bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-24 relative z-10">
        {/* Year and Location */}
        <div className="flex justify-between text-white mb-8 sm:mb-12 lg:mb-16">
          <div className="font-aeonik text-[14px] sm:text-[16px] lg:text-[18px]">({currentYear})</div>
          <div className="font-aeonik text-[14px] sm:text-[16px] lg:text-[18px]">Hanoi, Vietnam</div>
        </div>

        {/* Title */}
        <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[48px] xl:text-[64px] font-aeonik-bold text-center mb-8 sm:mb-12 lg:mb-16">
          OUR PRICE
        </h2>

        {/* Price Options */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <PriceTabs 
            prices={prices}
            value={selectedPrice}
            onChange={handlePriceChange}
          />
        </div>

        {/* Book a Consultation Button */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block font-aeonik-bold text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] text-white cursor-pointer">
            <span className="border-b border-white">Book a Consultation</span>
          </span>
        </div>

        {/* Gallery Images with TabPanel */}
        {Object.keys(galleryByPrice).map((priceIndex) => (
          <CustomTabPanel 
            key={priceIndex} 
            value={selectedPrice} 
            index={Number(priceIndex)}
          >
            <GalleryImages images={galleryByPrice[priceIndex]} />
          </CustomTabPanel>
        ))}
      </div>
    </div>
  );
} 