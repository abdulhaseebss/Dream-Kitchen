import React from 'react'
import frame from "../assets/timeFrame.webp";
import { Link } from 'react-router-dom';
 

const TimeFrame = () => {
  return (
<>
  <div className='bg-[#54a96a]'>
    <div className=''>
      <div className='flex justify-center items-center h-screen'>
        <div
          className="bg-cover bg-center w-[70vw] h-[80vh] relative"
          style={{
            backgroundImage: `url('https://media.canva.com/v2/image-resize/format:PNG/height:711/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FwB9SY%2FMAGCPcwB9SY%2F1%2Fp.png/watermark:F/width:725?csig=AAAAAAAAAAAAAAAAAAAAAFOoP9f7dqD49whZAr29Q2_fAx5U1CH44LFvuER9VgGa&exp=1717243345&osig=AAAAAAAAAAAAAAAAAAAAALgRIvqfb5_bt9YMuafGdLilh0xgjJ63uQNYbokYAlXf&signer=media-rpc&x-canva-quality=screen')`
          }}
        >
        
          {/* Overlay layer */}
          <div className="absolute inset-0 bg-[#54a96a] opacity-50"></div>
      
          {/* Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <div>
          <p className='text-white w-[560px] text-center font-semibold text-4xl max-[900px]:text-2xl max-[700px]:text-xl max-[700px]:w-72'>A few more Questions to help us better understand details about your projects?</p>
          </div>

            <div className='bg-[rgb(0,0,0)] mt-5 p-3 w-[550px] max-[900px]:w-[450px]  max-[700px]:w-[350px] max-[550px]:w-[300px]'>
          <div className='flex items gap-3 pt-5'>
          <div className='text-white text-end leading-8 w-[850px]:text-[12px]'>
                <p className=']'>Time Frame:</p>
                <p>Budget:</p>
                <p>Others:</p>
            </div>
           <div className='flex items-center pb-8 flex-col'>
           <div className='border p-1 rounded border-[#474747]'>
                <input type="text " className='w-80 max-[700px]:w-60 max-[550px]:w-48' />
            </div>
            <div className='border p-1 rounded border-[#474747]'>
                <input type="text " className='w-80 max-[700px]:w-60 max-[550px]:w-48' />
            </div>
            <div className='border p-1 rounded border-[#474747]'>
                <input type="text " className='w-80 h-14 max-[700px]:w-60 max-[550px]:w-48' />
            </div>
           </div>
          </div>
              
         </div>
          </div>
          <div className='flex justify-center '>
       <div className='absolute bottom-0  flex gap-14 pb-5'>
        <div className='flex gap-14 max-[600px]:mt-5'>
                    <Link to={"/sec20"}><button className='text-xl bg-[#c4c9c6] text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'><span>{"<"}</span> Back</button></Link>
                    <Link to={"/sec22"}><button className='text-xl bg-[#000] text-white p-2 px-5 hover:bg-[#408152] transition-all rounded-full'>Next<span>{">"}</span></button></Link>
                </div>
        </div>
       </div>
        
        </div>
        
      </div>

   
    </div>

    
  </div>
</>







  )
}

export default TimeFrame



