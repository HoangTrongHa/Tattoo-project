'use client'

import React from 'react'
import { styled } from '@mui/material/styles'
import Image from '@/components/atoms/Image'
import PropTypes from 'prop-types' // Import PropTypes
import CustomDrawer from '@/components/molecules/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const Header = styled('header')({
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  margin: '28px 0', // Add margin
  background: 'transparent',
  zIndex: 1000,
})

const Logo = styled(Image)({
  width: '237px', // Adjust the size as needed
})

export default function GlobalHeader({ logos }) {
  const { logoSrc } = logos

  const menuItems = [
    'Menu Item 1',
    'Menu Item 2',
    'Menu Item 3',
  ]

  return (
    <div>
      <Header>
        <Logo src={logoSrc} alt="Logo" />
        <CustomDrawer>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
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