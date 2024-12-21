/* eslint-disable no-unused-vars */
import Header from "../../Components/Header/Header";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Handlers from "../../Services/Handlers";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Footer from "../../Components/Footer/Footer";
import ProgramCourse from "./ProgramCourse";
import ProgramFacilities from "./ProgramFacilities";
import ProgramCareer from "./ProgramCareer";
import ProgramTips from "./ProgramTips";
import ProgramAdmission from "./ProgramAdmission";
import ProgramForm from "./ProgramForm";
import ProgramCourseMain from "./ProgramCourseMain";

const Program = () => {
  const { programbannerdata } = Handlers();

  return (
    <>
      <Header />
      <TopBanner bannerdata={programbannerdata} />
      <ProgramCourse />
      <ProgramCourseMain />
      <ProgramFacilities />
      <ProgramCareer />
      {/* <ProgramTips /> */}
      {/* <ProgramAdmission /> */}
      <ProgramForm />

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Program;
