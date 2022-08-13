import axios from "axios";
import { Storage } from "./storage";
const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
  function (config) {
    const token = Storage.get({ key: "token", persist: false });
    if (token !== "")
      instance.defaults.headers.common.Authorization = token || "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      Storage.set({ key: "token", persist: false, value: response.data.token });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
