// import React from 'react'
import { Link } from "react-router-dom";
import logo from "/Images/logo.png";
import Handlers from "../../Services/Handlers";

const TopLogo = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className="w-[100%] bg-[white] px-[40rem] py-[2rem] flex justify-between items-center gap-[2rem] 
        max-2xl:px-[20rem] max-xl:px-[10rem] max-md:px-[2rem] max-md:flex-col"
      >
        <Link
          to={"/"}
          onClick={handleOnClick("/")}
          className="flex items-center justify-start w-[100%] max-[1200px]:hidden"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[40%] max-lg:w-[60%] max-md:w-[40%] max-[500px]:w-[60%]"
          />
        </Link>
        <div className="flex items-center justify-end gap-[2rem] w-[100%] max-[1200px]:justify-start">
          <h2 className="uppercase font-normal text-[1.6rem]">
            Admissions Open
          </h2>
          <Link
            to={"/"}
            className="bg-[crimson] text-[white] text-[1.6rem] font-normal px-[2rem] py-[1rem] rounded-sm 
            transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopLogo;
