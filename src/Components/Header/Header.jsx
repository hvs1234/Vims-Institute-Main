/* eslint-disable no-unused-vars */
// import React from 'react'

import Nav from "./Nav";
import Top from "./Top";
import TopLogo from "./TopLogo";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[999] bg-[white] w-full h-auto flex flex-col max-lg:flex-col-reverse">
        {/* <Top /> */}
        <TopLogo />
        <Nav />
      </div>
    </>
  );
};

export default Header;
