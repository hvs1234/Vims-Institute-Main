/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramTourismData } from "../../../APIs/TopBannerAPI";

const ProgramTourism = () => {
  const [programTourismData] = useState(ProgramTourismData);

  return (
    <>
      <Header />
      <TopBanner bannerdata={programTourismData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramTourism;
