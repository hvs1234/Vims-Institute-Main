// import React from 'react'

import ScrollTop from "../../Components/Footer/ScrollTop";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomePromote from "./HomePromote";
import HomeValues from "./HomeValues";

const Home = () => {
  return (
    <>
      <Hero />
      <HomePromote />
      <HomeAbout />
      <HomeValues />

      <ScrollTop />
    </>
  );
};

export default Home;
