import { createSlice } from "@reduxjs/toolkit";
import { getPlansFromStripe } from "./thunkMiddleware";

export const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plans:[],
  },
  reducers: {
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
  
  },
  extraReducers:(builder)=>{
    builder.addCase(getPlansFromStripe.fulfilled,(state,action)=>{
        state.plans = action.payload
    })  
  }
});

export const { setPlans } = plansSlice.actions;

export const selectPlans = (state) => state.plansState.plans;

export default plansSlice.reducer;