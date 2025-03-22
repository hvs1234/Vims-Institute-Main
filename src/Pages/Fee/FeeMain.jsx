// import React from 'react'
import { Link } from "react-router-dom";
import img1 from "/Images/Fee/bank.webp";
import Handlers from "../../Services/Handlers";

const FeeMain = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="mt-[15rem] px-[20rem] py-[4rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover bg-[#ededed]">
        <div className="bg-[white] shadow-sm shadow-[#bebebe] rounded-md px-[4rem] py-[4rem] w-[100%] h-[100%] relative flex flex-col gap-[1rem] items-start justify-start">
          <h2 className="text-[3rem] max-md:text-[2.5rem] text-[#212121] font-normal">
            Fees for 1 year Diploma in Hotel and Tourism Management
          </h2>
          {/* <p className="text-[1.6rem] font-normal text-[#212121]">
            Pay fees online for 2025-26. Enter details, verify, make payment &
            download receipt. Secure & hassle-free process. Pay now!
          </p> */}
          <div className="overflow-x-auto w-full mt-[2rem]">
            <table className="min-w-full table-fixed border border-gray-300">
              <thead>
                <tr>
                  <th
                    className="border border-gray-300 text-[#2f3341] px-4 py-2 text-[2rem] max-sm:text-[1.6rem] font-normal font-[#414141] text-center bg-gray-100"
                    colSpan="2"
                  >
                    Listed Fee for the Session 2025-2026
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center w-1/2 text-[2rem] max-sm:text-[1.6rem] font-normal text-[#212121]">
                    Tourism Management
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center w-1/2 text-[2rem] max-sm:text-[1.6rem] font-normal text-[#212121]">
                    Hotel Management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src={img1} alt="img" className="w-[15%] h-[100%]" />
          {/* <div className="flex flex-col gap-[1rem] w-[100%] mt-[1rem]">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FeeMain;
