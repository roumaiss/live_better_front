import axios from "axios";

export const apiConfig = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});
