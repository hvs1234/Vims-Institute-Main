import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Handlers from "../../Services/Handlers";
import logo from "/Images/logo.png";
import { NavLinkData } from "../../APIs/NavAPI";
import "./Nav.css";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const { handleOnClick, toggleNavbar, isActive } = Handlers();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const handleDropdownOpen = (id) => {
    setDropdownOpen(id);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  const closeDropdownOnClickOutside = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      handleDropdownClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnClickOutside);
    return () => document.removeEventListener("click", closeDropdownOnClickOutside);
  }, []);

  useEffect(() => {
    toggleNavbar();
  }, [location.pathname]);

  return (
    <div
      className={`header flex relative z-[9999] items-center gap-[4rem] justify-center w-full px-[20rem] py-[1rem] 
      bg-[#f2f2f2] max-[1200px]:justify-between max-2xl:px-[10rem] max-[1200px]:px-[2rem] shadow-sm ${
        isActive ? "active" : ""
      }`}
    >
      <Link to="/" onClick={handleOnClick("/")} className="hidden max-[1200px]:flex">
        <img src={logo} alt="logo" className="w-[40%] max-xl:w-[20%] max-md:w-[40%] max-[500px]:w-[50%]" />
      </Link>
      <nav className="navbar flex items-center justify-center gap-[1rem] max-[1200px]:min-h-screen max-[1200px]:mt-[4rem]">
        <ul className="flex items-center gap-[4rem]">
          {NavLinkData.map((item) =>
            item.dropdown ? (
              <div
                key={item.id}
                className="relative dropdown-container flex items-center gap-[1rem]"
                onMouseEnter={() => handleDropdownOpen(item.id)}
                onMouseLeave={handleDropdownClose}
              >
                <p className="navlink text-[1.6rem] text-[#414141] font-normal uppercase cursor-pointer">
                  {item.name}
                </p>
                <FaChevronDown className="text-[#414141] text-[1.4rem]" />
                {dropdownOpen === item.id && (
                  <div className="absolute top-[2rem] left-[-2rem] px-[1rem] py-[1rem] mt-2 w-[200px] bg-white shadow-md border">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.to}
                        className="block px-4 py-2 text-[1.6rem] text-[#414141] hover:bg-gray-200"
                        onClick={() => {
                          handleDropdownClose();
                          toggleNavbar();
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                to={item.to || "#"}
                onClick={(e) => {
                  if (!item.to) e.preventDefault();
                  handleOnClick(item.to);
                  toggleNavbar();
                }}
                className="navlink text-[1.6rem] text-[#414141] font-normal uppercase transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
              >
                {item.name}
              </Link>
            )
          )}
        </ul>
      </nav>
      <div className="relative z-[9999]">
        <HiMenu size={20} className="cursor-pointer nav-btn" onClick={toggleNavbar} />
      </div>
    </div>
  );
};

export default Nav;
