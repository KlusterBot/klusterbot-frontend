import axios from "axios";
import { getToken } from "../services/localStorageServices";


export const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  timeout: 15000,
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
});

baseUrl.interceptors.request.use(
  (req) => {
    req.headers.authorization = `Bearer ${getToken()}`;
    return req;
  },
  (err) => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);


