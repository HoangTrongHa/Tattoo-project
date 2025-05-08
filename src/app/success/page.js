'use client'
import React, { useState, useEffect } from 'react';
import GlobalBanner from '@/components/organisms/GlobalBanner';


const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#fff]">
      {/* Hero Section */}
      <GlobalBanner
        title1="Thank you for your trust!"
        title2="Your artistic journey starts here."
        hideScrollText
      />
    </div>
  );
};

export default SuccessPage; 