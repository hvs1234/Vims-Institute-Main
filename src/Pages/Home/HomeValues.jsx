// import React from 'react'
import Handlers from "../../Services/Handlers";

const HomeValues = () => {
  const { homevaluesdata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] h-[100%] relative max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <h2 className="text-center flex items-center justify-center w-[100%] text-[3rem] font-normal">
          Core Values
        </h2>
        <div className="grid grid-cols-3 gap-[4rem] w-[100%] h-[100%] mt-[3rem] max-xl:grid-cols-2 max-[500px]:grid-cols-1">
          {homevaluesdata.map((e) => {
            return (
              <div
                key={e.id}
                className="flex flex-col gap-[1.5rem] justify-start items-center text-center"
              >
                <img src={e.img} alt="img" className="w-[15%]" />
                <p className="text-[2rem] font-normal">{e.name}</p>
                <p className="text-[1.6rem] font-normal">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeValues;
