import axios from "axios";

import { getAuthToken } from "../utils/helpers";
import { BASE_API_URL } from "../utils/constants";

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: { "Content-Type": "application/json" },
});

/**
 * Add auth token to request headers
 * @param {InternalAxiosRequestConfig} config
 * @returns {InternalAxiosRequestConfig}
 */
function onFulfilledRequest(config) {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

api.interceptors.request.use(onFulfilledRequest, (error) => Promise.reject(error));
