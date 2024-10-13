import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomePromoteData, HomeTipsData } from "../APIs/HomePromoteAPI";
import { HomeValuesData } from "../APIs/HomeValuesAPI";
import { HomeProgramData } from "../APIs/HomeProgramCardAPI";
import { AboutUsBannerData } from "../APIs/TopBannerAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homepromotedata: HomePromoteData,
  hometipsdata: HomeTipsData,
  homevaluesdata: HomeValuesData,
  homeprogramdata: HomeProgramData,
  aboutusbannerdata: AboutUsBannerData,
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    toggleNav(state) {
      state.isActive = !state.isActive;
    },
    setAPIData(state, action) {
      state.navlinkdata = action.payload;
      state.homepromotedata = action.payload;
      state.hometipsdata = action.payload;
      state.homevaluesdata = action.payload;
      state.homeprogramdata = action.payload;
      state.aboutusbannerdata = action.payload;
    },
  },
});

export const { setPath, setAPIData, toggleNav } = Slice.actions;
export default Slice.reducer;
