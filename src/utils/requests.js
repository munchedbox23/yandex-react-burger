import { API } from "./constants";

const checkResponse = (response) => {
  if(!response.ok) {
    throw new Error(`Error when executing the request`)
  }
  return response.json();
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export {checkResponse, request};

export const refreshToken = () => {
  return fetch(`${API.baseUrl}${API.endpoints.refreshToken}`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({token: localStorage.getItem('refreshToken')})
  });
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken.split('Bearer ')[1]);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
