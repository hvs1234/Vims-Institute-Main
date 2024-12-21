// import React from 'react'
import { Link } from "react-router-dom";
import img1 from "/Images/Fee/1.png";
import img2 from "/Images/Fee/2.png";
import Handlers from "../../Services/Handlers";

const FeeMain = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="px-[20rem] py-[4rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover bg-[#ededed]">
        <div className="bg-[white] shadow-sm shadow-[#bebebe] rounded-md px-[4rem] py-[4rem] w-[100%] h-[100%] relative flex flex-col gap-[1rem] items-start justify-start">
          <h2 className="text-[3rem] max-md:text-[2.5rem] text-[#212121] font-normal">
            Deposit Fees for 2024-25
          </h2>
          <p className="text-[1.6rem] font-normal text-[#212121]">
            Partner Bank
          </p>
          <img src={img1} alt="img" className="w-[15%] h-[100%]" />
          <img src={img2} alt="img" className="w-[15%] h-[100%]" />
          <div className="flex flex-col gap-[1rem] w-[100%]">
            <p className="text-[1.6rem] font-normal text-[black]">
              Please follow the following steps for the payment:
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              1. Enter your Enrolment No. for old students / Entrance Test Roll
              No. for newly admitted students.
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              2. The system will displays the fee amount along with students
              details.
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              3. Verify your data.
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              4. Click on Make Payment button to make the fee payment.
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              5. After successful payment download your fee receipt & take a
              print for future reference.
            </p>
            <div className="mt-[2rem]">
              <Link
                to={"/feelink"}
                onClick={handleOnClick("/feelink")}
                className="rounded-md px-[4rem] py-[1rem] bg-[crimson] text-[white] text-[2rem] font-normal transition-all 
                duration-[0.3s] ease-in-out hover:opacity-[0.8]"
              >
                Pay Fees
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeMain;
