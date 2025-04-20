import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(() => ({
  '&.MuiButton-contained': {
    backgroundColor: 'var(--button-default-background)',
    color: 'var(--button-default-color)',
  },
  '&.MuiButton-colorSuccess': {
    backgroundColor: 'var(--button-default-background-success)',
    color: 'var(--foreground)',
  },
}));

export default function CustomButton({
  children,
  color = 'primary',
  onClick,
  onHover,
  variant = 'contained',
  animate = false,
  ...props
}) {
  const handleMouseEnter = () => {
    if (onHover) {
      onHover(true); // Trigger hover event
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      onHover(false); // Trigger hover leave event
    }
  };

  return (
    <StyledButton
      className={`${animate ? 'buttonAnimate' : ''}`}
      variant={variant}
      color={color}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func, // Added hover event prop
  variant: PropTypes.oneOf(['contained', 'outlined']),
  animate: PropTypes.bool,
};

CustomButton.defaultProps = {
  onClick: () => {},
  onHover: null, // Default hover event is null
  variant: 'contained',
  animate: false,
};