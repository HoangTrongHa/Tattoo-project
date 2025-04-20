import React, { useRef } from 'react';
import Button from '@/components/atoms/Button';
import { gsap } from 'gsap';
import ImageHandler from '@/components/organisms/ImageHandler';

export default function About({ images }) {
  const buttonRef = useRef(null);

  const handleHover = (isHovered) => {
    const chars = buttonRef.current.querySelectorAll('.char');
    const replacedChars = buttonRef.current.querySelectorAll('.replaced-char');

    chars.forEach((char, index) => {
      const tl = gsap.timeline();

      if (isHovered) {
        // Khi hover vào, ký tự sẽ di chuyển lên trên và biến mất
        tl.to(char, {
          yPercent: -150, // Di chuyển lên trên
          opacity: 0, // Biến mất
          duration: 0.5,
          ease: "expo.out",
          delay: index * 0.05, // Độ trễ cho mỗi ký tự
        })
        .to(char, {
          yPercent: 0, // Xuất hiện lại từ dưới lên và trở lại vị trí ban đầu
          opacity: 1, // Hiển thị lại ký tự
          duration: 0.5,
          ease: "expo.out",
          delay: index * 0.05, // Độ trễ cho mỗi ký tự

        });
      } else {
        // Khi không hover vào, ký tự sẽ quay lại vị trí ban đầu và hiển thị lại
        gsap.to(char, {
          yPercent: 0, // Quay lại vị trí ban đầu
          opacity: 1, // Hiển thị lại ký tự
          duration: 0.5,
          ease: "expo.out",
        });
      }
    });
  };

  return (
    <div className="relative z-9 flex flex-col items-center justify-center w-full bg-[#E5DFDB] text-white">
      <h2 className="!text-[#455927] mt-[315px]">ABOUT THE TEAM</h2>
      <div className="flex flex-wrap justify-center mt-8">
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
        <div className="max-w-[1227px] relative bottom-[50px]">
          <h2 className="!text-[#455927] text-center">Lorem ipsum dolor <br /> sit amet, consectetur <br /> adipiscing elit.</h2>
        </div>
        <div className="max-w-[847px] !text-[#606060] font-aeonik text-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
          </span>
        </div>
      </div>
      <div className="z-7 mx-auto mt-[50px] mb-[229px]">
        <Button
          animate={true}
          sx={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}
          onMouseEnter={() => handleHover(true)} // Hover vào button
          onMouseLeave={() => handleHover(false)} // Rời khỏi button
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

      <ImageHandler images={images} />
    </div>
  );
}
