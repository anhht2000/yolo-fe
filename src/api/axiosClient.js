import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // responseType: "json"
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    if (!config.headers.authorization) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {}
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error.response)
);

export const fetch = (request) => axiosClient.request(request);

export default axiosClient;
