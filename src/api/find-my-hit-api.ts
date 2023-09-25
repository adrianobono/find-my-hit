import axios from "axios";

export const findMyHitAPI = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});
