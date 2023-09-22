import { AxiosError } from "axios";

import { FindBandsDTO } from "../application/types/dto";
import { findByBandsAPI } from "../api";

export const getBands = async (): Promise<FindBandsDTO[]> => {
  try {
    const { data } = await findByBandsAPI.get("");

    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    console.log(err.name);

    return [];
  }
};
