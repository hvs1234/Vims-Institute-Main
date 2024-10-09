import { createSlice } from "@reduxjs/toolkit";
import { NavLinkData } from "../APIs/NavAPI";
import { HomePromoteData } from "../APIs/HomePromoteAPI";
import { HomeValuesData } from "../APIs/HomeValuesAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLinkData,
  homepromotedata: HomePromoteData,
  homevaluesdata: HomeValuesData,
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
      state.homevaluesdata = action.payload;
    },
  },
});

export const { setPath, setAPIData, toggleNav } = Slice.actions;
export default Slice.reducer;
