/* eslint-disable no-unused-vars */
// import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";

const FeeLink = () => {
  return (
    <>
      <Header />
      <div className="mt-[15rem] py-[4rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] bg-[#ededed] relative object-cover">
        <div className="relative w-[100%] flex flex-col gap-[1rem] rounded-md shadow-sm bg-[white] px-[2rem] py-[2rem]">
          <p className="text-[1.6rem] font-normal text-[black]">
            Important Note:
          </p>
          <div className="flex flex-col gap-[1rem] w-[100%]">
            <p className="text-[1.6rem] font-normal text-[#212121]">
              1. Students are requested to make payment from any of bank i.e.
              either from Axis Bank or from Punjab National Bank for
              Miscellaneous fees or Regular fees. In any circumstances, DO NOT
              MAKE PAYMENT from both the bank.
            </p>
            <p className="text-[1.6rem] font-normal text-[#212121]">
              2. Students of following semesters are required to pay fee by roll
              number of first semester instead of their enrollment number.
            </p>
          </div>
          <div className="overflow-x-auto">
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
          {/* <div className="">
            <Link className="text-[1.6rem] font-semibold text-[darkred] transition-all duration-[0.2s] ease-in-out hover:opacity-[0.8]">
              Pay Fee for final process here
            </Link>
          </div> */}
        </div>
      </div>

      {/* Scroll To Top */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default FeeLink;
