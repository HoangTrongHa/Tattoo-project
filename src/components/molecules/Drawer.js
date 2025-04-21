import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { useTheme, useMediaQuery } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '30px',
  height: '25px',
  cursor: 'pointer',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    width: '25px',
    height: '20px',
  },
  '&:hover': {
    opacity: 0.8,
  },
}))

const DrawerContent = styled('div')(({ theme }) => ({
  backgroundColor: '#455927',
  color: '#fff',
  height: '100%',
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}))

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}))

const DrawerPaper = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#455927',
    width: '100%',
    maxHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '80vh',
    },
  },
}))

export default function CustomDrawer({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <>
      <MenuButton onClick={toggleDrawer(true)}>
        <MenuIcon fontSize={isMobile ? 'medium' : 'large'} />
      </MenuButton>
      <DrawerPaper 
        anchor="top" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        transitionDuration={300}
      >
        <DrawerContent
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <CloseButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize={isMobile ? 'medium' : 'large'} />
          </CloseButton>
          
          {children}
        </DrawerContent>
      </DrawerPaper>
    </>
  )
}

CustomDrawer.propTypes = {
  children: PropTypes.node,
}