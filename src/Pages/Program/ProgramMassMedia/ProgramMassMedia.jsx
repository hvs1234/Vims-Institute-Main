/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import {
  ProgramMassMediaData,
} from "../../../APIs/TopBannerAPI";

const ProgramMassMedia = () => {
  const [programMassMediaData] = useState(ProgramMassMediaData);

  return (
    <>
      <Header />
      <TopBanner bannerdata={programMassMediaData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramMassMedia;
