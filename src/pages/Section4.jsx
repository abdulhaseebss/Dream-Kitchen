import React from 'react'
import sec1 from '../assets/sec1.png';
import sec2 from '../assets/sec2.png';
import sec3 from '../assets/sec3.png';
import Card2 from '../components/Card2';
import Button from '../components/Button';

const Sections4 = () => {
  return (

      <div className='bg-black px-2 py-[28px] h-[100vh]'>
      <div className="px-2 pb-8 font-medium text-8xl text-center text-white max-[768px]:text-3xl max-[1024px]:text-5xl">Our Unique Successful Process-continued</div>
        <div className="flex flex-wrap justify-center gap-10">
        <Card2
        image={sec1}
        cardheading="Feasability"
        cardpara="This is where we learn What are your dream wishes for this kitchen space?  Hold nothing back, now’s your chance to dream big.  Dont worry about the how, that’s our job.  We will uncover how to best provide you with your dream kitchen."
        />
        <Card2
        image={sec2}
        cardheading="Discovery"
        cardpara="This is where we DISCOVER what are we working with (ie how was your home constructed)?   We uncover  obstacles  to overcome ahead of time, saving you time & money during the remodel phase"
        styles="bg-zinc-950"
        />
        <Card2
        image={sec3}
        cardheading="Design"
        cardpara="Here is is where we  collaborate and  We come up with a plan for your new space now that we know what we are working with and working toward!  This way you get what you want while being in control of the cost."
        styles="bg-white text-zinc-950"
        />
        </div>
       <div className="pt-11">
       <Button
         backLink="/sec3"
         nextLink="/sec5"
        />
       </div>
    </div>

  )
}

export default Sections4