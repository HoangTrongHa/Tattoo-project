import tattooArtistWorking from '@/assets/home/tattoo-artist-working.png';
import artistPortrait from '@/assets/home/artist-portrait.png';
import studioInterior from '@/assets/home/studio-interior.png';
import Image from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';

export default function ViewWork({ images }) {
  return (
    <div className="relative z-9 flex flex-col w-full bg-[#E5DFDB]">
      <div className="mx-auto">
        <h2 className="!text-[#455927] mt-[88px] mb-[129px]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Explore a unique artistic space where each piece tells its own story
        </h2>

        <div className="flex flex-col mx-auto">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
            <div className="w-full lg:w-1/2 relative overflow-hidden ">
              <Image 
                src={tattooArtistWorking.src} 
                alt="Tattoo artist at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-[5%] ">
              <div className="flex flex-col gap-3 mx-5 md:mx-0 my-5 md:my-0">
                <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-testSohne-Fett font-extrabold uppercase text-black/22">
                  Story 1
                </h4>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-aeonik leading-[1.4] text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /><br className="hidden lg:block" />
                  Ssectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
            <div className="w-full lg:w-1/2 lg:pl-[5%] order-2 lg:order-1">
              <div className="flex flex-col gap-3 mx-5 md:mx-0 my-5 md:my-0">
                <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-testSohne-Fett font-extrabold uppercase text-black/22">
                  Story 1
                </h4>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-aeonik leading-[1.4] text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /><br className="hidden lg:block" />
                  Ssectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative overflow-hidden  order-1 lg:order-2">
              <Image 
                src={artistPortrait.src} 
                alt="Tattoo artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
            <div className="w-full lg:w-1/2 relative overflow-hidden ">
              <Image 
                src={studioInterior.src} 
                alt="Tattoo studio interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-[5%]">
              <div className="flex flex-col gap-3 mx-5 md:mx-0 my-5 md:my-0">
                <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-testSohne-Fett font-extrabold uppercase text-black/22">
                  Story 1
                </h4>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-aeonik leading-[1.4] text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis augue at mi Lorem ipsum dolor sit amet,
                  <br className="hidden lg:block" /><br className="hidden lg:block" />
                  Ssectetur adipiscing elit.s venenatis augue at mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. sectetur adipis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Work Button */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:my-[107px] mb-12 md:mb-0">
          <Button className="bg-white text-black text-[24px] sm:text-[32px] lg:text-[48px] font-bold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-[25px]">
            <div className="font-aeonik-bold">View All Work</div>
          </Button>
        </div>
      </div>
    </div>
  );
}