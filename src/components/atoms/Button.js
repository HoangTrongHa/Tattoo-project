import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const StyledButton = styled(Button)(() => ({
  '&.MuiButton-contained': {
    backgroundColor: 'var(--button-default-background)',
    color: 'var(--button-default-color)',
  },
  '&.MuiButton-colorSuccess ': {
    backgroundColor: 'var(--button-default-background-success)',
    color: 'var(--foreground)',
  },
}))

export default function CustomButton({ children, color = 'primary', onClick, variant = 'contained', ...props }) {
  return (
    <StyledButton variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined']),
}

CustomButton.defaultProps = {
  onClick: () => {},
  variant: 'contained',
}