import { default as myAxios } from "axios";
import { BASE_URL } from "../../config/config";

const AxiosApi = myAxios.create();

// Replace this with your own backend base URL
AxiosApi.defaults.baseURL = BASE_URL;
console.log(BASE_URL);

AxiosApi.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Adding Authorization header for all requests
AxiosApi.interceptors.request.use(
  async (config) => {
    if (config.url === "/user/api/v1/login/" || config.url === "/user/api/v1/register/") {
      return config;
    }
    const token = localStorage.getItem("access").replace(/['"]+/g, "");

    if (token) {
      // Configure this as per your backend requirements
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default AxiosApi;
