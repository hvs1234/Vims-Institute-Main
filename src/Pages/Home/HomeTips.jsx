// import React from 'react'

import HomeTipsCard from "../../Components/Card/HomeTipsCard";
import Handlers from "../../Services/Handlers";

const HomeTips = () => {
  const { hometipsdata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center w-[100%]">
          <h2 className="text-[3rem] font-normal">
            Strategic International Tie-ups and Linkages
          </h2>
          <p className="text-[1.8rem] font-normal">
            VIMS offers its students the opportunity to build the career of
            their dreams through strategic educational tie-ups and linkages with
            international academic partners.
          </p>
          <HomeTipsCard hometipsdata={hometipsdata} />
        </div>
      </div>
    </>
  );
};

export default HomeTips;
