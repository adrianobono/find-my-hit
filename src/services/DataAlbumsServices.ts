import { AxiosError } from "axios";
import { findMyHitAPI } from "../api";

export const getAlbums = async (id: string): Promise<any> => {
  try {
    const { data } = await findMyHitAPI.get(`/albums/${id}`);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    console.log(err.name);

    return [];
  }
};
