// import React from 'react'
import PropTypes from "prop-types";
import Handlers from "../../Services/Handlers";
import { Link } from "react-router-dom";

const TopBanner = ({ bannerdata }) => {
  const { useStickyNavbar, handleOnClick } = Handlers();
  useStickyNavbar();

  return (
    <>
      {bannerdata.map((e) => {
        return (
          <div
            key={e.id}
            className={`section-main py-[15rem] px-[40rem] w-[100%] h-[100%] bg-fixed relative object-cover ${e.img} bg-no-repeat bg-center bg-cover 
            max-xl:px-[5rem] max-md:px-[3rem] max-md:h-[100%]`}
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.5]"></div>
            <div className="relative flex flex-col gap-[1rem] justify-center h-[100%]">
              <p className="text-[2rem] font-normal text-[white] uppercase">
                {e.topdesc}
              </p>
              <h1 className={`text-[6rem] text-[white] font-normal max-xl:text-[5rem] max-md:text-[4rem] max-sm:text-[3.6rem]`}>
                {e.title}
              </h1>
              <h2 className={`text-[5rem] text-[white] font-normal max-xl:text-[4rem] max-md:text-[3rem] ${e.titleclass}`}>
                {e.title2}
              </h2>
              <p className="text-[1.6rem] text-[white] font-normal">{e.para}</p>
              <div className="flex items-center mt-[1rem]">
                <Link
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className={`${e.btnClass}`}
                >
                  {e.btnText}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

TopBanner.propTypes = {
  bannerdata: PropTypes.array.isRequired,
};

export default TopBanner;
