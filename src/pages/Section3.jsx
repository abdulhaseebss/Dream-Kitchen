import React from 'react';
import Card from '../components/Card';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.jpg';
import Button from '../components/Button';

const Section3 = () => {

  return (
    <div className='bg-black py-[28px] h-[100vh]'>
      <div className="px-2 font-medium text-6xl text-center text-white max-sm:text-3xl md:text-8xl">Our Unique Successful Process</div>
        <Card
          image1={card3}
          image2={card4}
          heading={"How can we best help you?"}
          para={"Over the years we have discovered the secret keys to ensure successful kitchen remodeling projects time after time."}
          heading1={"Our focus is on understanding what you desire most for you new kitchen."}
          para1={"Once we truly understand your current kitchen problems as well as your future kitchen dreams than we can see if our company is the best solution for solving your problems."}
          heading2={"This determination is best made by us helping to problem solve."}
          para2={"The better you explain your current problems the better we can work together to create the new space you have always dreamed of and deserve."}
          customStyles="py-9"
          customStyles1="opacity-95 text-emerald-600 md:text-xl"
        />
        <Button
        backLink="/sec2"
        nextLink="/sec4"
        />
    </div>
  );
};

export default Section3;
