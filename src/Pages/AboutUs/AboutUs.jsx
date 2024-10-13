// import React from 'react'

import Header from "../../Components/Header/Header";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Handlers from "../../Services/Handlers";
import AboutMain from "./AboutMain";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const { aboutusbannerdata } = Handlers();

  return (
    <>
      <Header />
      <TopBanner bannerdata={aboutusbannerdata} />
      <AboutMain />

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default AboutUs;
