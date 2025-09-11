import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  backgroundColor: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  backgroundColor,
  isPopular = false 
}) => {
  return (
    <article className={`w-[280px] h-[400px] border relative ${backgroundColor} pt-[29px] pb-0 px-0 rounded-[20px] border-solid border-[#FF3BFF] max-md:w-[260px] max-sm:w-full max-sm:max-w-[300px] hover:scale-105 transition-transform duration-300`}>
      <h3 className="text-[32px] font-bold leading-7 text-center bg-clip-text mb-[43px] max-sm:text-2xl max-sm:mb-5">
        {title}
      </h3>
      
      <div className="text-[#FFD6FB] text-[50px] font-bold leading-7 text-center mb-[31px] max-sm:text-4xl max-sm:mb-5">
        {price}
      </div>
      
      {period && (
        <div className="text-[#FEFEFF] text-lg font-normal leading-7 text-center mb-[31px] max-sm:text-base max-sm:mb-5">
          {period}
        </div>
      )}
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-[21px] px-[19px]">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[37px] h-[37px] flex-shrink-0">
              <path d="M18.8701 9.71973C17.0901 9.71973 15.35 10.2476 13.87 11.2365C12.3899 12.2254 11.2364 13.631 10.5552 15.2756C9.87402 16.9201 9.69579 18.7297 10.0431 20.4755C10.3903 22.2214 11.2475 23.825 12.5062 25.0837C13.7648 26.3424 15.3685 27.1995 17.1143 27.5468C18.8601 27.8941 20.6697 27.7158 22.3143 27.0346C23.9588 26.3535 25.3644 25.1999 26.3533 23.7199C27.3423 22.2398 27.8701 20.4998 27.8701 18.7197C27.8701 16.3328 26.9219 14.0436 25.2341 12.3558C23.5463 10.6679 21.2571 9.71973 18.8701 9.71973ZM23.1001 16.1797L18.6601 22.3397C18.5279 22.5183 18.3349 22.6423 18.1175 22.6883C17.9001 22.7344 17.6734 22.6993 17.4801 22.5897L14.9301 21.0997C14.7233 20.9751 14.5744 20.7734 14.5162 20.5389C14.4581 20.3045 14.4955 20.0566 14.6201 19.8497C14.7448 19.6429 14.9465 19.494 15.1809 19.4358C15.4153 19.3777 15.6633 19.4151 15.8701 19.5397L17.6801 20.6197L21.6801 15.1297C21.8286 14.981 22.0244 14.8889 22.2336 14.8694C22.4429 14.8499 22.6523 14.9043 22.8257 15.023C22.999 15.1418 23.1254 15.3174 23.1828 15.5196C23.2403 15.7217 23.2252 15.9376 23.1401 16.1297L23.1001 16.1797Z" fill={isPopular ? "#FF1CF7" : "url(#paint0_linear_check)"}/>
              <defs>
                <linearGradient id="paint0_linear_check" x1="9.87012" y1="18.7197" x2="27.8701" y2="18.7197" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0673397" stopColor="#FF50E4"/>
                  <stop offset="0.509672" stopColor="#FF50E4"/>
                  <stop offset="1" stopColor="#B60EE9"/>
                </linearGradient>
              </defs>
            </svg>
            <div className={`${title === 'One - Time Pack' || title === 'Standard Plan' || title === 'Premium Plan' ? 'text-white font-bold' : 'text-[#FEFEFF] font-normal'} text-xl leading-7 max-sm:text-base`}>
              {feature}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-[189px] h-[41px] absolute cursor-pointer rounded-md left-[45px] bottom-[11px] max-sm:w-[150px] max-sm:h-[35px] max-sm:-translate-x-2/4 max-sm:left-2/4 max-sm:bottom-[15px] bg-gradient-to-r from-[#FF50E4] to-[#B60EE9] hover:from-[#E635E6] hover:to-[#A00DD8] transition-all duration-300">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/932273146cf9963e15becbe7bb5c52ac6dab7727?width=378"
          alt="Get Started"
          className="w-full h-full object-cover rounded-md"
        />
      </button>
    </article>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: "$0",
      features: [
        "5 ad generations\n(image or video)",
        "Basic Templates",
        "Watermark\nincluded"
      ],
      backgroundColor: "bg-[#1C1C1B]"
    },
    {
      title: "One - Time Pack",
      price: "$3.99",
      period: "/month",
      features: [
        "1 ad generation",
        "No watermark",
        "Full resolution export"
      ],
      backgroundColor: "bg-[#131826]"
    },
    {
      title: "Standard Plan",
      price: "$9.99",
      period: "/month",
      features: [
        "100 AI prompt descriptions",
        "Priority rendering"
      ],
      backgroundColor: "bg-[#110523]"
    },
    {
      title: "Premium Plan",
      price: "$99.99",
      period: "/year",
      features: [
        "1200 AI prompt descriptions",
        "Advanced brand styles"
      ],
      backgroundColor: "bg-gradient-to-b from-[#1a0a2e] to-[#16213e]",
      isPopular: true
    }
  ];

  return (
    <section className="relative z-10 pt-[467px] pb-0 px-[142px] max-md:pt-[350px] max-md:pb-0 max-md:px-[50px] max-sm:pt-[250px] max-sm:pb-0 max-sm:px-5">
      <h2 className="text-4xl font-bold bg-clip-text mb-[69px] max-sm:text-[28px] max-sm:text-center max-sm:mb-10">
        Pricing Plans
      </h2>
      
      <div className="flex gap-[15px] mb-[222px] max-md:flex-wrap max-md:gap-5 max-md:justify-center max-sm:flex-col max-sm:items-center max-sm:gap-[30px]">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            backgroundColor={plan.backgroundColor}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
