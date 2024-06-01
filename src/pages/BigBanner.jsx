import React from 'react';
import banner from "../assets/banner.webp";
import { Link } from 'react-router-dom';

const BigBanner = () => {
  return (
    <div className='relative'>
      <img
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          display: 'block'
        }}
        src={banner}
        alt=""
      />
   
      <div
        className='absolute bottom-0 left-0 m-8 w-[500px] bg-[#54a96a] mb-32 rounded-2xl p-3 max-[600px]:w-[400px] max-[600px]:rounded-xl  max-[450px]:w-[300px] max-[450px]:flex max-[450px]:justify-center'
        style={{
          zIndex: 1,
        }}
      >
        <p className='text-3xl text-[#fff] font-bold leading-10  max-[600px]:text-2xl max-[450px]:text-xl'>
          HOW TO AVOID THE MOST COMMON CONSTRUCTOR & HOMEOWNER ISSUES
        </p>
      </div>
      <div className='flex justify-center '>
      <div className='absolute bottom-0  flex gap-14 '>
        <Link to={"/bigBanner"}>
          <button className='text-xl bg-white text-black mb-5 p-2 px-5 hover:bg-gray-300 transition-all rounded-full'>
            <span>{"<"}</span> Back
          </button>
        </Link>
        <Link to={"/renegade"}>
          <button className='text-xl bg-[#54a96a] text-black p-2 px-5 mb-5 hover:bg-[#408152] transition-all rounded-full'>
            Next<span>{">"}</span>
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default BigBanner;
