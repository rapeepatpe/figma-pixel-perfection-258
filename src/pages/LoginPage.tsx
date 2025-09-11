import React from 'react';
import BackgroundBlur from '@/components/BackgroundBlur';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import { Footer } from '@/components/signup/Footer';

const LoginPage: React.FC = () => {
  return (
    <div className="w-[100%] min-h-screen flex flex-col overflow-x-hidden bg-black">
      <Header />
      <div className="w-[100%] min-h-screen relative mb-[35vh] max-sm:mb-[-5vh]">
        <BackgroundBlur />
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
