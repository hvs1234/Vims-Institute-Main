// import React from 'react'

const Top = () => {
  return (
    <>
      <div
        className="bg-[#2c3d6b] w-[100%] flex gap-[1rem] items-center justify-center px-[40rem] py-[1.5rem] 
        max-2xl:px-[20rem] max-[1200px]:px-[2rem]"
      >
        <div className="flex items-center gap-[2rem] justify-start w-[100%] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
          <p className="text-[1.6rem] text-[white] font-normal">
            Contact us: <a href="tel:010101">0101010101</a>
          </p>
          <p className="text-[1.6rem] text-[white] font-normal">
            For Admission Call: <a href="tel:010101">+91-010101</a>/
            <a href="tel:010101">01010101</a>/<a href="tel:010101">01010101</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Top;
