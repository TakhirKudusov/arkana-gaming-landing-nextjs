import { createSlice } from "@reduxjs/toolkit";
import { MobileMenuState } from "@/redux/slicers/utils/types/mobileMenuState";
import { SlicerName } from "@/redux/slicers/utils/enums/slicerName";

const initialState: MobileMenuState = {
  isOpened: false,
};

const mobileMenuStateSlicer = createSlice({
  name: SlicerName.MOBILE_MENU_STATE,
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpened = true;
    },
    closeMenu(state) {
      state.isOpened = false;
    },
  },
});

export const { openMenu, closeMenu } = mobileMenuStateSlicer.actions;

export default mobileMenuStateSlicer.reducer;
