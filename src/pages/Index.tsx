import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlatformSection from '@/components/PlatformSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VideoSection from '@/components/VideoSection';
import PricingSection from '@/components/PricingSection';
import {Footer} from '@/components/signup/Footer';

const Index = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-black">
      {/* Background Elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/50bf3f90895cee47f45a290d3a05bba461f78575?width=4988"
        alt="Background Pattern"
        className="w-[2494px] h-[1541px] rotate-[15deg] absolute left-[-773px] top-[-120px] z-0"
      />
      
      {/* Blur Background 1 */}
      <div 
        className="absolute left-[-316px] top-[489px] z-[1] w-[2182px] h-[930px]"
        dangerouslySetInnerHTML={{
          __html: `
            <svg width="1440" height="1380" viewBox="0 0 1440 1380" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2182px; height: 930px;">
              <g opacity="0.2" filter="url(#filter0_f_1_364)">
                <circle cx="1506.93" cy="820.572" r="359.428" fill="#FC4FF6"></circle>
              </g>
              <g opacity="0.2" filter="url(#filter1_f_1_364)">
                <ellipse cx="57.9341" cy="767.383" rx="373.934" ry="372.322" fill="#8593E8"></ellipse>
              </g>
              <g opacity="0.2" filter="url(#filter2_f_1_364)">
                <circle cx="759.866" cy="626.352" r="376.352" fill="#5D6EF3"></circle>
              </g>
              <defs>
                <filter id="filter0_f_1_364" x="947.501" y="261.144" width="1118.86" height="1118.86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_364"></feGaussianBlur>
                </filter>
                <filter id="filter1_f_1_364" x="-516" y="195.061" width="1147.87" height="1144.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_364"></feGaussianBlur>
                </filter>
                <filter id="filter2_f_1_364" x="133.515" y="0" width="1252.7" height="1252.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_364"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          `
        }}
      />
      
      {/* Blur Background 2 */}
      <div 
        className="absolute left-[-592px] top-[1687px] z-[1] w-[2182px] h-[930px]"
        dangerouslySetInnerHTML={{
          __html: `
            <svg width="1440" height="806" viewBox="0 0 1440 806" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2182px; height: 930px;">
              <g opacity="0.2" filter="url(#filter0_f_1_368)">
                <circle cx="1230.93" cy="820.572" r="359.428" fill="#FC4FF6"></circle>
              </g>
              <g opacity="0.2" filter="url(#filter1_f_1_368)">
                <ellipse cx="-218.066" cy="767.383" rx="373.934" ry="372.322" fill="#8593E8"></ellipse>
              </g>
              <g opacity="0.2" filter="url(#filter2_f_1_368)">
                <circle cx="483.866" cy="626.352" r="376.352" fill="#5D6EF3"></circle>
              </g>
              <defs>
                <filter id="filter0_f_1_368" x="671.501" y="261.144" width="1118.86" height="1118.86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_368"></feGaussianBlur>
                </filter>
                <filter id="filter1_f_1_368" x="-792" y="195.061" width="1147.87" height="1144.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_368"></feGaussianBlur>
                </filter>
                <filter id="filter2_f_1_368" x="-142.485" y="0" width="1252.7" height="1252.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_368"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          `
        }}
      />

      {/* Main Content */}
      <main>
        <Header />
        <HeroSection />
        <PlatformSection />
        <HowItWorksSection />
        <VideoSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
