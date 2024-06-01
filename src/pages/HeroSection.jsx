import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartHereClick = () => {
    navigate('/hero');
  };

  return (
    <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-[100vh]">
      <div className="flex flex-col gap-11 py-60 align-middle">
        <div className="px-2 font-medium text-6xl text-center text-white max-sm:text-3xl md:text-8xl">
          dreamperfectkitchen.com
        </div>
        <div className="px-2 font-normal text-3xl text-center text-white md:text-4xl lg:text-6xl">
          Crafting Perfection since 2005
        </div>
        <div className="flex justify-center">
        <button 
            onClick={handleStartHereClick}
            className="bg-emerald-600 p-3 md:p-6 lg:p-9 w-auto font-bold text-center text-white text-xl md:text-3xl lg:text-5xl"
          >
            START HERE
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
