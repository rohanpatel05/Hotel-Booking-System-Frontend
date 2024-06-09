import axios from "axios";
import { BASE_URL } from "./url.js";

const axiosInstanceProtected = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const axiosInstancePublic = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export { axiosInstanceProtected, axiosInstancePublic };
