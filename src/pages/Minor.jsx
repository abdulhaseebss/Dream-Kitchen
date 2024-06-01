import React from 'react'
import minorImage from "../assets/minor.webp"
import { Link } from 'react-router-dom'

const Minor = () => {
  return (

    <>
    
    <div className="flex justify-center items-center h-screen bg-[#000]">
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <p className="text-5xl font-bold text-[#fff] text-center mb-8">
        3 basic types of kitchen remodels
      </p>
      <div className="flex flex-wrap justify-center items-start space-x-8">
        <div className="p-4 w-[300px]">
          <img src={minorImage} alt="Kitchen Remodel" className="w-full rounded-t" />
          <div className="bg-[#54a96a] text-center p-2 rounded-b">
            <p className="text-white font-semibold">MINOR - Kitchen Remodel</p>
            <p className="text-white">-click here for more details-</p>
          </div>
        </div>
        <div className="text-[#fff] p-4 w-[750px] max-[800px]:w-[90%]">
          <p className="text-[#54a96a] font-semibold text-2xl">Minor - Kitchen Remodel</p>
          <div className="bg-[#54a96a] p-8 rounded mt-4">
            <p className="text-white text-xl mt-2">
              Assume an outdated approx 200-square-foot kitchen with less than 30 linear feet of cabinetry and countertops.
              Retain the existing cabinet boxes while updating the fronts doors & drawers with either paint or possible
              replacement, complemented by new hardware. Upgrade the cooktop/oven range and slide-in refrigerator to
              energy-efficient models. Replace the existing countertops and install new basic sink and faucet. Enhance the
              space with new resilient flooring and finish off with painted walls, trim, and ceiling.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  </div>
   <div className='flex justify-center '>
   <div className='absolute bottom-0  flex gap-14 pb-5'>
    <div className='flex gap-14 max-[600px]:mt-5'>
                <Link to={"/renegade"}><button className='text-xl bg-[#c4c9c6] text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'><span>{"<"}</span> Back</button></Link>
                <Link to={"/renegade3"}><button className='text-xl bg-[#000] text-white p-2 px-5 hover:bg-[#408152] transition-all rounded-full'>Next<span>{">"}</span></button></Link>
            </div>
    </div>
   </div>
    
    </>
  
  )
}

export default Minor  