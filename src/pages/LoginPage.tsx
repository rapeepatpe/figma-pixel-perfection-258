import React from 'react';
import BackgroundBlur from '@/components/BackgroundBlur';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen relative overflow-x-hidden bg-black">
      <BackgroundBlur />
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
