/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ScrollTop from "../../../Components/Footer/ScrollTop";
import { ProgramDiplomaData } from "../../../APIs/TopBannerAPI";
import TopBanner from "../../../Components/TopBanner/TopBanner";
import ProgramCard from "../../../Components/Card/ProgramCard";
import { ProgramDiplomaCardData } from "../../../APIs/ProgramCardAPI";
import { Helmet } from "react-helmet-async";

const ProgramDiploma = () => {
  const [programDiplomadata] = useState(ProgramDiplomaData);
  const [programDiplomaCardData] = useState(ProgramDiplomaCardData);

  return (
    <>
      <Helmet>
        <title>One Year Diploma in Hotel Management - VIMS</title>
        <meta
          name="description"
          content="Upon completing the one year diploma in hotel management, you will be well-equipped to take on various roles in esteemed organizations"
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={programDiplomadata} />
      <ProgramCard programCardData={programDiplomaCardData} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default ProgramDiploma;
