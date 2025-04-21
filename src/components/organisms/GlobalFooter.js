import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Temp4 from '@/assets/background.png'
import Image from '@/components/atoms/Image'
import ImageFooter from '@/assets/Footer.png'

export default function Footer() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#455927',
        backgroundImage: `url(${Temp4.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        py: isMobile ? 2 : 4,
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          flexWrap: 'wrap',
          px: isMobile ? 1 : 2,
          pt: isMobile ? '50px' : '100px',
          gap: isMobile ? 2 : 0,
        }}
      >
        {/* Left side: Contact Information */}
        <Box sx={{ 
          flex: isMobile ? '1 1 100%' : 1, 
          p: isMobile ? 1 : 2, 
          pt: isMobile ? '50px' : '100px',
          borderTop: '1px solid #959595',
          width: '100%',
        }}>
          <div className='flex w-full flex-col md:flex-row'>
            <div className='information w-full md:w-[40%]'>
              <div>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  Email
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: isMobile ? '0.9rem' : '1.25rem' }}>
                  Tattoo@gmail.com
                </Typography>
              </div>
              <div className='mt-[20px] md:mt-[40px]'>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  Địa chỉ
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: isMobile ? '0.9rem' : '1.25rem' }}>
                  30 Đ. Phú Mỹ, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam
                </Typography>
              </div>
              <div className='mt-[20px] md:mt-[40px]'>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                  Số điện thoại
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: isMobile ? '0.9rem' : '1.25rem' }}>
                  0365539191
                </Typography>
                <Typography className='mt-[10px]' variant="h6" component="div" sx={{ fontSize: isMobile ? '0.9rem' : '1.25rem' }}>
                  0396125001
                </Typography>
              </div>
            </div>
          </div>
          <div className='mt-[20px] md:mt-[29px]'>
            <Image src={ImageFooter.src} alt="background" />
          </div>
        </Box>
        {/* Right side: Map */}
        <Box sx={{ 
          flex: isMobile ? '1 1 100%' : 1, 
          p: isMobile ? 1 : 2, 
          display: 'flex', 
          justifyContent: isMobile ? 'center' : 'flex-end', 
          borderTop: '1px solid #959595',
          pt: isMobile ? '50px' : '100px',
          width: '100%',
        }}>
          <Box
            component="iframe"
            src="https://maps.google.com/maps?q=20.9643146,105.8424908&z=15&output=embed"
            className='map w-full md:w-[500px] h-[300px] md:h-[500px]'
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Box>
      </Box>
    </Box>
  )
}