// import React from 'react'

import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";

const Hero = () => {
  const { useStickyNavbar, handleOnClick } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[40rem] w-[100%] relative object-cover h-[100%] transition-all duration-[0.4s] ease-linear  
        bg-no-repeat bg-center bg-cover max-2xl:px-[20rem] max-xl:px-[10rem] max-md:px-[3rem]`}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.8]"></div>
        <div className="relative w-[100%] flex flex-col gap-[1rem] justify-center items-start max-w-[80%] max-[400px]:max-w-[90%]">
          <p className="text-[2rem] text-[white] font-normal max-sm:text-[1.8rem] uppercase">
            THE ROAD TO HOSPITALITY LEADERSHIP
          </p>
          <h1 className="text-[6rem] text-[white] font-medium max-xl:text-[5rem] max-md:text-[3.6rem] max-w-[80%] max-sm:max-w-[100%]">
            Verma Institute Of Management Studies
          </h1>
          <p className="text-[2rem] text-[white] font-normal max-sm:text-[1.8rem]">
            With cutting-edge facilities, expert mentorship, and global
            connections, we prepare aspiring hospitality leaders to thrive in a
            dynamic industry. Experience a transformative blend of knowledge,
            practical training, and international exposure—your journey to
            hospitality success begins here!
          </p>
          <div className="flex items-center mt-[2rem] w-[100%]">
            <Link
              to={"/admission"}
              onClick={handleOnClick("/admission")}
              className="bg-[#263169] capitalize px-[2rem] py-[1rem] text-[white] font-normal text-[1.8rem] rounded-sm 
              transition-all duration-[0.2s] ease-linear hover:opacity-[0.9]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
