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
        className="py-[4rem] px-[4rem] w-[100%] h-[50vh] max-xl:h-[100%] bg-fixed relative object-cover bg-[url('/Images/14.jpg')] 
        bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#171d5a] opacity-[0.4]"></div>
        <div
          className="grid grid-cols-4 gap-[2rem] w-[100%] justify-center items-center text-center 
          transition-all duration-[0.4s] ease-linear relative h-[100%] max-xl:grid-cols-2 max-[500px]:grid-cols-1"
        >
          <div
            className="gap-[1rem] rounded-md h-[100%] relative object-cover bg-[url('/Images/12.jpg')] 
            bg-no-repeat bg-center bg-cover"
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2d2948] opacity-[0.8]"></div>
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem] gap-[2rem] px-[4rem] py-[10rem] rounded-xl h-[100%]">
              <h2 className="text-[3rem] text-[white]">
                Diploma in Hotel Management
              </h2>
              <div className="flex items-center">
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
          <div
            className="gap-[1rem] rounded-md h-[100%] relative object-cover bg-[url('/Images/14.jpg')] 
            bg-no-repeat bg-center bg-cover"
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2d2948] opacity-[0.8]"></div>
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem] gap-[2rem] px-[4rem] py-[10rem] rounded-xl h-[100%]">
              <h2 className="text-[3rem] text-[white]">
                Diploma in Tourism Management
              </h2>
              <div className="flex items-center">
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
          <div
            className="gap-[1rem] rounded-md h-[100%] relative object-cover bg-[url('/Images/13.jpg')] 
            bg-no-repeat bg-center bg-cover"
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2d2948] opacity-[0.8]"></div>
            <div className="relative flex flex-col justify-center items-center text-center transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem] gap-[2rem] px-[4rem] py-[10rem] rounded-xl h-[100%]">
              <h2 className="text-[3rem] text-[white]">
                Short Term Personality Development
              </h2>
              <div className="flex items-center">
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
          <div
            className="gap-[1rem] rounded-md h-[100%] relative object-cover bg-[url('/Images/15.jpg')] 
            bg-no-repeat bg-center bg-cover"
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2d2948] opacity-[0.8]"></div>
            <div className="relative flex flex-col justify-center items-center text-center gap-[2rem] px-[4rem] py-[10rem] rounded-xl h-[100%] transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem]">
              <h2 className="text-[3rem] text-[white]">
                Short Term Course in Mass Media
              </h2>
              <div className="flex items-center">
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
          {/* <h2 className="text-[5rem] font-normal text-[white] max-xl:text-[4rem] max-md:text-[3rem]">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeProgram;
