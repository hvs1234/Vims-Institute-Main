// import React from 'react'
import HomeValuesCard from "../../Components/Card/HomeValuesCard";
import Handlers from "../../Services/Handlers";

const HomeValues = () => {
  const { homevaluesdata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] h-[100%] relative max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem] bg-[#f2f2f2]">
        <h2 className="text-center flex items-center justify-center w-[100%] text-[3rem] font-normal">
          Core Values
        </h2>
        <HomeValuesCard  homevaluesdata={homevaluesdata} />
      </div>
    </>
  );
};

export default HomeValues;
