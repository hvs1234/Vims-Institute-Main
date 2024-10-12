// import React from 'react'
import img1 from "/Images/HomePromoted/7.jpg";
import img2 from "/Images/HomePromoted/8.jpg";

const HomeGreet = () => {
  return (
    <>
      <div className="w-[100%] relative h-[100%] grid grid-cols-2 justify-start max-md:grid-cols-1">
        <div
          className="bg-[#262b65] w-[100%] flex flex-col gap-[1rem] py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[3rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">
            Chairman`s Welcome
          </h2>
          <p className="text-[1.8rem] font-normal text-[white]">
            Welcome to Verma Institute of Management Studies, Uttarakhand, where
            we shall educate the next generation of leaders for the world’s
            hospitality industry. Build your knowledge and hone your skills
            under the able guidance of an enlightened and dynamic faculty.
            Graduate into an outstanding group of corporate leaders and
            entrepreneurs who can take hospitality to new heights around the
            globe. Discover your path to Hospitality Leadership through
            Practice.
          </p>
          <div className="flex flex-col items-center justify-center text-center mt-[2rem] gap-[1rem]">
            <div className="flex items-center justify-center w-[100%]">
              <img src={img1} alt="img" className="w-[20%] rounded-full" />
            </div>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Dr. XYZ, Chairman
            </p>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              ABC Corporation Pvt Ltd
            </p>
          </div>
        </div>
        <div
          className="bg-[#9c2257] w-[100%] flex flex-col gap-[1rem] py-[6rem] px-[20rem] h-[100%] justify-center items-center 
          text-center max-xl:px-[5rem] max-md:px-[2rem]"
        >
          <h2 className="text-[3rem] font-normal text-[white]">
            Director’s Message
          </h2>
          <p className="text-[1.8rem] font-normal text-[white]">
            Hospitality industry is indeed exciting and challenging, growing at
            an exponential rate. Welcome to this fascinating industry. At VIMS,
            we offer you a unique curriculum and a world class infrastructure to
            prepare you for the ever challenging needs of hospitality. Along
            with hospitality education, we will emphasize on your personality
            development, professional attitude and leadership skills to enable
            you to be a good leader in your chosen profession….
          </p>
          <div className="flex flex-col items-center justify-center text-center mt-[2rem] gap-[1rem]">
            <div className="flex items-center justify-center w-[100%]">
              <img src={img2} alt="img" className="w-[20%] rounded-full" />
            </div>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Professor. XYZ, Professor, Director & Principal
            </p>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Verma Institute Of Management Studies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGreet;
