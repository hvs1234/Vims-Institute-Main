/* eslint-disable no-unused-vars */
// import React from 'react'

import { Link } from "react-router-dom";
import AdmissionForm from "./AdmissionForm";
import Handlers from "../../Services/Handlers";

const AdmissionTop = () => {
  const { handleOnClick, useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      <div
        className="mt-[15rem] py-[6rem] px-[20rem] w-[100%] h-[100%] relative object-cover bg-[url('/Images/About/1.jpg')] 
        bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-lg:mt-[15rem] max-md:px-[3rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.5]"></div>
        <div className="relative grid grid-cols-2 justify-center gap-[4rem] w-[100%] max-lg:grid-cols-1">
          <div className="flex flex-col justify-center max-lg:items-center max-lg:text-center w-[100%] gap-[1rem]">
            {/* <p className="text-[2.5rem] text-[white] font-normal">
              Our Admission
            </p> */}
            <h1 className="text-[5rem] text-[white] font-normal max-xl:text-[4rem] max-md:text-[3rem]">
              Get Admission in Hotel Management, Tourism & Other Short Term Courses
            </h1>
            {/* <p className="text-[2rem] text-[white] font-normal">
              Join VIMS for a Diploma in Hotel, Tourism & Mass Communication.
              Gain expert training, scholarships & global career opportunities.
              Apply now!
            </p> */}
            <div className="flex items-center justify-start text-center mt-[2rem] w-[auto]">
              <Link
                to={"/program"}
                onClick={handleOnClick("/program")}
                className="bg-transparent border-[1px] border-[white] capitalize px-[2rem] py-[1rem] text-[white] font-normal 
                text-[1.8rem] rounded-sm transition-all duration-[0.2s] ease-linear hover:bg-[white] hover:text-[black]"
              >
                Course Details
              </Link>
            </div>
          </div>
          {/* <AdmissionForm /> */}
          <AdmissionForm />
        </div>
      </div>
    </>
  );
};

export default AdmissionTop;
