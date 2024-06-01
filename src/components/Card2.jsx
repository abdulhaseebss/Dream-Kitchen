import React from 'react'

const Card2 = ({cardheading, cardpara, image, styles}) => {
  return (
    <div className="shadow-lg rounded w-[50vh] overflow-hidden">
    <img className="w-full" src={image} alt="Sunset in the mountains"/>
    <div className={`bg-emerald-600 bg- px-6 py-4 text-center text-white ${styles}`}>
    <div className="mb-2 font-bold text-xl">{cardheading}</div>
    <p className="text-base">{cardpara}</p>
    </div>
    </div>
  )
}

export default Card2