import React from 'react'
import upScale from "../assets/upscale.webp"
import { Link } from 'react-router-dom'


const UpScale = () => {
  return (
    <>
    
    <div className="flex justify-center items-center h-screen bg-[#54a96a]">
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <p className="text-5xl font-bold text-[#fff] text-center mb-8">
        3 basic types of kitchen remodels
      </p>
      <div className="flex flex-wrap justify-center items-start ">
        <div className="p-4 w-[330px]">
          <img src={upScale} alt="Kitchen Remodel" className="w-full rounded-t" />
          <div className="bg-[#fff] text-center p-2 rounded-b">
            <p className="text-[#54a96a] font-semibold">UpScale-Kitchen Remodels</p>
            <p className="text-[#54a96a]">-click here for more details-</p>
          </div>
        </div>
        <div className="text-[#fff] p-4 w-[750px]  max-[800px]:w-[90%]">
          <p className="text-[#000] font-semibold text-2xl">UPSCALE - Kitchen Remodel</p>
          <div className="bg-[#fff] p-3 rounded mt-4">
            <p className="text-[#54a96a] text-xl mt-2">
             
            Modernize the outdated 200-square-foot kitchen  premium custom cabinets featuring built-in sliding shelves and other interior accessories. Upgrade to stone countertops paired with an imported ceramic- or glass-tile backsplash. Integrate high-end appliances including a built-in refrigerator, commercial-grade cooktop and vent hood, wall oven, and built-in microwave unit. Enhance functionality with a high-end undermount sink equipped with designer faucets and a water filtration system. Illuminate the space with new general and task lighting, including low-voltage under-cabinet lights. Complete the transformation with tile or similar flooring that mimics the appearance of wood. Finished with freshly painted ceiling, walls and trim.
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

export default UpScale