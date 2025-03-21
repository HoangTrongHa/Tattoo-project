import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material'
import Image from '@/components/atoms/Image'

export default function CustomCarousel({
  items = [],
  visibleCount = 3,
}) {
  const extendedItems = [
    ...items.slice(-visibleCount),
    ...items,
    ...items.slice(0, visibleCount)
  ]
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
    >
      {extendedItems.map((img, index) => (
        <Box
          key={index}
          sx={{
            height: '472.96px',
            margin: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={img.src ? img.src : img}
            alt={`Slide ${index}`}
            style={{ height: '100%', width: 'auto' }}
          />
        </Box>
      ))}
    </Carousel>
  )
}