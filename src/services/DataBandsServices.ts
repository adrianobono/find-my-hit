import { AxiosError } from "axios";

import { FindBandsDTO } from "../application/types/dto";
import { findMyHitAPI } from "../api";

export const getBands = async (): Promise<FindBandsDTO[]> => {
  try {
    const { data } = await findMyHitAPI.get("/bands");

    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    console.log(err.name);

    return [];
  }
};
