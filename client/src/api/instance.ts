import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token !== "")
    instance.defaults.headers.common.Authorization = token || "";

  return config;
});

export default instance;
