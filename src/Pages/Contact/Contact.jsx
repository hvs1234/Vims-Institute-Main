// import React from 'react'

import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Get in Touch with VIMS - Reach Out Today!</title>
        <meta
          name="description"
          content="Contact Information: Toll Free No. :  xxx, Landline No. : xxxx , Fax : xxxxx,"
        />
      </Helmet>
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
