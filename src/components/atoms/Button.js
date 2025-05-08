"use client";

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import gsap from 'gsap';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  borderRadius: '4px',
  textTransform: 'none',
  fontFamily: '"Aeonik TRIAL", sans-serif',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '16px 32px',
  fontSize: '18px',
  fontWeight: 500,
  letterSpacing: '0.2px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover': {
    backgroundColor: '#F5F5F5',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    '&::before': {
      transform: 'translateX(0)',
    }
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  '&:disabled': {
    backgroundColor: '#e0e0e0',
    color: '#a0a0a0',
    cursor: 'not-allowed',
    boxShadow: 'none',
    opacity: 0.7,
    pointerEvents: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 24px',
    fontSize: '16px',
  }
}));

const PlayIcon = styled('span')({
  display: 'inline-block',
  width: '20px',
  height: '20px',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '10px solid #fff',
    transform: 'translate(-50%, -50%)',
  }
});

const ButtonText = styled('div')({
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  lineHeight: 1.2,
  '& .text-wrapper': {
    display: 'block',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
  },
  '& .text-1': {
    transform: 'translateY(0)',
    visibility: 'visible',
  },
  '& .text-2': {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
  }
});

export default function Button({ children, sx, ...props }) {
  const buttonRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(text1Ref.current, {
        yPercent: -100,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(text2Ref.current, {
        yPercent: -100,
        duration: 0.1,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(text1Ref.current, {
        yPercent: 0,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(text2Ref.current, {
        yPercent: 0,
        duration: 0.1,
        ease: "power2.out"
      });
    }
  };

  return (
    <StyledButton
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={sx}
      {...props}
    >
      <ButtonText>
        <span className="text-wrapper text-1" ref={text1Ref}>{children}</span>
        <span className="text-wrapper text-2" ref={text2Ref}>{children}</span>
      </ButtonText>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

Button.defaultProps = {
  sx: {},
};