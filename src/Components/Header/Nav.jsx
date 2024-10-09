import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Handlers from "../../Services/Handlers";
import "./Nav.css";

const Nav = () => {
  const { handleOnClick, navlinkdata, toggleNavbar, isActive } = Handlers();

  return (
    <>
      <div
        className={`header flex relative z-[9999] items-center gap-[4rem] justify-center w-[100%] px-[40rem] py-[1rem] 
        bg-[#f2f2f2] max-xl:justify-end max-2xl:px-[20rem] max-xl:px-[10rem] max-[1200px]:px-[2rem] ${
          isActive ? "active" : ""
        }`}
      >
        <nav className="navbar max-[1200px]:h-[60vh] max-[1200px]:rounded-2xl">
          <ul className="flex items-center gap-[4rem]">
            {navlinkdata.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.link}
                  onClick={handleOnClick(e.to)}
                  className={`navlink text-[1.6rem] text-[#414141] max-[1200px]:text-[#212121] 
                  max-[1200px]:font-bold max-[1200px]:tracking-[0.5px] font-normal 
                  uppercase transition-all duration-[0.2s] ease-linear 
                  hover:opacity-[0.8]`}
                >
                  {e.name}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="relative z-[9999]">
          <HiMenu
            size={20}
            className="cursor-pointer nav-btn"
            onClick={toggleNavbar}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
