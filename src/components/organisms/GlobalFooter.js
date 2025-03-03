import React from 'react'
import { Box, Typography } from '@mui/material'
import Temp4 from '@/assets/background.png'
import Image from '@/components/atoms/Image'
import ImageFooter from '@/assets/Footer.png'
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#455927',
        backgroundImage: `url(${Temp4.src})`, // using the imported image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        py: 4,
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          px: 2,
          pt: '100px'
        }}
      >
        {/* Left side: Contact Information */}
        <Box sx={{ 
          flex: 1, 
          p: 2, 
          pt: '100px',
          borderTop: '1px solid #959595'
        }}>
          <div className='flex w-full'>
            <div className='information w-[40%]'>
              <div>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE' }}>
                  Email
                </Typography>
                <Typography variant="h6" component="div">
                  Tattoo@gmail.com
                </Typography>
              </div>
              <div className='mt-[40px]'>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE' }}>
                  Email
                </Typography>
                <Typography variant="h6" component="div">
                  30 Đ. Phú Mỹ, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam
                </Typography>
              </div>
              <div className='mt-[40px]'>
                <Typography component="div" variant="body2" sx={{ color: '#BEBEBE' }}>
                  Số điện thoại
                </Typography>
                <Typography variant="h6" component="div">
                  0365539191
                </Typography>
                <Typography className='mt-[10px]' variant="h6" component="div">
                  0396125001
                </Typography>
              </div>
            </div>
          </div>
          <div className='mt-[29px]'>
            <Image src={ImageFooter.src} alt="background" />
          </div>
        </Box>
        {/* Right side: Map */}
        <Box sx={{ flex: 1, 
          p: 2, 
          display: 'flex', 
          justifyContent: 'flex-end', 
          borderTop: '1px solid #959595',
          pt: '100px',
        }}>
          <Box
            component="iframe"
            src="https://maps.google.com/maps?q=20.9643146,105.8424908&z=15&output=embed"
            className='map w-[500px] h-[500px]'
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