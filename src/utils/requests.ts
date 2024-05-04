import { API } from "./constants";
import { cookies } from "../services/features/user/auth";
import { IRefreshToken, TTokenError } from "../types/user-types";

export const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const request = <T>(url: string, options?: RequestInit): Promise<T> => {
  return fetch(url, options).then(checkResponse<T>);
};

export const refreshToken = (): Promise<IRefreshToken> => {
  return request(`${API.baseUrl}${API.endpoints.refreshToken}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: cookies.get("refreshToken") }),
  });
};

export const fetchWithRefresh = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  try {
    const res = await request<T>(url, options);
    return res;
  } catch (err: unknown) {
    if ((err as TTokenError).message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      cookies.set("refreshToken", refreshData.refreshToken);
      cookies.set("accessToken", refreshData.accessToken.split("Bearer ")[1]);
      const headers: Record<string, string> = {
        "Content-type": "application/json",
      };
      headers.authorization = refreshData.accessToken;
      const res = await request<T>(url, options);
      return res;
    } else {
      return Promise.reject(err);
    }
  }
};
