import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      if (payload === "logout") {
        state.user = null;
      }
    },
  },
});
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
