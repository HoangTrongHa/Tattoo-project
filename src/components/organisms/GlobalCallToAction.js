"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material'; // Thêm useMediaQuery
import Button from '../atoms/Button';
import { useTheme } from '@mui/material/styles'; // Thêm useTheme
import bgCallToAction from '@/assets/BgCallToAction.png';
const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: '#0F3412',
  backgroundImage: `url(${bgCallToAction.src || bgCallToAction})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(15, 0),
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(6),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: '"Test Söhne", sans-serif',
  fontWeight: 900,
  fontSize: '82px',
  lineHeight: '0.885em',
  textTransform: 'uppercase',
  textAlign: 'left',
  color: '#FFFFFF',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    fontSize: '60px',
    lineHeight: '1em',
    margin: '0 10px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  },
}));

const CallToAction = ({ title, buttonText }) => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up('md')); // true nếu là PC

  return (
    <StyledSection>
      <Title>
          <span>
            {isPC && (
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {title}
          </span>
      </Title>
      <Button>
        <div className="font-aeonik-bold">{buttonText}</div>
      </Button>
    </StyledSection>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CallToAction; 