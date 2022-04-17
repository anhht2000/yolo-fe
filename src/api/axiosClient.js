import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8081/api/v1",
  // responseType: "json"
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // if (!config.headers.authorization) {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     config.headers.authorization = `bearer ${token}`;
    //   }
    // }
    return config;
  },
  (error) => {}
);

axiosClient.interceptors.response.use(
  (axiosResponse) => {
    return axiosResponse;
  },
  (error) => {}
);

export const fetch = (request) => axiosClient.request(request);

export default axiosClient;
