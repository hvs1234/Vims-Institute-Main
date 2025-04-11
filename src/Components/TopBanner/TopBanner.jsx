import PropTypes from "prop-types";
import Handlers from "../../Services/Handlers";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopBanner = ({ bannerdata }) => {
  const { useStickyNavbar, handleOnClick } = Handlers();
  useStickyNavbar();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {bannerdata.map((e) => (
        <div
          key={e.id}
          className={`mt-[15rem] py-[15rem] px-[20rem] w-[100%] h-[100%] bg-fixed relative object-cover ${e.img} bg-no-repeat bg-center bg-cover max-xl:px-[5rem] max-md:px-[3rem] max-md:h-[100%]`}
        >
          <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.6]"></div>
          <div className="relative flex flex-col gap-[1rem] justify-center items-center text-center h-[100%]">
            <p className="text-[2.5rem] font-normal text-[white] uppercase">
              {e.topdesc}
            </p>
            <h1 className="text-[5rem] text-[white] font-normal max-xl:text-[4rem] max-md:text-[3rem]">
              {e.title}
            </h1>
            <h2
              className={`text-[5rem] text-[white] font-normal max-xl:text-[4rem] max-md:text-[3rem] ${e.titleclass}`}
            >
              {e.title2}
            </h2>
            <p className="text-[2rem] text-[white] font-normal">{e.para}</p>
            <div className="flex items-center mt-[2rem]">
              {e.btnText === "Course Curriculum" ? (
                <button
                  onClick={() => setShowPopup(true)}
                  className={`${e.btnClass}`}
                >
                  {e.btnText}
                </button>
              ) : (
                <Link
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className={`${e.btnClass}`}
                >
                  {e.btnText}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-out">
          <div className="bg-white rounded-2xl shadow-xl scale-100 opacity-100 animate-fadeIn flex flex-col items-end relative min-w-[30rem] max-w-[80vw]">
            <button
              onClick={() => setShowPopup(false)}
              className="text-black text-[2.5rem] absolute top-[1rem] right-[1.5rem] hover:text-red-500 transition duration-200"
            >
              &times;
            </button>
            <div className="flex flex-col gap-[1rem] px-[2rem] py-[2rem] w-full">
              <h2 className="text-[2rem] text-[#212121] font-medium">
                List of courses&nbsp;{" "}
                <i className="fa-solid fa-hand-point-left"></i>
              </h2>
              <a
                href="/hotel-diploma.pdf"
                target="_blank"
                className="text-[1.6rem] font-normal text-[#414141] cursor-pointer hover:underline hover:text-[darkblue]"
              >
                1. Diploma In Hotel Management
              </a>
              <a
                href="/tourism-diploma.pdf"
                target="_blank"
                className="text-[1.6rem] font-normal text-[#414141] cursor-pointer hover:underline hover:text-[darkblue]"
              >
                1. Diploma In Tourism Management
              </a>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .animate-fadeOut {
            animation: fadeOut 0.3s ease-in forwards;
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.9);
            }
          }
        `}
      </style>
    </>
  );
};

TopBanner.propTypes = {
  bannerdata: PropTypes.array.isRequired,
};

export default TopBanner;
