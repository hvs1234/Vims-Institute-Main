// import React from 'react'

import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import FeeMain from "./FeeMain";

const Fee = () => {
  return (
    <>
      <Helmet>
        <title>
          Fees for 1 year Diploma in Hotel, Tourism & Mass Communication
        </title>
        <meta
          name="description"
          content="Pay VIMS fees online for 2024-25. Enter details, verify, make payment & download receipt. Secure & hassle-free process. Pay now!"
        />
      </Helmet>
      <Header />
      <FeeMain />

      {/* Scroll To Top */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default Fee;
