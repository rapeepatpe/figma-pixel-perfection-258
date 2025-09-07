import React, { useState } from 'react';
import InputField from './InputField';
import SocialLoginButton from './SocialLoginButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, agreeToTerms });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  return (
    <main className="flex w-[532px] flex-col items-start gap-[70px] absolute -translate-x-2/4 left-2/4 top-[243px] max-md:w-[90%] max-md:max-w-[532px] max-md:-translate-x-2/4 max-md:left-2/4 max-sm:w-[95%] max-sm:px-5 max-sm:py-0 max-sm:top-[180px]">
      <section className="flex flex-col items-start gap-[50px]">
        <header className="flex w-[505px] flex-col items-start gap-4 max-md:w-full">
          <h1 className="self-stretch text-4xl font-bold leading-[41px] bg-clip-text text-white max-md:text-[32px] max-md:leading-9 max-sm:text-[28px] max-sm:leading-8">
            Welcome back
          </h1>
          <p className="self-stretch text-[#8692A6] text-base font-normal leading-[25px] tracking-[0.08px] max-sm:text-sm max-sm:leading-5">
            We're happy to see you again.
          </p>
        </header>

        <div className="flex flex-col items-start gap-6 self-stretch">
          <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <InputField
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={setEmail}
                required
              />
              
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={setPassword}
                showPasswordToggle
              />
            </div>

            <div className="flex items-center gap-3.5 self-stretch">
              <button
                type="button"
                onClick={() => setAgreeToTerms(!agreeToTerms)}
                className="flex items-center justify-center w-5 h-5"
                aria-label="Agree to terms and conditions"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.66666 4.66669C1.66666 3.28598 2.78594 2.16669 4.16666 2.16669H15.8333C17.214 2.16669 18.3333 3.28598 18.3333 4.66669V16.3334C18.3333 17.7141 17.214 18.8334 15.8333 18.8334H4.16666C2.78594 18.8334 1.66666 17.7141 1.66666 16.3334V4.66669Z"
                    fill={agreeToTerms ? "#7A5AF8" : "transparent"}
                    stroke="#7A5AF8"
                    strokeWidth="1"
                  />
                  {agreeToTerms && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.0952 7.41083C14.4206 7.73626 14.4206 8.2639 14.0952 8.58934L8.92259 14.006C8.59715 14.3314 8.06951 14.3314 7.74408 14.006L5.24408 11.506C4.91864 11.1806 4.91864 10.6529 5.24408 10.3275C5.56951 10.0021 6.09715 10.0021 6.42259 10.3275L8.33333 12.2382L12.9167 7.41083C13.2421 7.08539 13.7697 7.08539 14.0952 7.41083Z"
                      fill="white"
                    />
                  )}
                </svg>
              </button>
              <label className="text-[#CBCAD7] text-base font-normal leading-[25px] max-sm:text-sm cursor-pointer">
                I agree to Terms & Conditions
              </label>
            </div>
          </form>

          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-[505px] justify-center items-center gap-2.5 px-5 py-[15.5px] rounded-md bg-gradient-to-r from-[#FF50E4] to-[#B60EE9] hover:from-[#FF50E4]/90 hover:to-[#B60EE9]/90 transition-all max-md:w-full max-sm:px-4 max-sm:py-3"
              >
                <span className="text-white text-base font-normal max-sm:text-sm">
                  Login
                </span>
              </button>

              <div className="flex items-center gap-3.5 self-stretch max-sm:gap-2.5">
                <div className="w-[230px] h-px bg-[#686677] max-sm:w-[calc(50%_-_20px)]" />
                <span className="w-[17px] text-[#CBCAD7] text-center text-xs font-normal">
                  Or
                </span>
                <div className="w-[230px] h-px bg-[#686677] max-sm:w-[calc(50%_-_20px)]" />
              </div>

              <SocialLoginButton provider="google" onClick={handleGoogleLogin} />
              <SocialLoginButton provider="facebook" onClick={handleFacebookLogin} />
            </div>

            <div className="flex items-start gap-2.5 self-stretch p-0.5">
              <p className="text-[#9794AA] text-center text-base font-normal">
                Don't have an account?{' '}
                <button className="text-white underline hover:text-[#FF50E4] transition-colors">
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
