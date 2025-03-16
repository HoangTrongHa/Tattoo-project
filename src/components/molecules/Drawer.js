import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const MenuButton = styled(IconButton)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '30px',
  height: '25px',
  cursor: 'pointer',
  color: '#fff', // Set color to white
})

const DrawerContent = styled('div')({
  backgroundColor: '#455927', // Set background color
  color: '#fff', // Set text color to white
  height: '100%', // Ensure it takes full height
  padding: '20px', // Add some padding
})

const CloseButton = styled(IconButton)({
  color: '#fff', // Set color to white
  position: 'absolute',
  top: '10px',
  right: '10px',
})

export default function CustomDrawer({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <>
      <MenuButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </MenuButton>
      <MuiDrawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <CloseButton>
            <CloseIcon />
          </CloseButton>
          
          {children}
        </DrawerContent>
      </MuiDrawer>
    </>
  )
}

CustomDrawer.propTypes = {
  children: PropTypes.node,
}