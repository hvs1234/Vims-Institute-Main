// import React from 'react'
import Handlers from "../../Services/Handlers";

const HomePromote = () => {
  const { homepromotedata } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] relative w-[100%] max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col items-center justify-center text-center gap-[1rem] w-[100%]">
          <h2 className="text-[3rem] font-normal text-[#212121]">
            Educational Development Centre
          </h2>
        </div>
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
    </>
  );
};

export default HomePromote;
