import { Link } from "react-router-dom";
import program_course_img from "/Images/15.jpg";
import Handlers from "../../Services/Handlers";

const ProgramCourse = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem] max-md:py-[6rem]">
        <div className="grid grid-cols-2 gap-[4rem] w-[100%] relative max-2xl:grid-cols-1">
          <div className="flex flex-col gap-[1rem] w-[100%] justify-center">
            <h2 className="text-[3rem] text-[#212121] font-normal text-center">
              About Our Courses
            </h2>
            <p className="text-[1.8rem] font-normal text-[#212121] text-justify">
              Welcome to our One-Year Diploma in Hotel and Tourism Management.
              This program meticulously crafted for individuals aspiring to
              immerse themselves in the dynamic field of hospitality. Over the
              course of one year, you will acquire an extensive understanding of
              hotel operations, encompassing front office management,
              housekeeping, and food and beverage service.
            </p>
            <p className="text-[1.8rem] font-normal text-[#212121] text-justify">
              Join our One-Year Diploma in Hotel Management and gain hands-on
              experience in key hospitality areas. Learn from industry experts,
              master essential skills, and unlock excix`ting global career
              opportunities in the fast-paced world of hotel management and
              hospitality services.
            </p>
            <div className="flex items-center gap-[1rem] w-[100%] justify-center">
              <div className="flex items-center mt-[1rem] justify-center">
                <Link
                  to={"/admission"}
                  onClick={handleOnClick("/admission")}
                  target="_blank"
                  className="bg-[crimson] px-[2rem] py-[1rem] 
                  rounded-md text-[white] font-normal text-[1.8rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] uppercase"
                >
                  Apply Now
                </Link>
              </div>
              {/* <div className="flex items-center mt-[1rem]">
                <Link
                  to={"/"}
                  onClick={handleOnClick("/")}
                  target="_blank"
                  className="bg-[#43438c] px-[2rem] py-[1rem] 
                  rounded-md text-[white] font-normal text-[1.8rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] uppercase"
                >
                  <i className="fa-solid fa-download"></i>&nbsp; Brochure
                </Link>
              </div> */}
            </div>
          </div>
          <div className="flex justify-center w-[100%] h-[100%]">
            <img
              src={program_course_img}
              alt="img"
              className="w-[100%] rounded-sm transition-all duration-[0.2s] ease-linear hover:scale-[0.9]"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="flex flex-col justify-center items-center w-[100%] bg-[#f2f2f2] px-[20rem] py-[2rem] 
        max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <iframe
          src="https://www.youtube.com/embed/PHJVAQ6kFHM?si=plbRKCRMyRANgys6"
          title="VIMS Institute"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-[100%] h-[500px]"
        ></iframe>
      </div> */}
    </>
  );
};

export default ProgramCourse;
