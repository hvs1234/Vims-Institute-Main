/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import { ProgramMassMediaData } from "../../../APIs/TopBannerAPI";
import ProgramCard from "../../../Components/Card/ProgramCard";
import { ProgramMassMediaCardData } from "../../../APIs/ProgramCardAPI";
import { Helmet } from "react-helmet-async";

const ProgramMassMedia = () => {
  const [programMassMediaData] = useState(ProgramMassMediaData);
  const [programMassMediaCardData] = useState(ProgramMassMediaCardData);

  return (
    <>
      <Helmet>
        <title>Mass Media and Communication Course | Practical Learning</title>
        <meta
          name="description"
          content="Enroll in our Mass Media and Communication Course to gain hands-on experience, industry exposure, and practical knowledge for a successful career."
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={programMassMediaData} />
      <ProgramCard programCardData={programMassMediaCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramMassMedia;
