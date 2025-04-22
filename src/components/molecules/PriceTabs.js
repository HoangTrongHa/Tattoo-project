'use client';
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled(Tab)({
  color: '#808080',
  fontSize: '24px',
  padding: '0 16px',
  minWidth: 'auto',
  fontFamily: 'Aeonik TRIAL BOLD',
  '&.Mui-selected': {
    color: '#FFFFFF',
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
      sx={{
        '& .MuiTabs-flexContainer': {
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }
      }}
    >
      {prices.map((price, index) => (
        <StyledTab
          key={index}
          label={price}
          disableRipple
        />
      ))}
    </StyledTabs>
  );
} 