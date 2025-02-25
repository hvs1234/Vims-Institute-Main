/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramTourismData } from "../../../APIs/TopBannerAPI";
import ProgramCard from "../../../Components/Card/ProgramCard";
import { ProgramTourismCardData } from "../../../APIs/ProgramCardAPI";

const ProgramTourism = () => {
  const [programTourismData] = useState(ProgramTourismData);
  const [programTourismCardData] = useState(ProgramTourismCardData);

  return (
    <>
      <Header />
      <TopBanner bannerdata={programTourismData} />
      <ProgramCard programCardData={programTourismCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramTourism;
