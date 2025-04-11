// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import home_future_img from "/Images/13.jpg";

const HomeFuture = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="grid grid-cols-2 gap-[6rem] w-[100%] justify-center max-xl:grid-cols-1 max-lg:gap-[4rem]">
          <div className="flex flex-col justify-center gap-[2rem] w-[100%]">
            <h2 className="text-[3rem] font-normal capitalize text-center">
              CRAFTING A FUTURE OF SUCCESS
            </h2>
            <p className="text-[1.8rem] font-normal text-justify">
              Welcome to Verma Institute of Management Studies, where passion
              meets opportunity in the vibrant world of hospitality.
            </p>
            <p className="text-[1.8rem] font-normal text-justify">
              At VIMS, we take pride in offering meticulously designed
              programmes that combine academic excellence with hands-on
              training, preparing you for the multifaceted demands of the global
              hospitality industry. Our state-of-the-art facilities and
              cutting-edge infrastructure provide the perfect environment for
              learning, while mentorship from seasoned industry experts ensures
              you acquire the skills and confidence needed to thrive in
              real-world settings.
            </p>
            <p className="text-[1.8rem] font-normal text-justify">
              With a focus on holistic development, VIMS bridges the gap between
              theory and practice, empowering students to achieve unparalleled
              professional growth. Our global partnerships and robust alumni
              network open doors to international opportunities, making VIMS the
              launchpad for aspiring hospitality leaders who aim to make their
              mark on a global stage.
            </p>
            <div className="flex items-center mt-[1rem] justify-center">
              <Link
                to={"/aboutus"}
                onClick={handleOnClick("/aboutus")}
                className="bg-[#294d55] px-[2rem] py-[1rem] 
                rounded-md text-[white] font-normal text-[1.8rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-[100%] h-[100%]">
            <img
              src={home_future_img}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFuture;
