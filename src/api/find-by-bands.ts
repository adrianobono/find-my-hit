import axios from "axios";

export const findByBandsAPI = axios.create({
  baseURL: "https://dws-recruiting-bands.dwsbrazil.io/api/bands",
});

