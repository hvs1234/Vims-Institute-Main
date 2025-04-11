/* eslint-disable no-unused-vars */
import React from "react";

const FeeTable = () => {
  return (
    <>
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
    </>
  );
};

export default FeeTable;
