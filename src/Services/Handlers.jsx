import { useDispatch, useSelector } from "react-redux";
import { setPath, toggleNav } from "./Slice";
import { useCallback, useEffect } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const homepromotedata = useSelector((state) => state.app.homepromotedata);
  const hometipsdata = useSelector((state) => state.app.hometipsdata);
  const homevaluesdata = useSelector((state) => state.app.homevaluesdata);
  const homeprogramdata = useSelector((state) => state.app.homeprogramdata);
  const programadmissioncarddata = useSelector(
    (state) => state.app.programadmissioncarddata
  );

  // Banner Data
  const aboutusbannerdata = useSelector((state) => state.app.aboutusbannerdata);
  const programbannerdata = useSelector((state) => state.app.programbannerdata);
  const admissionbannerdata = useSelector(
    (state) => state.app.admissionbannerdata
  );
  const contactbannerdata = useSelector((state) => state.app.contactbannerdata);

  // Image Data
  const aboutmainimg = useSelector((state) => state.app.aboutmainimg);
  const programimg = useSelector((state) => state.app.programimg);

  // Form Data
  const programformdata = useSelector((state) => state.app.programformdata);
  const admissionformdata = useSelector((state) => state.app.admissionformdata);

  const twocolshomeaboutdata = useSelector(
    (state) => state.app.twocolshomeaboutdata
  );
  const twocolsaboutdata = useSelector((state) => state.app.twocolsaboutdata);
  const abouttipsdata = useSelector((state) => state.app.abouttipsdata);
  const isActive = useSelector((state) => state.app.isActive);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const toggleNavbar = useCallback(() => {
    dispatch(toggleNav());
  }, [dispatch]);

  // Sticky Navbar Logic
  const useStickyNavbar = () => {
    useEffect(() => {
      const sectionHero = document.querySelector(".section-main");

      const observerCallback = (entries) => {
        const ent = entries[0];
        !ent.isIntersecting
          ? document.body.classList.add("sticky")
          : document.body.classList.remove("sticky");
      };

      const options = {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
      };

      const observer = new IntersectionObserver(observerCallback, options);

      if (sectionHero) {
        observer.observe(sectionHero);
      }

      return () => {
        observer.disconnect();
      };
    }, []);
  };

  return {
    handleOnClick,
    navlinkdata,
    homepromotedata,
    hometipsdata,
    homevaluesdata,
    homeprogramdata,
    programadmissioncarddata,

    // Banner Data
    aboutusbannerdata,
    programbannerdata,
    admissionbannerdata,
    contactbannerdata,

    // Image Data
    aboutmainimg,
    programimg,

    // Form Data
    programformdata,
    admissionformdata,

    twocolshomeaboutdata,
    twocolsaboutdata,
    useStickyNavbar,
    isActive,
    toggleNavbar,
    abouttipsdata,
  };
};

export default Handlers;
