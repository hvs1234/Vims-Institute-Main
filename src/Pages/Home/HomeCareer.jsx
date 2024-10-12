// import React from 'react'

import HomeProgramCard from "../../Components/Card/HomeProgramCard";
import Handlers from "../../Services/Handlers";

const HomeCareer = () => {
  const { homeprogramdata } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative bg-[#313175] max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col justify-center gap-[1rem] items-center text-center w-[100%]">
          <h2 className="text-[3rem] font-normal text-[white] text-center">
            Your Pathway To A Successful Career
          </h2>
          <h2 className="text-[3rem] font-normal text-[white] text-center">
            Why Join VIMS
          </h2>
        </div>
        <HomeProgramCard homeprogramdata={homeprogramdata} />
      </div>
    </>
  );
};

export default HomeCareer;
