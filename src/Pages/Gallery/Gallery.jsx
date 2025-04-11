/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { GalleryBannerData } from "../../APIs/TopBannerAPI";
import TopBanner from "../../Components/TopBanner/TopBanner";
import GalleryMain from "./GalleryMain";

const Gallery = () => {
  const [galleryBannerData] = useState(GalleryBannerData);

  return (
    <>
      <Helmet>
        <title>Gallery | Verma Institute Of Management Studies</title>
        <meta
          name="description"
          content="View the VIMS gallery showcasing campus events, student activities, and academic achievements. Experience life at VIMS through our photos."
        />
      </Helmet>
      <Header />
      <TopBanner bannerdata={galleryBannerData} />
      <GalleryMain />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Gallery;
