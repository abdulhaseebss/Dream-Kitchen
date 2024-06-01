import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection2 = () => {
  const navigate = useNavigate();

  const handleStartHereClick = () => {
    navigate('/sec2');
  };

  return (
    <div className="flex justify-center items-center bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-[100vh]">
      <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-5xl text-center">

        <div className="mb-8 font-medium text-4xl text-left text-white">Please enter your email address:</div>

        <div className="flex items-center bg-black bg-opacity-75 mx-auto mb-8 rounded-full w-full max-w-lg">
          <div className="p-8">
          <label className="font-medium text-4xl text-white" htmlFor="email">
            Email:
          </label>
          <input type="email" name="email" id="email" placeholder="email address*" className="flex-1 px-8 py-4" />
          </div>
        </div>

        <button
          onClick={handleStartHereClick}
          className="bg-emerald-600 mb-8 px-8 py-4 rounded-full font-bold text-white text-xl md:text-4xl"
        >
          CLICK HERE <br /> TO BEGIN
        </button>
        <div className="font-medium text-4xl text-white">
          Your Dream Perfect Kitchen is just a few clicks away
        </div>
      </div>
    </div>
  )
}

export default HeroSection2