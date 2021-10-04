import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "mode",
  initialState: {
    mode: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export const selectAppState = (state) => state.appState.mode;

export default appSlice.reducer;