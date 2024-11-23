import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:3300",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const { data } = await instance.get("/api/auth/refresh");
        sessions.set("accessToken", data.data, {
          secure: true,
          expires: 15 / 1440, // Set expired 15 minutes
        });

        error.config.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return instance.request(error.config);
      } catch (refreshError) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
