// import React from 'react'

const HomeAbout = () => {
  return (
    <>
      <div className="w-[100%] relative h-[100%] grid grid-cols-2 justify-start max-md:grid-cols-1">
        <div
          className="bg-[#262b65] w-[100%] flex flex-col py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[2rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">Our Vision</h2>
          <p className="text-[1.6rem] font-normal text-[white]">
            Our vision is to be the best educational institute in international
            hospitality management creating world-class leaders committed to
            excellence.
          </p>
        </div>
        <div
          className="bg-[#9c2257] w-[100%] flex flex-col py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[2rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">Our Mission</h2>
          <p className="text-[1.6rem] font-normal text-[white]">
            Our mission is the advancement of knowledge and leadership and to
            develop the full intellectual and human potential of students
            through a commitment to excellence in learning, teaching and
            collaboration with industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
