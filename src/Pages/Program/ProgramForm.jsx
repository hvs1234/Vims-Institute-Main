// import React from 'react'

import Form from "../../Components/Form/Form";
import Handlers from "../../Services/Handlers";

const ProgramForm = () => {
  const { programformdata } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="relative grid grid-cols-2 gap-[4rem] w-[100%] justify-center max-md:grid-cols-1">
          <div className="flex flex-col gap-[1rem] w-[100%] justify-start">
            <h2 className="text-[3rem] font-normal text-[#212121]">
              Get More Details about this Hotel Management Course in Dehradun
            </h2>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              Students who have appeared/passed standard 10+2 or its equivalent
              in any discipline from a recognized board in India/ other
              countries are eligible to apply for the Degree Program. Our
              Experienced Faculty ensures that you learn the very best in
              Hospitality Management.
            </p>
            <p className="text-[2rem] font-normal capitalize mt-[1rem]">
              Application Form
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              Fill in your details, to get more information about this program.
              For any assistance, you can call{" "}
              <a href="tel:0101010101">+910101010101</a>{" "}
              <a href="tel:0101010101">+910101010101</a>/
              <a href="tel:0101010101">+910101010101</a>
              or email <a href="mailto:info@vims.edu.in">info@vims.edu.in</a>
            </p>
          </div>
          <Form formdata={programformdata} />
        </div>
      </div>
    </>
  );
};

export default ProgramForm;
