import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.YWFhQGFhYS5jb20.xn-h9ZJf-8YRLlfZ6fou2sHi9r6VQoep5Y0J27W2bCk";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

// const token = localStorage.getItem('token');

instance.defaults.headers.common.Authorization = token || null;
export default instance;
