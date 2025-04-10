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
              More Details
            </h2>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              Students who have passed 10+2 or its equivalent
              in any discipline from a recognized board in India/ other
              countries are eligible to apply for the Diploma Program. Our
              Experienced Faculty ensures that you learn the very best in
              Hospitality Management.
            </p>
            <p className="text-[2rem] font-normal capitalize mt-[1rem]">
              Application Form
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              Fill in your details, to get more information about this program.
              For any assistance, you can call{" "}
              <a href="tel:7466899901">+917466899901</a> /{" "}
              <a href="tel:7466899902">+917466899902</a> <br/>
              or email{" "}
              <a href="mailto:admissions@vims.ac">admissions@vims.ac</a>
            </p>
          </div>
          <Form formdata={programformdata} />
        </div>
      </div>
    </>
  );
};

export default ProgramForm;
