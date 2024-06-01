import React from 'react'
import twoMan from "../assets/width_661.webp"
import speachBubble from "../assets/speach-bubble.png"
import { Link } from 'react-router-dom';

const Sec27 = () => {
  const divStyle = {
    // position: 'relative',
    height: '100vh',
    // width: '100vw',
    // background: `url(${twoMan})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    overflow: "hidden",
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${twoMan}) no-repeat center center/cover`,
  };

//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'white',
//     opacity: 0.3,
//     pointerEvents: 'none',  // Ensure the overlay doesn't interfere with other elements
//   };

//   const contentStyle = {
//     position: 'relative',
//     zIndex: 1, // Ensure the content is above the overlay
//     padding: '20px', // Adjust padding as needed
//   };

  return (
    <div style={divStyle}>
      {/* <div style={overlayStyle}></div> */}
      <div className='bg-[#54a96a] text-white w-[500px] rounded-[30px] text-center ml-14 p-4 mt-10'> 
        <p className='text-3xl font-semibold'>COMMON CLIENT REMODELING PROBLEMS</p>
      </div>

     <div className='absolute top-0 right-[50px]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "220px" , height: "220px"}}>
            <h1 className='text-white text-xl font-semibold w-[150px] ml-4 mb-2' >“They never call me back”</h1>
        </div>
     </div>

     <div className='absolute top-[30%] left-[25px]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "220px" , height: "220px"}}>
            <h1 className='text-white text-xl font-semibold w-[150px] ml-4 mb-2' >“The project took too long”</h1>
        </div>
     </div>

     <div className='absolute top-[20%] left-[40%]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "250px" , height: "250px"}}>
            <h1 className='text-white text-xl font-semibold w-[130px] text-center mb-2' >“My house and yard were a mess”</h1>
        </div>
     </div>

     <div className='absolute top-[30%] right-[10%]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "220px" , height: "220px"}}>
            <h1 className='text-white text-xl font-semibold w-[150px] ml-4 mb-4' >“I ended up managing the project myself”</h1>
        </div>
     </div>

     <div className='absolute top-[48%] left-[25%]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "220px" , height: "220px"}}>
            <h1 className='text-white text-xl font-semibold w-[150px] ml-4 mb-4' >“So many hidden costs”</h1>
        </div>
     </div>

     <div className='absolute top-[48%] left-[43%]'>
        <div className='flex justify-center items-center' style={{background: `url(${speachBubble}) no-repeat center center/cover` , width: "250px" , height: "250px"}}>
            <h1 className='text-white text-xl font-semibold w-[130px] text-center mb-2' >“I was not given a schedule”</h1>
        </div>
     </div>

    <div className='absolute bottom-[30px] left-[40%]'>
        <div className='flex gap-14 max-[600px]:mt-5'>
                <Link to={"/sec22"}><button className='text-xl bg-white text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'><span>{"<"}</span> Back</button></Link>
                <Link to={"/sec24"}><button className='text-xl bg-[#54a96a] text-black p-2 px-5 hover:bg-[#408152] transition-all rounded-full'>Next<span>{">"}</span></button></Link>
        </div>
    </div>

    </div>
  )
}

export default Sec27
