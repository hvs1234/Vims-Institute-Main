/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramMassMediaData } from "../../../APIs/TopBannerAPI";
import ProgramCard from "../../../Components/Card/ProgramCard";
import { ProgramMassMediaCardData } from "../../../APIs/ProgramCardAPI";

const ProgramMassMedia = () => {
  const [programMassMediaData] = useState(ProgramMassMediaData);
  const [programMassMediaCardData] = useState(ProgramMassMediaCardData);

  return (
    <>
      <Header />
      <TopBanner bannerdata={programMassMediaData} />
      <ProgramCard programCardData={programMassMediaCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramMassMedia;
