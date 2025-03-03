import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'var(--default-color)',
}))

export default function CustomIcon({ icon: IconComponent, onClick, ...props }) {
  return (
    <StyledIconButton onClick={onClick} {...props}>
      <IconComponent />
    </StyledIconButton>
  )
}

CustomIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
}

CustomIcon.defaultProps = {
  onClick: () => {},
}