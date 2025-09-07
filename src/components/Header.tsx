import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ef97f5957714bee8ce52aa384b91413a63fda431?width=499"
        alt="Company Logo"
        className="w-[249px] h-[72px] absolute left-[104px] top-[47px] max-sm:w-[180px] max-sm:h-[52px] max-sm:left-5 max-sm:top-5"
      />
      
      <nav className="absolute right-[133px] top-[46px] flex items-center gap-8 max-md:right-5 max-sm:right-5 max-sm:top-5">
        <button className="text-white text-lg font-normal max-sm:text-base hover:text-[#FF50E4] transition-colors">
          Sign Up
        </button>
        
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2dde7a0db776d6bc6b7bd65876cb80c82a20dc26?width=420"
            alt=""
            className="w-[210px] h-[55px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[180px] max-sm:w-[150px] max-sm:h-10"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold max-sm:text-base hover:bg-white/10 rounded-[180px] transition-colors">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
