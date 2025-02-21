// import React from 'react'
import img1 from "/Images/HomePromoted/13.png";

const HomeGreet = () => {
  return (
    <>
      <div className="w-[100%] relative h-[100%] grid grid-cols-3 justify-start max-2xl:grid-cols-2 max-md:grid-cols-1">
        <div
          className="bg-[#262b65] w-[100%] flex flex-col gap-[4rem] py-[6rem] px-[4rem] h-[100%] justify-between items-center 
          text-justify max-xl:px-[4rem] max-md:px-[3rem]"
        >
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[3rem] font-normal text-[white] text-center">
              Founder`s Message
            </h2>
            <p className="text-[1.8rem] font-normal text-[white]">
              Welcome to Verma Institute of Management Studies, Uttarakhand! It
              gives me great pleasure to invite you to embark on an inspiring
              journey into the world of hospitality, where knowledge meets
              practice, and dreams take flight.
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              Under the guidance of our passionate and dynamic faculty, you`ll
              have the opportunity to hone your skills, build expertise, and
              discover your unique path to success. Join a vibrant community of
              future leaders and entrepreneurs ready to redefine the global
              hospitality industry. At VIMS, we are here to guide and support
              you as you unlock your potential and shape a remarkable career.
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              Your journey to hospitality leadership begins here!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-[2rem] gap-[1rem]">
            <div className="flex items-center justify-center w-[100%]">
              <img src={img1} alt="img" className="w-[20%] rounded-full" />
            </div>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Rajender Kumar Verma, Founder
            </p>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Verma Institue of Management Studies
            </p>
          </div>
        </div>
        <div
          className="bg-[#15555d] w-[100%] flex flex-col gap-[4rem] py-[6rem] px-[4rem] h-[100%] justify-between items-center 
          text-justify max-xl:px-[4rem] max-md:px-[3rem]"
        >
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[3rem] font-normal text-[white] text-center">
              Chairman`s Message
            </h2>
            <p className="text-[1.8rem] font-normal text-[white]">
              Welcome, all! It is both an honour and a privilege to welcome you
              to an institution dedicated to excellence in hospitality
              education.
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              At VIMS, we believe that true success lies at the intersection of
              knowledge, skill, and passion. Our mission is not just to educate,
              but also to empower you to become a visionary leader and a
              change-maker in the hospitality industry. As you embark on this
              exciting journey, know that VIMS is here to nurture your
              aspirations and help you craft a future filled with purpose and
              achievement.
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              Welcome to the beginning of your remarkable journey!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-[2rem] gap-[1rem]">
            <div className="flex items-center justify-center w-[100%]">
              <img src={img1} alt="img" className="w-[20%] rounded-full" />
            </div>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Shaivee Verma, Chairman
            </p>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Verma Institue of Management Studies
            </p>
          </div>
        </div>
        <div
          className="bg-[#9c2257] w-[100%] flex flex-col gap-[4rem] py-[6rem] px-[4rem] h-[100%] justify-between items-center 
          text-justify max-xl:px-[4rem] max-md:px-[2rem] max-2xl:col-span-2 max-md:col-span-1"
        >
          <div className="flex flex-col gap-[2rem]">
            <h2 className="text-[3rem] font-normal text-[white] text-center">
              Director`s Message
            </h2>
            <p className="text-[1.8rem] font-normal text-[white]">
              The hospitality industry is a world of endless
              possibilities—dynamic, challenging, and growing at an
              unprecedented pace. Welcome to this fascinating journey!
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              We are proud to offer a thoughtfully designed curriculum and
              world-class infrastructure to equip you for the evolving demands
              of the industry. Beyond hospitality education, we are deeply
              committed to your personal and professional growth. Through a
              focus on personality development, professional ethics, and
              leadership skills, we aim to empower you to thrive as a confident
              and capable leader in your chosen field.
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              Rest assured, we are here to help you turn aspirations into
              achievements and passion into purpose. Welcome aboard!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-[2rem] gap-[1rem]">
            <div className="flex items-center justify-center w-[100%]">
              <img src={img1} alt="img" className="w-[20%] rounded-full" />
            </div>
            <p className="text-[1.8rem] font-normal text-[white] uppercase">
              Anshul Kumar Verma, Director
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
