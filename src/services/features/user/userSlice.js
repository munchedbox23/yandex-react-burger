import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./auth";

const initialState = {
  user: null,
  isRequestLoading: false,
  isRequestFailed: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(userLogin.pending, (state) => {
      state.isRequestLoading = true;
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRequestLoading = false;
      state.isRequestFailed = false;
    })
    .addCase(userLogin.rejected, (state) => {
      state.isRequestLoading = false;
      state.isRequestFailed = true;
    })
    .addCase(userRegister.pending, (state) => {
      state.isRequestLoading = true;
    })
    .addCase(userRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRequestLoading = false;
      state.isRequestFailed = false;
      console.log(state.user);
    })
    .addCase(userRegister.rejected, (state) => {
      state.isRequestLoading = false;
      state.isRequestFailed = true;
    })
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
