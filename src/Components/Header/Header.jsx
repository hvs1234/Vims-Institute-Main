// import React from 'react'

import Nav from "./Nav";
import Top from "./Top";
import TopLogo from "./TopLogo";

const Header = () => {
  return (
    <>
      <div className="relative bg-[white] w-[100%] h-[100%]">
        {/* <Top /> */}
        <TopLogo />
        <Nav />
      </div>
    </>
  );
};

export default Header;
