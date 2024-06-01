import React from 'react';

import bgImg from "../assets/complaint.webp";
import Button from '../components/Button';

let cards = [
    "“Workers failing to show up”",
    "“Not taking the time to the job right the first time”",
    "“Not litening to or understanding our requests”",
    "“Leaving a mess”"
]

const Section24 = () => {
    return (
        <div className='_sec_9_main min-h-screen w-full' >

            <div className='container mx-auto pt-10'>
                <h1 className='text-2xl md:text-5xl p-6 xl:w-6/12 text-center bg-black rounded-2xl text-white font-bold uppercase'>top client remodeling complaints about the contractor they hired</h1>

                <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-14'>
                    {
                        cards?.map((item, index) => {
                            return (
                                <div key={index} className='relative min-h-80 flex flex-col items-center justify-center'>
                                    <img alt='' src={bgImg} className='w-full h-full object-contain absolute top-0 left-0' />
                                    <h1 className='text-[14px] sm:text-xl md:text-[13px] lg:text-lg xl:text-xl pt-16 text-center font-bold z-10 w-6/12 sm:w-full mx-auto sm:px-8 md:px-5 lg:px-8 xl:px-14 2xl:px-20'>{item}</h1>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='mt-5'>


                <Button
                    backLink="/sec23"
                    nextLink="/bigBanner"
                />
            </div>
        </div>
    )
}

export default Section24