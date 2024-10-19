import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomePromoteData, HomeTipsData } from "../APIs/HomePromoteAPI";
import { HomeValuesData } from "../APIs/HomeValuesAPI";
import { HomeProgramData } from "../APIs/HomeProgramCardAPI";
import { AboutUsBannerData, ProgramBannerData } from "../APIs/TopBannerAPI";
import { AboutMainImg, ProgramImg } from "../APIs/ImageCardAPI";
import { TwoColsAboutData, TwoColsHomeAboutData } from "../APIs/TwoColsDataAPI";
import { AboutTipsData } from "../APIs/TipsAPI";
import { ProgramFormData } from "../APIs/FormAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homepromotedata: HomePromoteData,
  hometipsdata: HomeTipsData,
  homevaluesdata: HomeValuesData,
  homeprogramdata: HomeProgramData,
  twocolshomeaboutdata: TwoColsHomeAboutData,
  twocolsaboutdata: TwoColsAboutData,
  abouttipsdata: AboutTipsData,

  // Image Data API
  aboutmainimg: AboutMainImg,
  programimg: ProgramImg,

  // Banner Data API
  aboutusbannerdata: AboutUsBannerData,
  programbannerdata: ProgramBannerData,

  // Form API
  programformdata: ProgramFormData,
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

      // Banner State Slice
      state.aboutusbannerdata = action.payload;
      state.programbannerdata = action.payload;

      // Image State Slice
      state.aboutmainimg = action.payload;
      state.programimg = action.payload;

      // Form State Slice
      state.programformdata = action.payload;

      state.twocolshomeaboutdata = action.payload;
      state.twocolsaboutdata = action.payload;
      state.abouttipsdata = action.payload;
    },
  },
});

export const { setPath, setAPIData, toggleNav } = Slice.actions;
export default Slice.reducer;
