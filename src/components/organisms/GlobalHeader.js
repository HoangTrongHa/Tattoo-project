'use client'

import React, { memo } from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import PropTypes from 'prop-types'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const CustomDrawer = dynamic(() => import('@/components/molecules/Drawer'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Header = styled('header')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  background: 'transparent',
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    padding: '8px 10px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '5px 8px',
  },
}))

const Logo = styled('div')(({ theme }) => ({
  width: '138px',
  height: '50px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '40px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '80px',
    height: '30px',
  },
}))

const MenuList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0 8px',
  },
}))

const MenuItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '8px 0',
  },
}))

const MenuText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
}))

const menuItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'ARTIST', href: '/artist' },
  { label: 'PRICE', href: '/price' },
  { label: 'GALLERY', href: '/gallery' },
]

function GlobalHeader({ children }) {
  return (
    <div>
      <Header>
        <Link href="/" passHref legacyBehavior>
          <Logo>
            {children}
          </Logo>
        </Link>
        <CustomDrawer>
          <MenuList>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} passHref legacyBehavior>
                <MenuItem component="a">
                  <MenuText 
                    className='text-center custom-header-menu cursor-pointer hover:text-primary' 
                    primary={item.label} 
                  />
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </CustomDrawer>
      </Header>
    </div>
  )
}

GlobalHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(GlobalHeader)