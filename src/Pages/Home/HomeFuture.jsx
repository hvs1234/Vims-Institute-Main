// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import home_future_img from "/Images/8.jpg";

const HomeFuture = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="grid grid-cols-2 gap-[6rem] w-[100%] justify-center max-xl:grid-cols-1 max-lg:gap-[4rem]">
          <div className="flex flex-col justify-center gap-[2rem] w-[100%]">
            <h2 className="text-[3rem] font-normal">
              Setting Up The Foundation To A Brighter Future
            </h2>
            <p className="text-[1.8rem] font-normal">
              Set up to high international standards, Verma Institute of
              Management Studies (VIMS) is a premier hospitality institute in
              Uttarakhand that offers you quality hospitality education with
              world-class infrastructure that gives your career an edge over
              others. Affiliated to the Uttarakhand University, backed with a strong
              international exchange program, internship, and placements in
              leading hotel chains, VIMS uses a perfect combination of academic
              learning, hands-on training, and professional internship to give
              one the best foundation and internationally accepted hospitality
              degree to get one set for a global career.
            </p>
            <p className="text-[1.8rem] font-normal">
              VIMS emphasizes a holistic approach to hospitality education,
              blending theoretical knowledge with practical experience. The
              institute`s state-of-the-art facilities, coupled with guidance
              from industry experts, ensure students gain real-world skills.
              With its global partnerships and strong alumni network, VIMS
              provides unparalleled opportunities for aspiring hospitality
              professionals to excel on an international stage.
            </p>
            <div className="flex items-center mt-[1rem]">
              <Link
                to={"/"}
                onClick={handleOnClick("/")}
                className="bg-[darkviolet] px-[2rem] py-[1rem] 
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
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFuture;
