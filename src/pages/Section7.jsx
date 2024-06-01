import React, { useState } from 'react'
import sec4 from '../assets/sec4.png';
import sec5 from '../assets/sec5.png';
import sec6 from '../assets/sec6.png';
import Card2 from '../components/Card2';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';


let cards = [
  {
    image: sec4,
    title: "MINOR - Kitchen Remodel",
    paragraph: "-click for more details-",
    parentStyle: 'bg-black',
    parentHeading: "text-white",
    description: [
      `Assume an outdated approx 200-square-foot kitchen with less than 30 linear feet of cabinetry and countertops.`,
      `Retain the existing cabinet boxes while updating the fronts doors & drawers with either paint or possible replacement , complemented by new hardware.`,
      `Upgrade the cooktop/oven range and slide-in refrigerator to energy-efficient models. Replace the existing countertops and install new basic sink and faucet. Enhance the space with new resilient flooring and finish off with painted walls, trim, and ceiling.`
    ],
    headingStyles: 'text-emerald-600',
    paragraphStyles: "bg-emerald-600  text-white",
    styles: "text-white"
  },
  {
    image: sec5,
    title: "DiscoMAJOR- Kitchen Remodelvery",
    paragraph: "-click for more details-",
    description: [
      `Assume an outdated approx 200-square-foot kitchen with less than 30 linear feet of cabinetry and countertops.`,
      `Retain the existing cabinet boxes while updating the fronts doors & drawers with either paint or possible replacement , complemented by new hardware.`,
      `Upgrade the cooktop/oven range and slide-in refrigerator to energy-efficient models. Replace the existing countertops and install new basic sink and faucet. Enhance the space with new resilient flooring and finish off with painted walls, trim, and ceiling.`
    ],
    parentHeading: "text-emerald-600",
    paragraphStyles: " bg-black text-white",
    styles: "text-white",
    headingStyles: 'text-black',
    styles: "bg-zinc-950 text-white"
  },
  {
    image: sec6,
    title: "UPSCALE - Kitchen Remodel",
    paragraph: "-click for more details-",
    parentStyle: 'bg-emerald-600',
    parentHeading: "text-white",
    headingStyles: 'text-black',
    paragraphStyles: " bg-white text-emerald-600",
    description: [
      `Assume an outdated approx 200-square-foot kitchen with less than 30 linear feet of cabinetry and countertops.`,
      `Retain the existing cabinet boxes while updating the fronts doors & drawers with either paint or possible replacement , complemented by new hardware.`,
      `Upgrade the cooktop/oven range and slide-in refrigerator to energy-efficient models. Replace the existing countertops and install new basic sink and faucet. Enhance the space with new resilient flooring and finish off with painted walls, trim, and ceiling.`
    ],
    styles: "bg-white text-emerald-600"
  },
]

const Section7 = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const navigate = useNavigate();

  return (
    <div className={`${activeIndex ? cards[activeIndex]?.parentStyle : "bg-black"} px-2 py-[28px] min-h-[100vh] relative`}>
      {isOpen ? <button className='bg-white shadow border rounded-full flex flex-row items-center justify-center p-1 absolute top-5 left-5' onClick={() => {
        setIsOpen(!isOpen);
        setActiveIndex(null)
      }}>        <MdArrowBackIosNew size={18} />
      </button> : ""}
      <div className={`md:pt-0 pt-4 px-2 pb-8 font-medium text-8xl text-center max-[768px]:text-3xl max-[1024px]:text-5xl ${activeIndex ? cards[activeIndex]?.parentHeading : "text-white"}`}>3 basic types of kitchen remodels</div>
      <div className='container mx-auto'>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {!isOpen && !activeIndex ?
            cards?.map((item, index) => {
              return (
                <div className='md:col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer' onClick={() => {
                  setIsOpen(!isOpen);
                  setActiveIndex(index);
                }} key={index}>
                  <div className='w-full'>
                    <img className="w-full h-full object-cover" src={item?.image} alt="Sunset in the mountains" />
                  </div>
                  <div className={`bg-emerald-600 px-6 py-4 text-center ${item?.styles}`}>
                    <div className="mb-2 font-bold text-xl">{item?.title}</div>
                    <p className="text-base">{item?.paragraph}</p>
                  </div>
                </div>
              )
            })
            :
            <>
              <div className='md:col-span-12 lg:col-span-4'>
                <img className="w-full" src={cards[activeIndex]?.image} alt="Sunset in the mountains" />
                <div className={`bg-emerald-600 bg- px-6 py-4 text-center text-white ${cards[activeIndex]?.styles}`}>
                  <div className="mb-2 font-bold text-xl">{cards[activeIndex]?.title}</div>
                  <p className="text-base">{cards[activeIndex]?.paragraph}</p>
                </div>
              </div>
              <div className='md:col-span-12 lg:col-span-8 flex flex-col gap-8'>
                <h3 className={`text-3xl xl:text-5xl ${cards[activeIndex]?.headingStyles} font-bold`} >{cards[activeIndex]?.title}</h3>
                <div className={`${cards[activeIndex]?.paragraphStyles} p-3 md:p-5 xl:p-10 xl:min-h-[30rem]`}>
                  {cards[activeIndex]?.description?.map((item, index) => {
                    return (
                      <p className='text-lg md:text-2xl xl:text-4xl text-center' key={index}>
                        {item}
                      </p>
                    )
                  })}
                </div>
              </div>
            </>

          }

        </div>

      </div>

      <div className='mt-5'>

        {!isOpen ?

          <Button
            backLink="/sec6"
            nextLink="/minor"
          /> : ""
        }
      </div>

    </div>
  )
}

export default Section7