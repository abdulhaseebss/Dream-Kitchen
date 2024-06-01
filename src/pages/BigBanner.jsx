import React from 'react'
import banner from "../assets/banner.webp"
const BigBanner = () => {
  return (
  <>
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
    className='absolute bottom-0 left-0 m-8 w-[500px] bg-[#54a96a] rounded-2xl p-3 max-[600px]:w-[400px] max-[600px]:rounded-xl  max-[450px]:w-[300px] max-[450px]:flex max-[450px]:justify-center'
    style={{
      zIndex: 1,
    }}
  >
    <p className='text-3xl text-[#fff] font-semibold leading-10 max-[600px]:text-2xl max-[450px]:text-xl'>
      HOW TO AVOID THE MOST COMMON CONSTRUCTOR & HOMEOWNER ISSUES
    </p>
  </div>
</div>

      
  </>
  )
}

export default BigBanner
