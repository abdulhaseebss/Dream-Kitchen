import React from 'react'
import sec4 from '../assets/sec4.png';
import sec5 from '../assets/sec5.png';
import sec6 from '../assets/sec6.png';
import Card2 from '../components/Card2';
import Button from '../components/Button';

const Section6 = () => {
  return (
    <div className='bg-black px-2 py-[28px] h-[100vh]'>
      <div className="px-2 pb-8 font-medium text-8xl text-center text-white max-[768px]:text-3xl max-[1024px]:text-5xl">Cost Range by type of Kitchen Remodel</div>
      <div className="px-2 pb-8 font-medium text-4xl text-center text-emerald-600 max-[768px]:text-xl max-[1024px]:text-2xl">*All price ranges are estimated guesses / each house & kitchen project will vary</div>
      <div className="flex flex-wrap justify-center gap-10">
        <Card2
          image={sec4}
          cardheading="MAJOR- Kitchen Remodel"
          cardpara="$15000-45000"
        />
        <Card2
          image={sec5}
          cardheading="MAJOR- Kitchen Remodel"
          cardpara="$45000-85,000"
          styles="bg-zinc-950"
        />
        <Card2
          image={sec6}
          cardheading="UPSCALE - Kitchen Remodel"
          cardpara="$85,000-165,000"
          styles="bg-white text-zinc-950"
        />
      </div>
      <div className="pt-11">
        <Button
          backLink="/sec7"
          nextLink="/sec9"
        />
      </div>
    </div>
  )
}

export default Section6