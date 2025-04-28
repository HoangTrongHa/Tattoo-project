'use client';
import React, { useState } from 'react';
import Image from '@/components/atoms/Image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme, useMediaQuery } from '@mui/material';

// Using existing images from assets
import tattooArtist1 from '@/assets/home/tattoo-artist-3.png';
import tattooArtist2 from '@/assets/home/tattoo-artist-3.png';
import tattooArtist3 from '@/assets/home/tattoo-artist-3.png';

export default function CustomerReviews() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [carouselRef, setCarouselRef] = useState(null);
  const [currentId, setCurrentId] = useState(1);

  const reviews = [
    { id: 1, image: tattooArtist1 },
    { id: 2, image: tattooArtist2 },
    { id: 3, image: tattooArtist3 },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleImageClick = (clickedId) => {
    if (carouselRef) {
      if (clickedId < currentId) {
        carouselRef.previous();
      } else if (clickedId > currentId) {
        carouselRef.next();
      }
    }
  };

  const handleBeforeChange = (nextSlide) => {
    // nextSlide là index (0,1,2), nên cần +1 để chuyển thành id (1,2,3)
    setCurrentId(nextSlide + 1);
  };

  return (
    <div className="relative w-full bg-[#E5DFDB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="!text-[#455927] text-center mb-12 sm:mb-16 lg:mb-20">
          WHAT OUR CUSTOMERS
          <br /> SAY ABOUT US
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            ref={(el) => setCarouselRef(el)}
            responsive={responsive}
            infinite={true}
            centerMode={true}
            arrows={false}
            showDots={false}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            swipeable={true}
            draggable={true}
            beforeChange={handleBeforeChange}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="px-2 cursor-pointer"
                onClick={() => handleImageClick(review.id)}
              >
                <Image
                  src={review.image.src}
                  alt={`Customer Review ${review.id}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx global>{`
        .carousel-container {
          position: relative;
        }
        .carousel-item-padding-40-px {
          transition: all 0.3s ease;
        }
        @media (min-width: 641px) {
          .react-multi-carousel-item {
            transform: scale(0.8);
            filter: brightness(1);
            transition: all 0.3s ease;
          }
          .react-multi-carousel-item--active {
            transform: scale(1);
            opacity: 1;
          }
          .react-multi-carousel-track {
            display: flex;
            align-items: center;
            gap: 24px;
          }
          .react-multi-carousel-item {
            display: flex;
            justify-content: center;
          }
          .react-multi-carousel-item > div {
            width: 100%;
            max-width: 100%;
          }
          .react-multi-carousel-item:not(.react-multi-carousel-item--active) > div {
            width: 90%;
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
} 