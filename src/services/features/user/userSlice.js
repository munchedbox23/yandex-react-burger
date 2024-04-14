import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, userLogout, editUserData, getAuthUserData} from "./auth";

const initialState = {
  user: null,
  isRequestLoading: false,
  isRequestFailed: false,
  isUserChecked: false
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
      state.user = action.payload.user;
      localStorage.setItem('accessToken', action.payload.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
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
      localStorage.setItem('accessToken', action.payload.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      state.user = action.payload.user;
      state.isRequestLoading = false;
      state.isRequestFailed = false;
    })
    .addCase(userRegister.rejected, (state) => {
      state.isRequestLoading = false;
      state.isRequestFailed = true;
    })
    .addCase(userLogout.pending, (state) => {
      state.isRequestLoading = true;
    })
    .addCase(userLogout.fulfilled, (state) => {
      state.user = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      state.isRequestFailed = false;
      state.isRequestLoading = false;
    })
    .addCase(userLogout.rejected, (state) => {
      state.isRequestFailed = true;
    })
    .addCase(getAuthUserData.pending, (state) =>{
      state.isRequestFailed = false;
      state.isRequestLoading = true;
    })
    .addCase(getAuthUserData.fulfilled, (state, action) =>{
      state.user = action.payload;
      state.isRequestFailed = false;
      state.isRequestLoading = false;
    })
    .addCase(getAuthUserData.rejected, (state) =>{
      state.isRequestFailed = true;
      state.isRequestLoading = false;
    })
    .addCase(editUserData.pending, (state) =>{
      state.isRequestLoading = true;
    })
    .addCase(editUserData.fulfilled, (state, action) =>{
      state.user = action.payload;
      state.isRequestFailed = false;
      state.isRequestLoading = false;
    })
    .addCase(editUserData.rejected, (state) =>{
      state.isRequestFailed = true;
      state.isRequestLoading = false;
    })
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
