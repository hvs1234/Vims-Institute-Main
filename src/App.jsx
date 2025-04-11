/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Program from "./Pages/Program/Program";
import Admission from "./Pages/Admission/Admission";
import Contact from "./Pages/Contact/Contact";
import Fee from "./Pages/Fee/Fee";
import FeeLink from "./Pages/Fee/FeeLink";
import ProgramDiploma from "./Pages/Program/ProgramDiploma/ProgramDiploma";
import ProgramTourism from "./Pages/Program/ProgramTourism/ProgramTourism";
import ProgramMassMedia from "./Pages/Program/ProgramMassMedia/ProgramMassMedia";
import ProgramPersonality from "./Pages/Program/ProgramPersonality/ProgramPersonality";
import ProgramProfessional from "./Pages/Program/ProgramProfessional/ProgramProfessional";
import Gallery from "./Pages/Gallery/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/admission" element={<Admission />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/fee" element={<Fee />}></Route>
          <Route path="/feelink" element={<FeeLink />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/program/diploma" element={<ProgramDiploma />}></Route>
          <Route path="/program/tourism" element={<ProgramTourism />}></Route>
          <Route
            path="/program/professional"
            element={<ProgramProfessional />}
          ></Route>
          {/* <Route
            path="/program/massMedia"
            element={<ProgramMassMedia />}
          ></Route> */}
          <Route
            path="/program/personality"
            element={<ProgramPersonality />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
