import React from 'react'
import constructor from "../assets/Constructor.webp"
import { Link } from 'react-router-dom'

const Renegade = () => {
  return (
    <>
         <div className='bg-black text-white h-[100vh] max-[1100px]:h-full max-[1100px]:py-8 w-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-3 max-[600px]:px-5'>
                <div className='flex justify-center flex-wrap items-center gap-8'>
                    <div className='flex flex-col justify-center items-start gap-6'>
                        <div className='bg-[#ff3131] p-3 px-8 rounded-3xl max-[600px]:w-full'>
                            <h1 className='font-bold text-5xl max-[600px]:text-3xl max-[600px]:text-center transition-all'>Hire A RENEGADE</h1>
                        </div>

                        <div className='bg-[#ff3131] flex flex-col gap-6 p-3 pb-8 rounded-xl w-[550px] max-[600px]:w-full text-start transition-all'>
                            <p className='text-3xl font-bold'>All Renegade Remodelers are trained, experienced and experts at the following:</p>
                            <p className='text-2xl font-bold text-start '>-thorough communication <br />

                                -written agreements <br />

                                -detailed scope of works <br />

                                -complete work flow schedules <br />

                                -being their word <br />
    
                                -once they start your job they stay on    <br />

                                your job until it is complete</p>
                            
                        </div>
                    </div>
                    <div>
                        <img className=' w-[480px]' src={constructor} alt="" />
                    </div>
                </div>
                
                <div className='flex gap-14 max-[600px]:mt-5'>
                    <Link to={"/bigBanner"}><button className='text-xl bg-white text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'><span>{"<"}</span> Back</button></Link>
                    <Link to={"/renegade2"}><button className='text-xl bg-[#54a96a] text-black p-2 px-5 hover:bg-[#408152] transition-all rounded-full'>Next<span>{">"}</span></button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Renegade