import { useDispatch, useSelector } from "react-redux";
import { setPath, toggleNav } from "./Slice";
import { useCallback } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const homepromotedata = useSelector((state) => state.app.homepromotedata);
  const homevaluesdata = useSelector((state) => state.app.homevaluesdata);
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

  return {
    handleOnClick,
    navlinkdata,
    homepromotedata,
    homevaluesdata,
    isActive,
    toggleNavbar,
  };
};

export default Handlers;
