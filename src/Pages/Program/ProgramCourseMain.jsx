/* eslint-disable no-unused-vars */
// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const ProgramCourseMain = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className="grid grid-cols-2 gap-[2rem] w-[100%] justify-center items-center text-center 
          transition-all duration-[0.4s] ease-linear relative h-[100%] max-lg:grid-cols-1 px-[4rem] py-[4rem] 
          max-md:px-[2rem] max-md:py-[2rem]"
      >
        <div
          className="gap-[1rem] rounded-md h-[100%] relative object-cover bg-[url('/Images/12.jpg')] 
            bg-no-repeat bg-center bg-cover"
        >
          <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2d2948] opacity-[0.8]"></div>
          <div className="relative flex flex-col justify-center items-center text-center transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem] gap-[2rem] px-[4rem] py-[10rem] rounded-xl h-[100%]">
            <h2 className="text-[2.5rem] text-[white] uppercase">
              Diploma in Hotel Management
            </h2>
            <p className="text-[1.6rem] font-normal text-center text-[white]">
              Over the course of a year, you will gain comprehensive expertise
              in hotel operations, including front office management,
              housekeeping, and food and beverage service, preparing you to
              excel in every facet of the hospitality industry.
            </p>
            <div className="flex items-center">
              <Link
                to={"/program/diploma"}
                onClick={handleOnClick("/program/diploma")}
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
            <h2 className="text-[2.5rem] text-[white] uppercase">
              Diploma in Tourism Management
            </h2>
            <p className="text-[1.6rem] font-normal text-center text-[white]">
              You will develop in-depth knowledge of tourism management,
              exploring areas such as destination planning, travel operations,
              and customer engagement, over the course of one year. This program
              equips you with the skills to excel in the dynamic and
              ever-evolving global tourism industry.
            </p>
            <div className="flex items-center">
              <Link
                to={"/program/tourism"}
                onClick={handleOnClick("/program/tourism")}
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
            <h2 className="text-[2.5rem] text-[white] uppercase">
              SHORT-TERM COURSE IN MASS COMMUNICATION
            </h2>
            <p className="text-[1.6rem] font-normal text-center text-[white]">
              This short course will help you refine essential skills such as
              communication, confidence, and leadership while fostering
              emotional intelligence and a professional attitude. Gain the tools
              to excel in any field and leave a lasting impression in every
              sphere of life.
            </p>
            <div className="flex items-center">
              <Link
                to={"/program/massMedia"}
                onClick={handleOnClick("/program/massMedia")}
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
          <div className="relative flex flex-col justify-center items-center text-center transition-all duration-[0.4s] ease-in-out hover:translate-y-[-2rem] gap-[2rem] px-[4rem] max-[500px]:px-[2rem] py-[10rem] rounded-xl h-[100%]">
            <h2 className="text-[2.5rem] text-[white] uppercase">
              DIPLOMA IN PERSONALITY DEVELOPMENT
            </h2>
            <p className="text-[1.6rem] font-normal text-center text-[white]">
              Our Personality Development Course is meticulously designed to
              refine your personality, boost self-confidence, and prepare you
              for the challenges of a competitive world. At VIMS, we believe in
              creating future leaders by blending academic excellence, ethical
              values, and hands-on training.
            </p>
            <div className="flex items-center">
              <Link
                to={"/program/personality"}
                onClick={handleOnClick("/program/personality")}
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
    </>
  );
};

export default ProgramCourseMain;
