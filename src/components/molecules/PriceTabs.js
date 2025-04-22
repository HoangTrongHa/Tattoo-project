'use client';
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-flexContainer': {
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});

const StyledTab = styled(Tab)({
  color: '#808080',
  fontSize: '24px',
  padding: '0 16px',
  minWidth: 'auto',
  fontFamily: 'Aeonik TRIAL BOLD',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  '&.Mui-selected': {
    color: '#FFFFFF',
    transform: 'scale(1.05)',
  },
  '&:hover': {
    color: '#FFFFFF',
    opacity: 0.8,
  },
  '@media (min-width: 640px)': {
    fontSize: '32px',
  },
  '@media (min-width: 1024px)': {
    fontSize: '48px',
  },
});

export default function PriceTabs({ prices, value, onChange }) {
  return (
    <StyledTabs
      value={value}
      onChange={onChange}
      centered
      TabIndicatorProps={{
        style: {
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }
      }}
    >
      {prices.map((price, index) => (
        <StyledTab
          key={index}
          label={price}
          disableRipple
          id={`price-tab-${index}`}
          aria-controls={`price-tabpanel-${index}`}
        />
      ))}
    </StyledTabs>
  );
} 