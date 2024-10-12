// import React from 'react'

const HomeAbout = () => {
  return (
    <>
      <div className="w-[100%] relative h-[100%] grid grid-cols-2 justify-start max-md:grid-cols-1">
        <div
          className="bg-[#262b65] w-[100%] flex flex-col gap-[1rem] py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[3rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">Our Vision</h2>
          <p className="text-[1.8rem] font-normal text-[white]">
            To realize our vision, Vims is committed to creating an environment
            where every student can uncover and achieve their full potential. We
            aim to attract exceptional talent, including students, educators and
            facilitators, from across India and around the world.
          </p>
        </div>
        <div
          className="bg-[#9c2257] w-[100%] flex flex-col gap-[1rem] py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[2rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">Our Mission</h2>
          <p className="text-[1.8rem] font-normal text-[white]">
            Our mission is to be a student centric, forward-thinking institute
            with a global perspective. We are committed to delivering
            contemporary education that emphasizes problem solving skills,
            cooperation, mutual respect, a sense of responsibility and
            collaborative learning.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
