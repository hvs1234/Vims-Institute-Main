// import React from 'react'
import { Link } from "react-router-dom";
import logo from "/Images/logo.png";
import Handlers from "../../Services/Handlers";

const TopLogo = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className="w-[100%] bg-[white] px-[20rem] py-[1rem] flex justify-between items-center gap-[2rem] 
        max-2xl:px-[10rem] max-[1200px]:px-[2rem] max-md:flex-col"
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
        <div className="flex items-center justify-end gap-[2rem] w-[100%] max-[1200px]:justify-start max-sm:flex-col max-sm:justify-start max-sm:items-start">
          <div className="flex items-center gap-[2rem]">
            <h2 className="uppercase font-normal text-[1.4rem]">
              Admissions Open
            </h2>
            <Link
              to={"/admission"}
              onClick={handleOnClick("/admission")}
              className="bg-[crimson] text-[white] flex justify-end text-[1.4rem] font-normal px-[2rem] py-[1rem] rounded-sm 
            transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              Apply Now
            </Link>
          </div>
          <div className="flex flex-col max-xl:flex-row max-xl:gap-[1rem] items-start gap-[0.2rem] justify-start w-[auto] max-[390px]:flex-col max-sm:items-start max-sm:gap-[1rem]">
            <p className="text-[1.4rem] text-[#212121] font-normal">
              <span className="text-[#212121] font-semibold">Contact us</span>:{" "}
              <a href="tel:7466899901">+91-7466899901</a>
            </p>
            <p className="text-[1.4rem] text-[#212121] font-normal">
              <span className="text-[#212121] font-semibold">
                For Admission Call
              </span>
              : <a href="tel:7466899902">+91-7466899902</a>
            </p>
          </div>
          {/* <marquee
            className="flex flex-col max-xl:flex-row max-xl:gap-[1rem] items-start gap-[1rem] justify-start w-[auto] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem] text-[1.4rem] text-[#212121]"
            behavior="scroll"
            direction="left"
            scrollamount="10"
          >
            <p className="font-normal">
              <span className="text-[#212121] font-semibold">Contact us</span>:
              <a href="tel:7466899901">+91-7466899901</a>
            </p>
            <p className="font-normal">
              <span className="text-[#212121] font-semibold">
                For Admission Call
              </span>
              :<a href="tel:7466899902">+91-7466899902</a>
            </p>
          </marquee> */}
        </div>
      </div>
    </>
  );
};

export default TopLogo;
