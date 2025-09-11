import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // TODO: Implement actual sign up logic
      console.log('Sign up data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 pr-2 pl-2 max-md:max-w-full z-1">
      <div className="flex w-full gap-4 flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
          <label htmlFor="firstName" className="text-white font-medium">
            First Name
          </label>
          <div className="relative mt-2.5">
            <input
              id="firstName"
              type="text"
              {...register('firstName')}
              maxLength={20}
              placeholder="eg. John"
              className="bg-[rgba(255,255,255,0.1)] w-full text-white font-normal px-5 py-4 rounded-xl placeholder:text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
          <label htmlFor="lastName" className="text-white font-medium">
            Last Name
          </label>
          <div className="relative mt-2.5">
            <input
              id="lastName"
              type="text"
              {...register('lastName')}
              maxLength={20}
              placeholder="eg. Francisco"
              className="bg-[rgba(255,255,255,0.1)] w-full text-white font-normal px-5 py-4 rounded-xl placeholder:text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 mt-6 max-md:max-w-full">
        <div className="flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
          <label htmlFor="email" className="text-white font-medium">
            Email
          </label>
          <div className="relative mt-2.5">
            <input
              id="email"
              type="email"
              {...register('email')}
              maxLength={20}
              placeholder="eg. johnfrans@gmail.com"
              className="bg-[rgba(255,255,255,0.1)] w-full text-white font-normal px-5 py-4 rounded-xl placeholder:text-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 max-md:max-w-full"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 text-white font-normal mt-6 max-md:max-w-full">
        <div className="flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
          <label htmlFor="password" className="text-white font-medium">
            Password
          </label>
          <div className="relative mt-2.5">
            <div className="bg-[rgba(255,255,255,0.1)] flex w-full items-center gap-2.5 flex-wrap px-5 py-4 rounded-xl max-md:max-w-full">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                maxLength={20}
                placeholder="Enter your password"
                className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent text-white placeholder:text-white placeholder:opacity-70 focus:outline-none"
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 rounded"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >

                {showPassword && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.53033 3.46967C4.23744 3.17678 3.76256 3.17678 3.46967 3.46967C3.17678 3.76256 3.17678 4.23744 3.46967 4.53033L4.53033 3.46967ZM19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM14.5002 14.795C14.8088 14.5187 14.8351 14.0446 14.5589 13.7359C14.2826 13.4273 13.8085 13.401 13.4998 13.6773L14.5002 14.795ZM10.3227 10.5002C10.599 10.1915 10.5727 9.71739 10.2641 9.44115C9.95543 9.1649 9.48129 9.19117 9.20504 9.49981L10.3227 10.5002ZM19.1153 15.0421C18.8029 15.314 18.7701 15.7878 19.0421 16.1002C19.3141 16.4126 19.7878 16.4453 20.1002 16.1734L19.1153 15.0421ZM9.18831 4.69699C8.79307 4.82092 8.57313 5.24179 8.69705 5.63703C8.82098 6.03227 9.24185 6.25221 9.63709 6.12829L9.18831 4.69699ZM6.90354 7.43556C7.25269 7.21269 7.35505 6.74898 7.13218 6.39984C6.90931 6.0507 6.4456 5.94833 6.09646 6.1712L6.90354 7.43556ZM17.5515 18.0471C17.9064 17.8335 18.021 17.3727 17.8075 17.0177C17.5939 16.6628 17.1331 16.5482 16.7782 16.7618L17.5515 18.0471ZM3.46967 4.53033L19.4697 20.5303L20.5303 19.4697L4.53033 3.46967L3.46967 4.53033ZM8.25 12C8.25 14.0711 9.92893 15.75 12 15.75V14.25C10.7574 14.25 9.75 13.2426 9.75 12H8.25ZM12 15.75C12.96 15.75 13.8372 15.3883 14.5002 14.795L13.4998 13.6773C13.1012 14.034 12.5767 14.25 12 14.25V15.75ZM9.20504 9.49981C8.61169 10.1628 8.25 11.04 8.25 12H9.75C9.75 11.4233 9.96602 10.8988 10.3227 10.5002L9.20504 9.49981ZM2.32608 14.6636C4.2977 16.738 7.84898 19.75 12 19.75V18.25C8.51999 18.25 5.35328 15.6713 3.41334 13.6302L2.32608 14.6636ZM21.6739 9.33641C19.7023 7.26198 16.151 4.25 12 4.25V5.75C15.48 5.75 18.6467 8.32869 20.5867 10.3698L21.6739 9.33641ZM21.6739 14.6636C23.1087 13.154 23.1087 10.846 21.6739 9.33641L20.5867 10.3698C21.4711 11.3004 21.4711 12.6996 20.5867 13.6302L21.6739 14.6636ZM3.41334 13.6302C2.52889 12.6996 2.52889 11.3004 3.41334 10.3698L2.32608 9.33641C0.891307 10.846 0.891306 13.154 2.32608 14.6636L3.41334 13.6302ZM20.1002 16.1734C20.6921 15.6581 21.2202 15.1409 21.6739 14.6636L20.5867 13.6302C20.1602 14.0789 19.6662 14.5624 19.1153 15.0421L20.1002 16.1734ZM12 4.25C11.0225 4.25 10.0801 4.41736 9.18831 4.69699L9.63709 6.12829C10.4042 5.88776 11.1948 5.75 12 5.75V4.25ZM6.09646 6.1712C4.57051 7.14527 3.28015 8.33259 2.32608 9.33641L3.41334 10.3698C4.31512 9.42098 5.51237 8.3236 6.90354 7.43556L6.09646 6.1712ZM12 19.75C14.0476 19.75 15.9403 19.0165 17.5515 18.0471L16.7782 16.7618C15.3131 17.6433 13.6886 18.25 12 18.25V19.75Z"
                      fill="#9794AA"
                    />
                  </svg>
                )}

                {!showPassword && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7.305 4.5 3.135 7.445 1.5 12C3.135 16.555 7.305 19.5 12 19.5C16.695 19.5 20.865 16.555 22.5 12C20.865 7.445 16.695 4.5 12 4.5ZM12 17C9.515 17 7.5 14.985 7.5 12.5C7.5 10.015 9.515 8 12 8C14.485 8 16.5 10.015 16.5 12.5C16.5 14.985 14.485 17 12 17ZM12 10C10.62 10 9.5 11.12 9.5 12.5C9.5 13.88 10.62 15 12 15C13.38 15 14.5 13.88 14.5 12.5C14.5 11.12 13.38 10 12 10Z"
                      fill="#9794AA"
                    />
                  </svg>

                )}


              </button>
            </div>
            <div className="mt-2.5 text-white opacity-70">
              Must be at least 8 characters.
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="justify-center items-center flex w-full gap-2.5 text-xl text-white font-semibold leading-[1.2] mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all max-md:max-w-full"
      >
        <span className="self-stretch my-auto">
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </span>
      </button>
    </form>
  );
};
