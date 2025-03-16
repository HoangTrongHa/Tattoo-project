'use client'
import React, { useState, useRef } from 'react'
import Button from '@/components/atoms/Button'
import MoleculesCard from '@/components/molecules/Card'
import Fineline from '@/assets/bookings/step1/fineline.png'
import Flower from '@/assets/bookings/step1/Flower.png'
import MixGraphic from '@/assets/bookings/step1/MixGraphic.png'
import Realistic from '@/assets/bookings/step1/Realistic.png'
import Other from '@/assets/bookings/step1/Other.png'
import Temp1 from '@/assets/bookings/step1/tattotemp/temp1.png'
import Temp2 from '@/assets/bookings/step1/tattotemp/temp2.png'
import Temp3 from '@/assets/bookings/step1/tattotemp/temp3.png'
import { styled } from '@mui/material/styles'
import Carousel from '@/components/molecules/Carousel' // Import Carousel tự viết
import { useRouter } from 'next/navigation';

// Nếu cần custom thêm MoleculesCard, bạn có thể tạo MoleculesCardCustom tại đây
const MoleculesCardCustom = styled(MoleculesCard)({
  // Có thể override thêm style nếu cần
})

export default function BookingStep1() {
  // State lưu chỉ số của card active
  const [activeIndex, setActiveIndex] = useState(null)
  const section2Ref = useRef(null)

  // Mảng dữ liệu card
  const cardItems = [
    {
      image: Fineline,
      title: 'Fineline',
    },
    {
      image: Flower,
      title: 'Flower',
    },
    {
      image: MixGraphic,
      title: 'Realistic',
    },
    {
      image: Realistic,
      title: 'Mix Graphic',
    },
    {
      image: Other,
      title: 'Other',
    },
  ]

  const carouselImages = [
    Temp1,
    Temp2,
    Temp3,
  ]
  const router = useRouter();
  const goToStep2 = () => {
    router.push('/booking/step2');
  };
  // Hàm để cuộn xuống section2
  const scrollToSection2 = () => {
    const targetPosition = section2Ref.current?.offsetTop || 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // thời gian chuyển động (ms)
    let start = null;
    
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = easeInOutCubic(Math.min(progress / duration, 1));
      window.scrollTo(0, startPosition + distance * easedProgress);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#455927] py-[168px]">
        <div className="w-full text-center mx-auto">
          <h2 className="uppercase max-w-[1438px] mx-auto">
            Ready to ink your story? <br /> Book your tattoo session now!
          </h2>
          <p className="max-w-[847px] mx-auto mt-[40px]">
            Ready to transform your vision into a masterpiece? Start your journey
            with us and let your skin be the canvas for art that lasts a lifetime.
            Book your tattoo session now and let the magic begin!
          </p>
          <div className="mt-[40px]">
            <Button 

              sx={{ px: '25px', py: '16px', fontSize: '30px' }}
              onClick={scrollToSection2}
            >
              <div className='font-aeonik-bold font-extrabold capitalize'>
                Start!
              </div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Section 2 */}
      <div ref={section2Ref} className="bg-[#E5DFDB] py-[120px]">
        <div className="container text-center mx-auto">
          <h2 className="!text-[#455927] max-w-[1227px] mx-auto">
            Which styles suit your taste?
          </h2>
          <p className="!text-[#606060] max-w-[975px] mx-auto mt-[40px]">
            Friends! Of course we are generalizing a little, this form is just a
            #speeddating. Rest assured, we will find the perfect artist with you
            to make your tattoo unique. But first we need a rough idea of ​​what you
            want to do.
          </p>
          <div className="mt-[60px] flex justify-center">
            {cardItems.map((item, index) => (
              <MoleculesCardCustom
                key={index}
                image={item.image}
                title={item.title}
                onActionClick={() => {
                  console.log(`Card ${item.title} clicked`)
                  // Cập nhật activeIndex (chỉ active 1 card duy nhất)
                  setActiveIndex(index)
                }}
                // Truyền prop active dựa theo chỉ số của card
                active={activeIndex === index}
                childrenContent={item.title}
              />
            ))}
          </div>
        </div>
        {activeIndex !== null && (
          <>
            <div className="mt-[64px] flex justify-center">
              <Button color="success" onClick={goToStep2}>
                Next Step
              </Button>
            </div>
          </>
        )}
        <div className="mt-[64px]">
          <Carousel 
            items={carouselImages} 
          />
        </div>
      </div>
    </>
  )
}