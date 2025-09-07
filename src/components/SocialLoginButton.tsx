import React from 'react';

interface SocialLoginButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, onClick }) => {
  const getIcon = () => {
    if (provider === 'google') {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="url(#paint0_linear_google)"
          />
          <path
            d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
            fill="url(#paint1_linear_google)"
          />
          <path
            d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.0011 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
            fill="url(#paint2_linear_google)"
          />
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="url(#paint3_linear_google)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_google"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0673397" stopColor="#FF50E4" />
              <stop offset="0.509672" stopColor="#FF50E4" />
              <stop offset="1" stopColor="#B60EE9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_google"
              x1="3.15302"
              y1="5.8775"
              x2="18.809"
              y2="5.8775"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0673397" stopColor="#FF50E4" />
              <stop offset="0.509672" stopColor="#FF50E4" />
              <stop offset="1" stopColor="#B60EE9" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_google"
              x1="3.09747"
              y1="18.0135"
              x2="18.7045"
              y2="18.0135"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0673397" stopColor="#FF50E4" />
              <stop offset="0.509672" stopColor="#FF50E4" />
              <stop offset="1" stopColor="#B60EE9" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_google"
              x1="12"
              y1="14.7071"
              x2="22"
              y2="14.7071"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0673397" stopColor="#FF50E4" />
              <stop offset="0.509672" stopColor="#FF50E4" />
              <stop offset="1" stopColor="#B60EE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1576 13.6115L12.8336 9.39067H8.6112V6.65662C8.6112 5.49913 9.204 4.38156 11.0864 4.38156H13V0.789371C13 0.789371 11.2632 0.5 9.5992 0.5C6.1256 0.5 3.8584 2.51562 3.8584 6.17766V9.39067H0V13.6115H3.8584V23.5H8.6112V13.6115H12.1576Z"
            fill="url(#paint0_linear_facebook)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_facebook"
              x1="0"
              y1="12"
              x2="13"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0673397" stopColor="#FF50E4" />
              <stop offset="0.509672" stopColor="#FF50E4" />
              <stop offset="1" stopColor="#B60EE9" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  };

  const getText = () => {
    return provider === 'google' ? 'Login with Google' : 'Login with Facebook';
  };

  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2.5 self-stretch bg-[#100F14] px-5 py-[15.5px] rounded-md max-sm:px-4 max-sm:py-3 hover:bg-[#1a1920] transition-colors"
    >
      <div className="flex items-center gap-10 max-sm:gap-5">
        <div>{getIcon()}</div>
        <span className="text-white text-center text-base font-normal leading-[25px] max-sm:text-sm">
          {getText()}
        </span>
      </div>
    </button>
  );
};

export default SocialLoginButton;
