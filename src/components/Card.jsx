import React from 'react';

const Card = ({ image1, image2, image3, heading, heading1, heading2, para, para1, para2, customStyles, customStyles1 }) => {

  return (
  <>
    <div className={`relative flex flex-wrap justify-center gap-20 px-10 md:px-0 py-20 align-middle ${customStyles}`}>
      <div className={`flex h-[70vh] ${customStyles}`}>
        <img src={image1} alt="" />
      </div>
      <div className={`flex h-[70vh] ${customStyles}`}>
        <img src={image3} alt="" />
      </div>
      <div className={`relative flex h-[70vh] ${customStyles}`}>
        <img src={image2} alt="" className={`bg-white opacity-35 ${customStyles1}`} />
        <div className={`absolute inset-0 flex flex-col p-8 mt-11 gap-9 text-black ${customStyles1}`}>
          <div className={`font-bold text-3xl text-center md:text-5xl ${customStyles1}`}>{heading}</div>
          <p className={`font-normal text-2xl md:text-4xl ${customStyles1}`}>{para}</p>
          <div className={`font-bold text-3xl text-center md:text-5xl ${customStyles1}`}>{heading1}</div>
          <p className={`font-normal text-2xl md:text-4xl ${customStyles1}`}>{para1}</p>
          <div className={`font-bold text-3xl text-center md:text-5xl ${customStyles1}`}>{heading2}</div>
          <p className={`font-normal text-2xl md:text-4xl ${customStyles1}`}>{para2}</p>
        </div>
      </div>
     
    </div>

  </>
  );
};

export default Card;
