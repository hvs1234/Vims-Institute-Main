/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { ProgramProfessionalData } from "../../../APIs/TopBannerAPI";
import TopBanner from "../../../Components/TopBanner/TopBanner";

const ProgramProfessional = () => {
  const [programProfessionalData] = useState(ProgramProfessionalData);

  return (
    <>
      <Header />
      <TopBanner bannerdata={programProfessionalData} />
      <div className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-full relative object-cover">
        <div className="flex flex-col gap-[1rem] w-full">
          <h2 className="text-[3rem] font-normal text-[#212121]">
            Short Term Professional Courses
          </h2>
        </div>
        <div className="flex flex-col gap-[1rem] w-full my-[2rem]">
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            1. Bartendering
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            2. Commis 1
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            3. Customer service representative
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            4. Counter sales executive
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            5. Tour guide
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            6. Guest service associate F&B
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            7. Facility management executive
          </p>
          <p className="text-[2rem] max-md:text-[1.6rem] text-[#414141]">
            8. F&B associate
          </p>
        </div>
        <h2 className="text-[2rem] text-[#212121] font-normal">
          All under skill Council banner by Verma Education Formation
        </h2>
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramProfessional;
