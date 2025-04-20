import React, { useRef } from 'react';
import Button from '@/components/atoms/Button';
import { gsap } from 'gsap';
import ImageHandler from '@/components/organisms/ImageHandler';
import Image from 'next/image';

export default function About({ images }) {
  const buttonRef = useRef(null);

  const handleHover = (isHovered) => {
    const chars = buttonRef.current.querySelectorAll('.char');
    
    chars.forEach((char, index) => {
      const tl = gsap.timeline();

      if (isHovered) {
        tl.to(char, {
          yPercent: -150,
          opacity: 0,
          duration: 0.5,
          ease: "expo.out",
          delay: index * 0.05,
        })
        .to(char, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "expo.out",
          delay: index * 0.05,
        });
      } else {
        gsap.to(char, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "expo.out",
        });
      }
    });
  };

  return (
    <div className="relative z-9 flex flex-col items-center justify-center w-full bg-[#E5DFDB] text-white">
      {/* Decorative Images */}
      <div className="absolute top-0 left-0">
        <Image 
          src="/images/about-top-left.png" 
          alt="Decorative" 
          width={200} 
          height={200}
        />
      </div>
      <div className="absolute top-0 right-0">
        <Image 
          src="/images/about-top-right.png" 
          alt="Decorative" 
          width={200} 
          height={200}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image 
          src="/images/about-bottom-left.png" 
          alt="Decorative" 
          width={200} 
          height={200}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image 
          src="/images/about-bottom-right.png" 
          alt="Decorative" 
          width={200} 
          height={200}
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="!text-[#455927] mt-[315px] mb-8">ABOUT THE TEAM</h2>
        
        <div className="relative w-full max-w-[1440px]">
          <div className="flex justify-center">
            <iframe
              width="928"
              height="615"
              src="https://www.youtube.com/embed/jyIcTJiEl98?si=RKwXDgI4sYo3ilNt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          
          <div className="absolute -bottom-[100px] left-0 right-0">
            <h2 className="!text-[#455927] text-[96px] leading-[1.1] uppercase text-center font-test-sohne font-black w-full">
              Lorem ipsum dolor<br />
              sit amet, consectetur<br />
              adipiscing elit.
            </h2>
            
            <div className="max-w-[847px] !text-[#606060] font-aeonik text-center mx-auto mt-8">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
              </span>
            </div>
          </div>
        </div>

        <div className="z-7 mx-auto mt-[300px] mb-[229px]">
          <Button
            animate={true}
            sx={{ px: '25px', py: '16px', fontSize: '30px' }}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            ref={buttonRef}
          >
            <div className="font-aeonik-bold">
              {'About\u00A0Us'.split('').map((char, index) => (
                <span
                  key={index}
                  className="char inline-block"
                >
                  {char}
                </span>
              ))}
            </div>
          </Button>
        </div>
      </div>

      <ImageHandler images={images} />
    </div>
  );
}
