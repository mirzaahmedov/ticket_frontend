import { createSlice } from "@reduxjs/toolkit";

export type TAuthData = {
  isLoggedIn: boolean;
  user: unknown;
};

const initialState: TAuthData = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setAuthUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default authSlice;
