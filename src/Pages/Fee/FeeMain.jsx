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
          <div className="overflow-x-auto w-full mt-8">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    colSpan="3"
                    className="border border-gray-300 text-[#2f3341] px-6 py-3 text-[2.2rem] font-medium text-center"
                  >
                    One Year Diploma in Hotel Management
                  </th>
                </tr>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    S.NO
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    PARTICULARS
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    AMOUNT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    1
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Registration Fee (ONE TIME)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    5,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    2
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Tuition Fee (1st Sem)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    35,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    3
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Other Fee (ONE TIME):
                    <div className="flex flex-col gap-[0.5rem] py-[1rem]">
                      <div className="text-[1.6rem]">Library</div>
                      <div className="text-[1.6rem]">Computer Lab</div>
                      <div className="text-[1.6rem]">Sports</div>
                      <div className="text-[1.6rem]">Activity</div>
                      <div className="text-[1.6rem]">Practical</div>
                      <div className="text-[1.6rem]">Uniform</div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    20,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    4
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Tuition Fee (2nd Sem)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    35,000.00
                  </td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td
                    colSpan="2"
                    className="border border-gray-300 px-4 py-2 text-right text-[1.8rem] text-[#212121]"
                  >
                    Total
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#212121]">
                    95,000.00
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6"></div>

            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    colSpan="3"
                    className="border border-gray-300 text-[#2f3341] px-6 py-3 text-[2.2rem] font-medium text-center"
                  >
                    One Year Diploma in Tourism Management
                  </th>
                </tr>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    S.NO
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    PARTICULARS
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#212121] text-center">
                    AMOUNT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    1
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Registration Fee (ONE TIME)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    5,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    2
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Tuition Fee (1st Sem)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    25,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    3
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Other Fee (ONE TIME):
                    <div className="flex flex-col gap-[0.5rem] py-[1rem]">
                      <div className="text-[1.6rem]">Library</div>
                      <div className="text-[1.6rem]">Computer Lab</div>
                      <div className="text-[1.6rem]">Sports</div>
                      <div className="text-[1.6rem]">Activity</div>
                      <div className="text-[1.6rem]">Practical</div>
                      <div className="text-[1.6rem]">Uniform</div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    20,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    4
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-[1.8rem] text-[#414141]">
                    Tuition Fee (2nd Sem)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#414141]">
                    25,000.00
                  </td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td
                    colSpan="2"
                    className="border border-gray-300 px-4 py-2 text-right text-[1.8rem] text-[#212121]"
                  >
                    Total
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-[1.8rem] text-[#212121]">
                    75,000.00
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
