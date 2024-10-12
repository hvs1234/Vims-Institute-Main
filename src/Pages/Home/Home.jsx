// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
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
  return (
    <>
      <Hero />
      <HomePromote />
      <HomeAbout />
      <HomeValues />
      <HomeFuture />
      <HomeProgram />
      <HomeCareer />
      <HomeTour />
      <HomeGreet />
      <HomeTips />

      {/* Scroll To Top */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
