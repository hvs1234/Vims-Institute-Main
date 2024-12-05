// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Handlers from "../../Services/Handlers";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { contactbannerdata } = Handlers();

  return (
    <>
      <Header />
      <TopBanner bannerdata={contactbannerdata} />
      <ContactForm />

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Contact;
