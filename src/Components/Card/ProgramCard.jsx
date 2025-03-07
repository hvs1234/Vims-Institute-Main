/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import HomeTour from "../../Pages/Home/HomeTour";
import HomePromote from "../../Pages/Home/HomePromote";

const ProgramCard = ({ programCardData = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { handleOnClick, homepromotedata } = Handlers();

  return (
    <>
      {programCardData.map((eleMain) => {
        return (
          <div
            key={eleMain.id}
            className="py-[6rem] px-[20rem] flex flex-col gap-[2rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]"
          >
            <div className="flex flex-col justify-center gap-[2rem] w-full relative">
              <h1 className="text-[4rem] max-md:text-[3.5rem] font-medium text-[#212121]">
                {eleMain.titleMain}
              </h1>
              <p className="text-[2rem] font-normal text-[#414141]">
                {eleMain.descMain}
              </p>
              <div
                className="w-[100%] grid grid-cols-4 mt-[4rem] gap-[2rem] justify-start max-md:grid-cols-2 
          max-[400px]:grid-cols-1 max-[400px]:gap-[4rem]"
              >
                {homepromotedata.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="flex flex-col gap-[1rem] justify-center items-center text-center w-[100%] h-[100%]"
                    >
                      {/* <p className="text-[2rem] font-normal">{e.name}</p> */}
                      <div className="flex items-center justify-center w-[100%] h-[100%]">
                        <img
                          src={e.img}
                          alt="img"
                          className={`w-[70%] ${
                            e.id === 4 ? "w-[500px]" : "w-[70%]"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`relative mt-[-2rem] grid grid-cols-1 gap-[2rem] w-full justify-center`}
            >
              {eleMain.contentMain?.map((subeleMain) => {
                return (
                  <div
                    key={subeleMain.id}
                    className={`flex flex-col gap-[2rem] w-full mt-[4rem]`}
                  >
                    <h2 className="text-[2.5rem] font-normal text-[#212121]">
                      <i className="fa-solid fa-arrows-turn-right"></i>&nbsp;{" "}
                      {subeleMain.contentMainHeading}
                    </h2>
                    {subeleMain.contentMainDesc ? (
                      <p className="text-[2rem] font-normal text-[#212121]">
                        {subeleMain.contentMainDesc}
                      </p>
                    ) : null}
                    {subeleMain?.subHeading1 ? (
                      <p className="text-[2rem] font-normal text-[#212121]">
                        <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
                        &nbsp; {subeleMain.subHeading1}
                      </p>
                    ) : null}
                    {subeleMain.courseService1?.map((subeleService) => {
                      return (
                        <div
                          className={`flex gap-[1rem] w-full ${
                            subeleService?.serviceSubDesc
                              ? "flex-col items-start gap-[2rem]"
                              : "flex-col items-start gap-[2rem]"
                          }`}
                          key={subeleService.id}
                        >
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-medium text-[black]">
                              {subeleService?.id}:&nbsp;{" "}
                              {subeleService?.serviceTag}:
                            </p>
                          ) : (
                            <p className="hidden text-[1.8rem] font-normal text-[#414141]">
                              {subeleService?.serviceTag}
                            </p>
                          )}
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              {subeleService.serviceDesc}
                            </p>
                          ) : (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              <i className="text-[1.6rem] fa-solid fa-arrows-to-dot"></i>
                              &nbsp; {subeleService.serviceDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                    {subeleMain?.img ? (
                      <div className="flex items-center justify-center w-auto h-auto">
                        <img
                          src={subeleMain?.img}
                          alt="img"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    ) : null}
                    {subeleMain?.paraLast ? (
                      <p className="text-[2rem] font-normal text-[#212121]">
                        {subeleMain.contentMainDescLast}
                      </p>
                    ) : null}
                    {subeleMain?.subHeading2 ? (
                      <p className="text-[2rem] font-normal text-[#414141]">
                        <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
                        &nbsp; {subeleMain.subHeading2}
                      </p>
                    ) : null}
                    {subeleMain.courseService2?.map((subeleService) => {
                      return (
                        <div
                          className={`flex gap-[1rem] w-full ${
                            subeleService?.serviceSubDesc
                              ? "flex-col items-start gap-[2rem]"
                              : "flex-row items-center max-sm:flex-col max-sm:items-start"
                          }`}
                          key={subeleService.id}
                        >
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-medium text-[black]">
                              {subeleService?.id}:&nbsp;{" "}
                              {subeleService?.serviceTag}:
                            </p>
                          ) : (
                            <p className="hidden text-[1.8rem] font-medium text-[black]">
                              {subeleService?.serviceTag}
                            </p>
                          )}
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              {subeleService.serviceDesc}
                            </p>
                          ) : (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              <i className="text-[1.6rem] fa-solid fa-arrows-to-dot"></i>
                              &nbsp; {subeleService.serviceDesc}
                            </p>
                          )}
                          {subeleService.serviceSubDesc?.map(
                            (subeleServiceSubDesc) => {
                              return (
                                <p
                                  key={subeleServiceSubDesc.id}
                                  className="text-[1.8rem] font-normal text-[#414141]"
                                >
                                  {subeleServiceSubDesc?.id}:&nbsp;{" "}
                                  {subeleServiceSubDesc.serviceSubDescData}
                                </p>
                              );
                            }
                          )}
                        </div>
                      );
                    })}
                    {subeleMain?.subHeading3 ? (
                      <p className="text-[2rem] font-normal text-[#414141]">
                        <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
                        &nbsp; {subeleMain.subHeading3}
                      </p>
                    ) : null}
                    {subeleMain.courseService3?.map((subeleService) => {
                      return (
                        <div
                          className={`flex gap-[1rem] w-full ${
                            subeleService?.serviceSubDesc
                              ? "flex-col items-start gap-[2rem]"
                              : "flex-row items-center max-sm:flex-col max-sm:items-start"
                          }`}
                          key={subeleService.id}
                        >
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-medium text-[black]">
                              {subeleService?.id}:&nbsp;{" "}
                              {subeleService?.serviceTag}:
                            </p>
                          ) : (
                            <p className="hidden text-[1.8rem] font-medium text-[black]">
                              {subeleService?.serviceTag}
                            </p>
                          )}
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              {subeleService.serviceDesc}
                            </p>
                          ) : (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              <i className="text-[1.6rem] fa-solid fa-arrows-to-dot"></i>
                              &nbsp; {subeleService.serviceDesc}
                            </p>
                          )}
                          {subeleService.serviceSubDesc?.map(
                            (subeleServiceSubDesc) => {
                              return (
                                <p
                                  key={subeleServiceSubDesc.id}
                                  className="text-[1.8rem] font-normal text-[#414141]"
                                >
                                  {subeleServiceSubDesc?.id}:&nbsp;{" "}
                                  {subeleServiceSubDesc.serviceSubDescData}
                                </p>
                              );
                            }
                          )}
                        </div>
                      );
                    })}
                    {subeleMain.subHeading4 ? (
                      <p className="text-[2rem] font-normal text-[#414141]">
                        <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
                        &nbsp; {subeleMain.subHeading4}
                      </p>
                    ) : null}
                    {subeleMain.courseService4?.map((subeleService) => {
                      return (
                        <div
                          className={`flex gap-[1rem] w-full ${
                            subeleService?.serviceSubDesc
                              ? "flex-col items-start gap-[2rem]"
                              : "flex-row items-center max-sm:flex-col max-sm:items-start"
                          }`}
                          key={subeleService.id}
                        >
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-medium text-[black]">
                              {subeleService?.id}:&nbsp;{" "}
                              {subeleService?.serviceTag}:
                            </p>
                          ) : (
                            <p className="hidden text-[1.8rem] font-medium text-[black]">
                              {subeleService?.serviceTag}
                            </p>
                          )}
                          {subeleService?.serviceTag ? (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              {subeleService.serviceDesc}
                            </p>
                          ) : (
                            <p className="text-[1.8rem] font-normal text-[#212121]">
                              <i className="text-[1.6rem] fa-solid fa-arrows-to-dot"></i>
                              &nbsp; {subeleService.serviceDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                    {subeleMain?.applyNow ? (
                      <div className="flex items-center mb-[-2rem] w-[100%]">
                        <Link
                          to={"/admission"}
                          onClick={handleOnClick("/admission")}
                          className="bg-[#263169] capitalize px-[2rem] py-[1rem] text-[white] font-normal text-[1.8rem] 
                          rounded-sm transition-all duration-[0.2s] ease-linear hover:opacity-[0.9]"
                        >
                          Apply Now
                        </Link>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <h2 className="text-[3rem] font-normal text-[#212121] mt-[4rem]">
              {eleMain.FAQTitle && (
                <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
              )}
              &nbsp; {eleMain.FAQTitle}
            </h2>
            <div className="w-full flex flex-col gap-[2rem]">
              {eleMain.FAQ?.map((eleFAQ, index) => (
                <div
                  key={eleFAQ.id}
                  className="border-[1px] border-[#d6d6d6] rounded-xl px-[2rem] py-[1.5rem] flex flex-col"
                >
                  <div className="flex items-center w-full justify-between gap-[1rem]">
                    <button
                      className="text-[2rem] font-normal text-[#212121] w-full text-left"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      {eleFAQ.ques}
                    </button>
                    <i
                      className="fa-solid fa-chevron-down text-[#212121] text-[1.4rem] cursor-pointer"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    ></i>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 mt-[1rem]" : "max-h-0"
                    }`}
                  >
                    <p className="text-[2rem] font-normal text-[#414141] p-4">
                      {eleFAQ.ans}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <HomeTour />
            <div className="mt-[2rem] w-full flex flex-col gap-[1rem]">
              <h2 className="text-[3rem] font-normal text-[#212121]">
                {eleMain.conclusion && (
                  <i className="fa-solid fa-hand-point-right text-[#414141]"></i>
                )}
                &nbsp; {eleMain.conclusion}
              </h2>
              <p className="text-[2rem] font-normal text-[#414141]">
                {eleMain.conclusionDesc}
              </p>
            </div>
            <div className="flex items-center mb-[-2rem] w-[100%]">
              <Link
                to={"/admission"}
                onClick={handleOnClick("/admission")}
                className="bg-[#263169] capitalize px-[2rem] py-[1rem] text-[white] font-normal text-[1.8rem] 
                          rounded-sm transition-all duration-[0.2s] ease-linear hover:opacity-[0.9]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProgramCard;
