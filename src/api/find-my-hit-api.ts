import axios from "axios";

export const findMyHitAPI = axios.create({
  baseURL: "https://dws-recruiting-bands.dwsbrazil.io/api",
});

