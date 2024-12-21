// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import FeeMain from "./FeeMain";

const Fee = () => {
  return (
    <>
      <Header />
      <FeeMain />

      {/* Scroll To Top */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default Fee;
