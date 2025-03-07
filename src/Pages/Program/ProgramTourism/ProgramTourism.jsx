/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramTourismData } from "../../../APIs/TopBannerAPI";
import ProgramCard from "../../../Components/Card/ProgramCard";
import { ProgramTourismCardData } from "../../../APIs/ProgramCardAPI";
import { Helmet } from "react-helmet-async";

const ProgramTourism = () => {
  const [programTourismData] = useState(ProgramTourismData);
  const [programTourismCardData] = useState(ProgramTourismCardData);

  return (
    <>
      <Helmet>
        <title>Diploma in Tourism Management - VIMS</title>
        <meta
          name="description"
          content="Our Diploma in Tourism Management is meticulously designed to equip students with the skills, knowledge, and industry exposure required to excel in the ever-evolving tourism and hospitality sectors"
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={programTourismData} />
      <ProgramCard programCardData={programTourismCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramTourism;
