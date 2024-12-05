// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const HomeProgram = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[2rem] flex items-center justify-center text-center bg-[#dfdfdf]">
        <h2 className="text-[3rem] font-normal text-[#212121]">Our Program</h2>
      </div>
      <div
        className="py-[9rem] px-[20rem] w-[100%] h-[50vh] bg-fixed relative object-cover bg-[url('/Images/9.jpg')] 
        bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#171d5a] opacity-[0.4]"></div>
        <div
          className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center 
          transition-all duration-[0.4s] ease-linear relative h-[100%]"
        >
          <h2 className="text-[5rem] font-normal text-[white] max-xl:text-[4rem] max-md:text-[3rem]">
            Diploma In Hotel Management
          </h2>
          <div className="flex items-center mt-[1rem]">
            <Link
              to={"/program"}
              onClick={handleOnClick("/program")}
              className="bg-transparent px-[2rem] py-[1rem] 
                rounded-md text-[white] font-normal border-[1px] border-[white] text-[1.8rem] 
                transition-all duration-[0.2s] ease-linear hover:bg-[white] hover:text-[black]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProgram;
