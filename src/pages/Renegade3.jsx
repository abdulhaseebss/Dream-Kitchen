import React from 'react'

const Renegade3 = () => {
  return (
    <>
        <div className='bg-black text-white h-[100vh] w-[100%] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='bg-[#ff3131] p-3 px-8 rounded-3xl'>
                    <h1 className='font-bold text-5xl'>WHY A RENEGADE</h1>
                </div>

                <div className='bg-[#ff3131] flex flex-col gap-6 px-8 rounded-xl w-[550px] text-center py-8'>
                    <p className='text-3xl font-bold'>Thank you for reaching out to a Renegade</p>
                    <p className='text-3xl font-bold'>we are different by design you work hard</p>
                    <p className='text-3xl font-bold'>&</p>
                    <p className='text-3xl font-bold'>its time you treated yourself to the best remodeling experience </p>
                </div>

                <button className='text-xl bg-white text-black p-2 px-5 hover:bg-gray-300 transition-all rounded-full'>The End </button>
            </div>

        </div>
    </>
  )
}

export default Renegade3