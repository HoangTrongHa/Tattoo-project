'use client'

import { styled } from '@mui/material/styles'

const StyledImage = styled('img')(({ isDark }) => ({
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  filter: 'none',
}))

export default function Image({ src, alt, className = '', ...props }) {
  return (
    <StyledImage 
      src={src} 
      alt={alt} 
      className={className}
      {...props}
    />
  )
}