import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative z-10 mt-[-237px] pl-0 pr-[817px] py-0 max-md:mt-[-150px] max-md:pl-0 max-md:pr-[50px] max-md:py-0 max-sm:pt-[50px] max-sm:pb-0 max-sm:px-5">
      <div className="w-[442px] h-[237px] border relative bg-[#FF3BFF] ml-auto rounded-[20px] border-solid border-[#FF3BFF] max-md:w-[350px] max-md:h-[200px] max-sm:w-full max-sm:max-w-[300px] max-sm:h-[180px] max-sm:mx-auto max-sm:my-0 cursor-pointer hover:bg-[#E635E6] transition-colors duration-300">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ecaabd9d1ee39c40f66939b54cc1841cc777cf23?width=228"
          alt="Play Button"
          className="w-[114px] h-[114px] absolute -translate-x-2/4 left-2/4 top-[39px] max-sm:w-20 max-sm:h-20 max-sm:top-[30px] hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-[#CFCFCF] text-center text-xl font-bold leading-7 absolute -translate-x-2/4 w-[281px] left-2/4 bottom-[41px] max-sm:text-base max-sm:w-[200px] max-sm:bottom-5">
          Watch How SnapAd Works
        </h3>
      </div>
    </section>
  );
};

export default VideoSection;
