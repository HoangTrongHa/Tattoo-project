'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from '@/components/atoms/Image';
import { useTheme, useMediaQuery } from '@mui/material';

// Using existing image from assets
import procedureImage from '@/assets/home/tattoo-artist-working.png';

export default function MedicalProcedure() {
  const [activeStep, setActiveStep] = useState(1);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const stepRefs = useRef([]);

  const steps = [
    {
      number: 1,
      title: 'STEP 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet.',
      image: procedureImage
    },
    {
      number: 2,
      title: 'STEP 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet.',
      image: procedureImage
    },
    {
      number: 3,
      title: 'STEP 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet.',
      image: procedureImage
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.getAttribute('data-step'));
          setActiveStep(stepNumber);
        }
      });
    }, options);

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
    stepRefs.current[stepNumber - 1]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="relative w-full bg-[#E5DFDB] py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="!text-[#455927] text-center text-[28px] sm:text-[40px] lg:text-[56px] font-testSohne-Fett mb-8 sm:mb-12 lg:mb-20">
          STANDARD MEDICAL
          <br className="sm:hidden" /> PROCEDURE
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 my-8 sm:my-12 lg:my-[100px]">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/3 relative h-[250px] sm:h-[350px] lg:h-[500px]">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === step.number ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={step.image.src}
                  alt={`Step ${step.number}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Center - Steps */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center mt-6 lg:mt-0">
            {/* Steps */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
              {steps.map((step) => (
                <div
                  key={step.number}
                  ref={el => stepRefs.current[step.number - 1] = el}
                  data-step={step.number}
                  className={`flex flex-col items-center cursor-pointer relative z-10 ${
                    activeStep === step.number
                      ? ''
                      : ''
                  }`}
                  onClick={() => handleStepClick(step.number)}
                >
                  {/* Step title */}
                  <h3 className={`text-[24px] sm:text-[32px] lg:text-[48px] font-testSohne-Fett text-center transition-all duration-300 ${
                    activeStep === step.number ? '!text-black' : '!text-black/50'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Descriptions */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`transition-all duration-300 ${
                    activeStep === step.number
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute pointer-events-none'
                  }`}
                >
                  <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-aeonik text-[#606060] leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}