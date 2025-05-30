import axios from "axios";

export const apiConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});
