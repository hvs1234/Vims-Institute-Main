// import React from 'react'

import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";

const Hero = () => {
  // Sticky Navbar

  useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <div
        className={`section-hero py-[9rem] px-[40rem] w-[100%] relative object-cover h-[100%] transition-all duration-[0.4s] ease-linear  
        bg-no-repeat bg-center bg-cover max-2xl:px-[20rem] max-xl:px-[10rem] max-md:px-[3rem]`}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.8]"></div>
        <div className="relative w-[100%] flex flex-col gap-[1rem] justify-center items-start max-w-[80%] max-[400px]:max-w-[90%]">
          <p className="text-[2rem] text-[white] font-normal max-sm:text-[1.8rem]">
            The Pathway To A Successful Career
          </p>
          <h1 className="text-[5rem] font-medium text-[white] max-sm:text-[4rem] max-[450px]:text-[3.2rem]">
            Verma Institute Of <br /> Management Studies
          </h1>
          <p className="text-[2rem] text-[white] font-normal max-sm:text-[1.8rem]">
            Over the course of one year, you will acquire an extensive
            understanding of hotel operations, encompassing front office
            management, housekeeping, and food and beverage service.
          </p>
          <div className="flex items-center mt-[2rem] w-[100%]">
            <Link
              to={"/"}
              className="bg-[#263169] capitalize px-[2rem] py-[1rem] text-[white] font-normal text-[1.8rem] rounded-sm 
              transition-all duration-[0.2s] ease-linear hover:opacity-[0.9]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
