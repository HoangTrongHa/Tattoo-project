'use client'
import Button from '@/components/atoms/Button';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#E5DFDB] text-white">
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
        >
        </iframe>
        <div className="max-w-[1227px] relative bottom-[50px]">
          <h2 className="!text-[#455927]">Lorem ipsum dolor <br/> sit amet, consectetur <br/> adipiscing elit.</h2>
        </div>
        <div className="max-w-[847px] !text-[#606060] font-aeonik text-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis 
          </span>
        </div>
      </div>
      <div className='mx-auto mt-[50px] mb-[229px]'>
        <Button sx={{ mt: '80px', px: '25px', py: '16px', fontSize: '30px' }}>
          <div className="font-aeonik-bold">About Us</div>
        </Button>
      </div>
    </div>
  )
}