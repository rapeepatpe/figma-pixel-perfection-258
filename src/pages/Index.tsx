import React from 'react';
import BackgroundBlur from '@/components/BackgroundBlur';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';

const Index: React.FC = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      <BackgroundBlur />
      <Header />
      <LoginForm />
    </div>
  );
};

export default Index;
