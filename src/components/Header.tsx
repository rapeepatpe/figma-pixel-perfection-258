import React from 'react';
import snapAdLogo from './../assets/snapad_logo.png'

const Header: React.FC = () => {
  return (
    <header className="relative top-0 left-0 right-0 z-10">
      <img
        src={snapAdLogo}
        alt="Company Logo"
        className="w-[249px] h-[72px] absolute left-[104px] top-[47px] max-sm:w-[180px] max-sm:h-[52px] max-sm:left-5 max-sm:top-5"
      />
      
      <nav className="absolute right-[133px] top-[46px] flex items-center gap-8 max-md:top-[100px] right-[75px] max-sm:top-[100px] right-[75px]">
        <button className="text-white text-lg font-normal max-sm:text-base hover:text-[#FF50E4] transition-colors">
          Sign Up
        </button>
        
        <div className="relative">
          <div
            className="w-[210px] h-[55px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#FF50E4] to-[#B60EE9] rounded-[180px] max-sm:w-[150px] max-sm:h-10"
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
