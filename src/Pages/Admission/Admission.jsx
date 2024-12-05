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

const Admission = () => {
  const { hometipsdata } = Handlers();

  return (
    <>
      <Header />
      <AdmissionTop />
      <AdmissionMain />
      <HomeProgram />
      <HomePromote />
      <HomeTour />
      <HomeTips tipsdata={hometipsdata} />

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Admission;
