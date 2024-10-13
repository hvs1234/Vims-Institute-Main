// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const HomeTour = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] bg-[url('/Images/Academics/4.jpg')] bg-no-repeat bg-center bg-cover relative w-[100%] h-[50vh] bg-fixed object-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.5]"></div>
        <div className="relative flex flex-col gap-[2rem] justify-center items-center text-center w-[100%] h-[100%]">
          <h2 className="text-[4rem] text-[white] font-normal max-xl:text-[3rem]">
            The Virtual Tour of Our Campus!
          </h2>
          <div className="flex items-center mt-[1rem]">
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="bg-transparent px-[2rem] py-[1rem] 
                rounded-md text-[white] font-normal border-[1px] border-[white] text-[1.8rem] 
                transition-all duration-[0.2s] ease-linear hover:bg-[white] hover:text-[black]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTour;
