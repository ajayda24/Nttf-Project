import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSelectedPage: "home",
  userData: {
    name: "",
    uid: "",
    photoUrl: "",
    email: "",
  },
  error: {
    state: false,
    message: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserSelectedPage: (state, action) => {
      state.userSelectedPage = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserSelectedPage, setUser, setError } = authSlice.actions;

export default authSlice.reducer;
