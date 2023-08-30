import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import mobileMenuStateReducer from "@/redux/slicers/mobileMenuStateSlicer";
import { SlicerName } from "@/redux/slicers/utils/enums/slicerName";

const combinedReducer = combineReducers({
  [SlicerName.MOBILE_MENU_STATE]: mobileMenuStateReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
