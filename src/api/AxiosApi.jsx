import { default as myAxios } from "axios";
import { BASE_URL } from "../../config/config";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

class TokenService {
  constructor() {
    this.accessToken = localStorage.getItem("access");
    this.refreshToken = localStorage.getItem("refresh");
  }

  getAccessToken() {
    return this.accessToken;
  } 

  setAccessToken(accessToken) {
    localStorage.setItem("access", accessToken);
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  setRefreshToken(refreshToken) {
    localStorage.setItem("refresh", refreshToken);
  }

  async rotateRefreshToken() {
    console.log("Rotating refresh token");
    const endpoint = BASE_URL +  "/user/api/token/refresh/"; // assuming this is the correct endpoint
    const data = {
      refresh: this.refreshToken,
    };

    try {
      const response = await myAxios.post(endpoint, data);
      if (response.status !== 200) {
        this.accessToken = null;
        this.refreshToken = null;
        localStorage.removeItem("authenticated")
        window.location.reload();
        throw new Error("Failed to refresh token");
      }
      this.accessToken = response?.data?.access;
      this.refreshToken = response?.data?.refresh;
      this.setAccessToken(this.accessToken);
      this.setRefreshToken(this.refreshToken);
      return this.accessToken;
    } catch (error) {
      this.setAccessToken(null);
      this.setRefreshToken(null);
      localStorage.removeItem("authenticated");
      alert("Session expired. Please login again.")
      window.location.reload();
      console.log("Failed to refresh access token:", error);
      throw error;
    }
  }
}

const AxiosApi = myAxios.create();
const tokenService = new TokenService();

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
    if (
      config.url === "/user/api/v1/login/" ||
      config.url === "/user/api/v1/register/"
    ) {
      return config;
    }
    let token = tokenService.getAccessToken();
    token = token.replace(/['"]+/g, "");

    const decodedToken = jwt_decode(token);
    const is_expired = dayjs().isAfter(dayjs.unix(decodedToken.exp));

    if (is_expired) {
      try {
        const response = await tokenService.rotateRefreshToken();
        token = response;
      } catch (error) {
        console.log("Failed to refresh access token:", error);
        throw error;
      }
    }

    if (token) {
      // Configure this as per your backend requirements
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },


  (error) => {
    console.log("Error Occured ");
    console.log(error?.response);
    return Promise.reject(error);
  }
);

// AxiosApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const response = await tokenService.rotateRefreshToken();
//         AxiosApi.defaults.headers.common["Authorization"] =
//           "Bearer " + response;
//         return AxiosApi(originalRequest);
//       } catch (_error) {
//         return Promise.reject(_error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );



export default AxiosApi;
