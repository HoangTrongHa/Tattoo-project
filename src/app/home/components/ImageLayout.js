import React from 'react';
import Image from 'next/image';

export default function ImageLayout({ images }) {
  const imageStyles = [
    {
      className: "absolute w-[15%] md:w-[12%] lg:w-[10%] top-[20%] md:top-[25%] lg:top-[30%] left-[5%] md:left-[10%] lg:left-[15%]",
    },
    {
      className: "absolute w-[7%] md:w-[6%] lg:w-[5%] top-[15%] md:top-[20%] lg:top-[25%] left-[35%] md:left-[40%] lg:left-[45%]",
    },
    {
      className: "absolute w-[7%] md:w-[6%] lg:w-[5%] top-[15%] md:top-[20%] lg:top-[25%] right-[35%] md:right-[40%] lg:right-[45%]",
    },
    {
      className: "absolute w-[15%] md:w-[12%] lg:w-[10%] top-[20%] md:top-[25%] lg:top-[30%] right-[5%] md:right-[10%] lg:right-[15%]",
    },
    {
      className: "absolute w-[12%] md:w-[10%] lg:w-[8%] bottom-[25%] md:bottom-[20%] lg:bottom-[15%] left-[15%] md:left-[20%] lg:left-[25%]",
    },
    {
      className: "absolute w-[12%] md:w-[10%] lg:w-[8%] bottom-[25%] md:bottom-[20%] lg:bottom-[15%] right-[15%] md:right-[20%] lg:right-[25%]",
    },
    {
      className: "absolute w-[12%] md:w-[10%] lg:w-[8%] bottom-[10%] md:bottom-[8%] lg:bottom-[5%] left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => {
        const style = imageStyles[index];
        if (!style) return null;

        return (
          <div
            key={index}
            className={style.className}
          >
            <div className="relative w-full pt-[100%]">
              <Image
                src={image}
                alt={`Decorative image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 15vw,
                       (max-width: 1200px) 12vw,
                       10vw"
                className="object-contain"
                priority={index < 2}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
} 