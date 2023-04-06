import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSelectedPage: "home",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUserSelectedPage: (state, action) => {
      state.userSelectedPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserSelectedPage } = authSlice.actions;

export default authSlice.reducer;
