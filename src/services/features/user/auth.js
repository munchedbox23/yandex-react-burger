import { createAsyncThunk } from "@reduxjs/toolkit";
import { request, fetchWithRefresh} from "../../../utils/requests";
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

export const forgotPassword = async (data) => {
  const response = await request(`${API.baseUrl}${API.endpoints.forgotPassword}`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response;
};

export const checkUserAuth = createAsyncThunk('user/getAuthUserData', async() => {
  const response = await fetchWithRefresh(`${API.baseUrl}${API.endpoints.userData}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
  if(response.success) {
    return response;
  }
});

export const editUserData = createAsyncThunk('user/editUserData', async(data) => {
  const response = await fetchWithRefresh(`${API.baseUrl}${API.endpoints.userData}`, {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    body: JSON.stringify(data)
  });
  if(response.success) {
    return response;
  }
});
