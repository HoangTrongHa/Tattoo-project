import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, useTheme, useMediaQuery } from '@mui/material'
import Image from '@/components/atoms/Image'

export default function CustomCarousel({
  items = [],
  visibleCount = 3,
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const extendedItems = [
    ...items.slice(-visibleCount),
    ...items,
    ...items.slice(0, visibleCount)
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    }
  }

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={!isMobile}
      autoPlaySpeed={3000}
      centerMode={!isMobile}
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
      showDots={isMobile}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {extendedItems.map((img, index) => (
        <Box
          key={index}
          sx={{
            height: isMobile ? '300px' : isTablet ? '400px' : '472.96px',
            margin: isMobile ? '0 10px' : '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '10px' : '20px',
          }}
        >
          <Image
            src={img.src ? img.src : img}
            alt={`Slide ${index}`}
            style={{ 
              height: '100%', 
              width: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Box>
      ))}
    </Carousel>
  )
}