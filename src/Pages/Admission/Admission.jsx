/* eslint-disable no-unused-vars */
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AdmissionMain from "./AdmissionMain";
import AdmissionTop from "./AdmissionTop";
import HomeProgram from "../Home/HomeProgram";
import HomePromote from "../Home/HomePromote";
import HomeTour from "../Home/HomeTour";
import HomeTips from "../Home/HomeTips";
import Handlers from "../../Services/Handlers";
import ScrollTop from "../../Components/Footer/ScrollTop";
import AdmissionForm from "./AdmissionForm";
import ProgramAdmission from "../Program/ProgramAdmission";
import { Helmet } from "react-helmet-async";

const Admission = () => {
  const { hometipsdata } = Handlers();

  return (
    <>
      <Helmet>
        <title>
          Get admission in hotel management, Tourism & Mass Communication - VIMS
        </title>
        <meta
          name="description"
          content="Join VIMS for a Diploma in Hotel, Tourism & Mass Communication. Gain expert training, scholarships & global career opportunities. Apply now!"
        />
      </Helmet>
      <Header />
      <AdmissionTop />
      <AdmissionMain />
      <HomeProgram />
      {/* <HomeTour /> */}
      <ProgramAdmission />
      {/* <HomeTips tipsdata={hometipsdata} /> */}

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Admission;
