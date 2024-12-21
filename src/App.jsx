import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Program from "./Pages/Program/Program";
import Admission from "./Pages/Admission/Admission";
import Contact from "./Pages/Contact/Contact";
import Fee from "./Pages/Fee/Fee";
import FeeLink from "./Pages/Fee/FeeLink";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
