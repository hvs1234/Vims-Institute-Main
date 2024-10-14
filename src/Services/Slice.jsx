import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomePromoteData, HomeTipsData } from "../APIs/HomePromoteAPI";
import { HomeValuesData } from "../APIs/HomeValuesAPI";
import { HomeProgramData } from "../APIs/HomeProgramCardAPI";
import { AboutUsBannerData } from "../APIs/TopBannerAPI";
import { AboutMainImg } from "../APIs/ImageCardAPI";
import { TwoColsAboutData, TwoColsHomeAboutData } from "../APIs/TwoColsDataAPI";
import { AboutTipsData } from "../APIs/TipsAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homepromotedata: HomePromoteData,
  hometipsdata: HomeTipsData,
  homevaluesdata: HomeValuesData,
  homeprogramdata: HomeProgramData,
  aboutusbannerdata: AboutUsBannerData,
  aboutmainimg: AboutMainImg,
  twocolshomeaboutdata: TwoColsHomeAboutData,
  twocolsaboutdata: TwoColsAboutData,
  abouttipsdata: AboutTipsData,
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
      state.aboutmainimg = action.payload;
      state.twocolshomeaboutdata = action.payload;
      state.twocolsaboutdata = action.payload;
      state.abouttipsdata = action.payload;
    },
  },
});

export const { setPath, setAPIData, toggleNav } = Slice.actions;
export default Slice.reducer;
