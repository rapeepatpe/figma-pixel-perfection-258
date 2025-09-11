import React from 'react';
import Header from '@/components/Header';
import { SocialLoginButtons } from '@/components/signup/SocialLoginButtons';
import { SignUpForm } from '@/components/signup/SignUpForm';
import { Footer } from '@/components/signup/Footer';
import BackgroundBlur from '@/components/BackgroundBlur';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const handleTermsClick = () => {
    // TODO: Navigate to terms of service
    console.log('Terms of Service clicked');
  };

  const handlePrivacyClick = () => {
    // TODO: Navigate to privacy policy
    console.log('Privacy Policy clicked');
  };

  const handleLoginClick = () => {
    // TODO: Navigate to login page
    console.log('Login clicked');
  };


  return (
    <div className="w-[100%] min-h-screen flex flex-col overflow-x-hidden bg-black">
      <Header />
      <div className="w-[100%] min-h-screen relative ">
        <BackgroundBlur />
        <div className=" items-stretch mt-[45vh] max-sm:mt-[18vh]">
          <div className=" flex w-[979px] max-w-full justify-self-center flex-col max-sm:mb-[10vh]">
            <main className="z-40 flex flex-col justify-center items-center mt-[-444px] gap-2.5 overflow-hidden px-24 py-[202px] max-md:mt-[-200px] max-md:px-5 max-md:py-[100px]">
              <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <header className="w-full text-center max-md:max-w-full">
                  <h1 className="text-white text-4xl mb-[16px] font-medium leading-none max-md:max-w-full max-sm:text-2xl">
                    Create Your Account
                  </h1>
                  <p className="text-white text-base font-normal leading-normal mt-2 max-md:max-w-full">
                    Enter your personal data to create your account.
                  </p>
                </header>

                <div className="flex w-full flex-col items-stretch self-stretch text-base leading-normal mt-14 max-md:max-w-full max-md:mt-10">
                  <SocialLoginButtons />
          
                  <div className="flex items-center justify-center mt-[24px] gap-3.5 self-stretch max-sm:gap-2.5">
                    <div className="w-[520px] h-px bg-[#686677] max-sm:w-[calc(50%_-_20px)]" />
                    <span className="w-[17px] justify-self-center text-[#CBCAD7] text-center text-xs font-normal">
                      Or
                    </span>
                    <div className="w-[520px] h-px bg-[#686677] max-sm:w-[calc(50%_-_20px)]" />
                  </div>
                  <SignUpForm />
                  <p className="text-white text-sm font-light leading-[1.5] text-center mt-8 max-md:max-w-full">
                    By signing up, you agree to our{' '}
                    <button
                      onClick={handleTermsClick}
                      className="text-[rgba(255,28,247,1)] hover:underline"
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      onClick={handlePrivacyClick}
                      className="text-[rgba(139,99,255,1)] hover:underline"
                    >
                      Privacy Policy
                    </button>
                    .
                  </p>

                  <p className="text-white font-normal text-center mt-8 max-md:max-w-full">
                    Already have an account?{' '}
                    <Link to="/login">
                      <button
                        onClick={handleLoginClick}
                        className="font-semibold hover:underline"
                      >
                        Log in
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
