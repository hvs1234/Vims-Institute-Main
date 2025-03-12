/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramPersonalityData } from "../../../APIs/TopBannerAPI";
import { ProgramPersonalityCardData } from "../../../APIs/ProgramCardAPI";
import { Helmet } from "react-helmet-async";
import ProgramCard from "../../../Components/Card/ProgramCard";

const ProgramPersonality = () => {
  const [programPersonalityData] = useState(ProgramPersonalityData);
  const [programPersonalityCardData] = useState(ProgramPersonalityCardData);

  return (
    <>
      <Helmet>
        <title>
          Personality Development Course In Dehradun | Learn Online/Offline
        </title>
        <meta
          name="description"
          content="Our Personality Development Course is meticulously designed to refine your personality, boost self-confidence, and prepare you for the challenges of a competitive world"
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={programPersonalityData} />
      <ProgramCard programCardData={programPersonalityCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramPersonality;
