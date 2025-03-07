/* eslint-disable no-unused-vars */
// import React from 'react'

import Header from "../../Components/Header/Header";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Handlers from "../../Services/Handlers";
import AboutMain from "./AboutMain";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Footer from "../../Components/Footer/Footer";
import AboutVims from "./AboutVims";
import HomeAbout from "../Home/HomeAbout";
import AboutMember from "./AboutMember";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const { aboutusbannerdata, twocolsaboutdata } = Handlers();

  return (
    <>
      <Helmet>
        <title>About us - Verma Institute Of Management Studies</title>
        <meta
          name="description"
          content="Study hospitality in Dehradun with VIMS! Gain hands-on training, internships & global exposure. Learn from industry experts. Apply now!"
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={aboutusbannerdata} />
      <AboutMain />
      <AboutVims />
      <HomeAbout twocolsdata={twocolsaboutdata} />
      {/* <AboutMember /> */}

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default AboutUs;
