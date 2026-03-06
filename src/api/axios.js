import axios from "axios";
import axiosRetry from "axios-retry";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
});

axiosRetry(instance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;