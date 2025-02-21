import { Link } from "react-router-dom";
import logo from "/Images/logo.png";
import Handlers from "../../Services/Handlers";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className="py-[6rem] px-[20rem] w-[100%] bg-[url('/Images/10.jpg')] bg-no-repeat bg-center bg-cover 
          relative max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#232364] opacity-[0.2]"></div>
        <div className="grid grid-cols-3 justify-between items-start gap-[6rem] w-[100%] relative max-lg:grid-cols-1">
          <div className="flex flex-col col-span-2 max-lg:col-span-1 gap-[2rem] items-start justify-start w-[100%] h-[100%] max-lg:items-center max-lg:justify-center max-lg:text-center">
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="flex items-center justify-start w-[100%] h-[100%] max-lg:justify-center"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[30%] brightness-[3] max-md:w-[40%] max-[500px]:w-[60%]"
              />
            </Link>
            <p className="text-[2rem] font-normal text-[white]">
              Get Touch With Us
            </p>
            <div className="flex flex-col gap-[1rem] w-[100%] max-lg:items-center max-lg:justify-center">
              <p className="text-[white] text-[1.8rem] font-normal">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Dehradun,
                Uttarakhand India
              </p>
              <p className="text-[1.8rem] font-normal text-[white]">
                <i className="fa-solid fa-phone"></i>&nbsp; For Admission Call-{" "}
                <a href="tel:7466899901" className="hover:opacity-[0.8]">
                  +91-7466899901
                </a>{" "}
                /
                <a href="tel:7466899902" className="hover:opacity-[0.8]">
                  +91-7466899902
                </a>
              </p>
              <p className="text-[1.8rem] font-normal text-[white] hover:opacity-[0.8]">
                <i className="fa-solid fa-envelope"></i>&nbsp;{" "}
                <a href="mailto:admissions@vims.ac">admissions@vims.ac</a>
              </p>
            </div>
            <div className="flex items-center mt-[1rem]">
              <a
                // href=""
                // href="https://maps.app.goo.gl/xMhCaHrLuzUgrpqe7"
                // target="_blank"
                className="bg-transparent border-[1px] border-[white] px-[2rem] py-[1rem]
                rounded-md text-[white] font-normal text-[1.8rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] w-[100%] relative justify-end items-start max-lg:justify-center max-lg:items-center max-lg:text-center">
            <p className="text-[2rem] font-normal text-[white]">
              Program Offered
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              1. Diploma In Hotel Management
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              2. Diploma in Tourism Management
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              3. Short Term Personality Development
            </p>
            <p className="text-[1.8rem] font-normal text-[white]">
              4. Short Term Course in Mass Media
            </p>
            <div className="flex items-center gap-[1rem] w-[100%] max-lg:justify-center">
              <div className="flex items-center mt-[1rem]">
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
        </div>
      </div>
      <div
        className="flex justify-between gap-[2rem] items-center bg-[#c1415a] px-[20rem] py-[1rem] max-xl:px-[5rem] 
        max-md:px-[2rem] max-md:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:py-[2rem]"
      >
        <div className="flex items-start justify-start gap-[1rem]">
          <p className="text-[1.8rem] font-normal text-[white]">
            &copy; 2024. Verma Institute Of Management Studies. All right
            reserved. 
            {/* IT Support By{" "}
            <a
              href="https://twomglobal.com"
              className="text-[1.8rem] text-[wheat] font-semibold hover:opacity-[0.8]"
            >
              TWOM Global
            </a> */}
          </p>
        </div>
        <div className="flex items-center justify-end gap-[1rem]">
          <a href="#" target="_blank">
            <FaFacebook
              size={20}
              className="text-[white] transition-all duration-[0.2s] ease-linear hover:opacity-[0.6]"
            />
          </a>
          <a href="#" target="_blank">
            <FaInstagram
              size={20}
              className="text-[white] transition-all duration-[0.2s] ease-linear hover:opacity-[0.6]"
            />
          </a>
          <a href="#" target="_blank">
            <FaXTwitter
              size={20}
              className="text-[white] transition-all duration-[0.2s] ease-linear hover:opacity-[0.6]"
            />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin
              size={20}
              className="text-[white] transition-all duration-[0.2s] ease-linear hover:opacity-[0.6]"
            />
          </a>
          <a href="#" target="_blank">
            <FaYoutube
              size={20}
              className="text-[white] transition-all duration-[0.2s] ease-linear hover:opacity-[0.6]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
