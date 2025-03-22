/* eslint-disable no-unused-vars */
// import React from 'react'

import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Handlers from "../../Services/Handlers";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeCareer from "./HomeCareer";
import HomeFuture from "./HomeFuture";
import HomeGreet from "./HomeGreet";
import HomeProgram from "./HomeProgram";
import HomePromote from "./HomePromote";
import HomeTips from "./HomeTips";
import HomeTour from "./HomeTour";
import HomeValues from "./HomeValues";

const Home = () => {
  const { twocolshomeaboutdata } = Handlers();

  return (
    <>
      <Helmet>
        <title>
          Verma Institute Of Management Studies - Best Hotel Management
          Institute in Dehradun
        </title>
        <meta
          name="description"
          content="Join Verma Institute of Management Studies & excel in hospitality with expert training, global exposure & world-class facilities. Apply now!"
        />
      </Helmet>
      <Hero />
      <HomePromote />
      <HomeAbout twocolsdata={twocolshomeaboutdata} />
      <HomeValues />
      <HomeFuture />
      <HomeProgram />
      <HomeCareer />
      {/* <HomeTour /> */}
      <HomeGreet />
      {/* <HomeTips /> */}

      {/* Scroll To Top */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
