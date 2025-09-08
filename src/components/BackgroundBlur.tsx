import React from 'react';

const BackgroundBlur: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <svg
        width="1440"
        height="1081"
        viewBox="0 0 1440 1081"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[50px] top-[323px] w-[1480px] h-[667px]"
      >
        <g opacity="0.2" filter="url(#filter0_f_1_547)">
          <circle cx="1196.25" cy="636.942" r="243.752" fill="#FC4FF6" />
        </g>
        <g opacity="0.2" filter="url(#filter1_f_1_547)">
          <ellipse cx="213.589" cy="600.872" rx="253.589" ry="252.496" fill="#8593E8" />
        </g>
        <rect x="104" y="645" width="252" height="72" fill="url(#pattern0_1_547)" />
        <g opacity="0.2" filter="url(#filter2_f_1_547)">
          <circle cx="689.616" cy="505.229" r="255.229" fill="#5D6EF3" />
        </g>
        <defs>
          <filter
            id="filter0_f_1_547"
            x="752.496"
            y="193.191"
            width="887.504"
            height="887.504"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_547" />
          </filter>
          <filter
            id="filter1_f_1_547"
            x="-240"
            y="148.375"
            width="907.179"
            height="904.993"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_547" />
          </filter>
          <pattern
            id="pattern0_1_547"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1_547"
              transform="matrix(0.000544959 0 0 0.00190736 0 -0.00544959)"
            />
          </pattern>
          <filter
            id="filter2_f_1_547"
            x="184.387"
            y="0"
            width="1010.46"
            height="1010.46"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_547" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundBlur;
