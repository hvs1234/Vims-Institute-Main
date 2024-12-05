// import React from 'react'

import Handlers from "../../Services/Handlers";

const ProgramAdmissionCard = () => {
  const { programadmissioncarddata } = Handlers();

  return (
    <>
      <div className="relative grid grid-cols-3 w-[100%] gap-[4rem] justify-center py-[6rem] max-lg:grid-cols-2 max-[500px]:grid-cols-1">
        {programadmissioncarddata.map((e) => {
          return (
            <div className="flex justify-start gap-[2rem] w-[100%]" key={e.id}>
              <div className="flex">
                <p className="text-[2.5rem] text-[green] font-medium">
                  {e.value}
                </p>
              </div>
              <div className="flex flex-col gap-[1rem] w-[100%]">
                <p className="text-[2rem] font-normal">{e.label}</p>
                <p className="text-[1.6rem] font-normal text-[#515151]">
                  {e.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProgramAdmissionCard;
