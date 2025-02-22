/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProgramCard = ({ programCardData = [] }) => {
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
            </div>
            <div className="relative mt-[-2rem]">
              {eleMain.contentMain?.map((subeleMain) => {
                return (
                  <div
                    key={subeleMain.id}
                    className="flex flex-col gap-[2rem] w-full mt-[4rem]"
                  >
                    <h2 className="text-[3rem] font-normal text-[#212121]">
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
            {eleMain.FAQ?.map((eleFAQ) => {
              return (
                <div
                  className="flex flex-col gap-[2rem] w-full"
                  key={eleFAQ.id}
                >
                  <p className="text-[2rem] font-normal text-[#212121]">
                    {eleFAQ.ques}
                  </p>
                  <p className="text-[2rem] font-normal text-[#414141]">
                    {eleFAQ.ans}
                  </p>
                </div>
              );
            })}
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
          </div>
        );
      })}
    </>
  );
};

export default ProgramCard;
