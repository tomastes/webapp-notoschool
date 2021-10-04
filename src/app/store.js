import { configureStore } from '@reduxjs/toolkit';
import appReducer from "../features/appSlice";
import plansReducer from "../features/plansSlice";

export const store = configureStore({
  reducer: {
    appState: appReducer,
    plansState:plansReducer
  },
})  ;
