import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../utils/requests";
import { API } from "../../../utils/constants";

export const userRegister = createAsyncThunk('user/userRegister', async(form) => {
    const response = await request(`${API.baseUrl}${API.endpoints.register}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form)
    });
    return response;
});

export const userLogin = createAsyncThunk('user/userLogin', async(form) => {
  const response = await request(`${API.baseUrl}${API.endpoints.login}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(form)
  });
  if(response.success) {
    return response;
  }
});

export const userLogout = createAsyncThunk('user/userLogout', async() => {
  const response = await request(`${API.baseUrl}${API.endpoints.logout}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({token: localStorage.getItem('refreshToken')})
  });
  if(response.success) {
    return response;
  }
});

export const updateToken = createAsyncThunk('user/updateToken', async() => {
  const response = await request(`${API.baseUrl}${API.endpoints.refreshToken}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({token: localStorage.getItem('refreshToken')})
  });
  if(response.success) {
    localStorage.setItem('accessToken', response.accessToken.split('Bearer ')[1]);
    localStorage.setItem('refreshToken', response.refreshToken);
  }
});
