import React from 'react';
import snapAdLogo from './../assets/snapad_logo.png'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex mt-[3vh] flex-row flex-wrap w-full h-auto gap-[45vw] justify-around max-lg:justify-center max-lg:gap-[6vw] max-md:justify-center max-md:gap-[6vw] max-sm:justify-center max-sm:gap-[6vw]">
      <img
        src={snapAdLogo}
        alt="Company Logo"
        className="w-[249px] h-[72px] max-sm:justify-self-center max-sm:w-[180px] max-sm:h-[52px] max-sm:top-5"
      />
      
      <nav className="flex items-center gap-8">
      <Link to="/signup">
        <button className="text-white text-lg font-normal max-sm:text-base hover:text-[#FF50E4] transition-colors">
          Sign Up
        </button>
      </Link>
        
        <div className="relative">
          <div
            className="w-[210px] h-[55px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#FF50E4] to-[#B60EE9] rounded-[180px] max-sm:w-[150px] max-sm:h-10"
          />
          <Link to="/login">
          <button className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold max-sm:text-base hover:bg-white/10 rounded-[180px] transition-colors">
            Login
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
