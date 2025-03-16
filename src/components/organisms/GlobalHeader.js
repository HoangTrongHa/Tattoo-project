'use client'

import React from 'react'
import { styled } from '@mui/material/styles'
import Image from '@/components/atoms/Image'
import PropTypes from 'prop-types' // Import PropTypes
import CustomDrawer from '@/components/molecules/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link' // Import Link from next/link

const Header = styled('header')({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  background: 'transparent',
  zIndex: 1000,

})

const Logo = styled(Image)({
  width: '138px', // Adjust the size as needed
})

export default function GlobalHeader({ logos }) {
  const { logoSrc } = logos

  const menuItems = [
    'HOME',
    'ABOUT US',
    'ARTIST',
    'PRICE',
    'GALLERY',
  ]

  return (
    <div>
      <Header>
        <Link href="/" passHref>
          <Logo src={logoSrc} alt="Logo" />
        </Link>
        <CustomDrawer>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText className='text-center custom-header-menu cursor-pointer' primary={item} />
              </ListItem>
            ))}
          </List>
        </CustomDrawer>
      </Header>
    </div>
  )
}

GlobalHeader.propTypes = { // Định nghĩa propTypes
  logos: PropTypes.shape({
    logoSrc: PropTypes.string.isRequired,
  }).isRequired,
}