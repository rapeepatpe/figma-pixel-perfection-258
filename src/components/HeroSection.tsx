import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center relative z-10 pt-[212px] pb-0 px-0 max-sm:pt-[150px] max-sm:pb-0 max-sm:px-5">
      <h1 className="text-6xl font-bold tracking-[1.2px] bg-gradient-to-r from-[#FF3BFF] to-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text max-md:text-5xl max-sm:text-[32px] max-sm:leading-10">
        CREATE SCROLL - STOPPING ADS
      </h1>
      <h2 className="text-white text-6xl font-bold tracking-[1.2px] mb-[60px] max-md:text-5xl max-sm:text-[32px] max-sm:leading-10">
        IN A SNAP
      </h2>
      <p className="text-white text-center text-xl font-normal leading-[33px] tracking-[0.72px] mb-[86px] max-md:text-lg max-md:px-5 max-md:py-0 max-sm:text-base max-sm:leading-6">
        Promote Your Product Get Instant AI-Powered Social Media Ads
      </p>
      <div className="flex justify-center">
        <button className="inline-flex h-[70px] justify-center items-center cursor-pointer bg-black px-8 py-0 rounded-[100px] border-2 border-solid border-[#FF3BFF] max-sm:h-[60px] max-sm:px-6 max-sm:py-0 hover:bg-[#FF3BFF] hover:text-black transition-all duration-300">
          <span className="text-white text-center text-xl font-bold max-sm:text-lg hover:text-black">
            Generate Your Ad Now
          </span>
        </button>
      </div>
      <p className="text-[#CFCFCF] text-base font-normal leading-7 text-center relative z-10 mt-[32px] mb-[72px] mx-0 max-sm:text-sm max-sm:mt-[150px] max-sm:mb-10 max-sm:mx-5">
        No design skills needed - Just plug &amp; post
      </p>

      
    </section>
  );
};

export default HeroSection;
