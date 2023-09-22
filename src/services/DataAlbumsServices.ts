import { AxiosError } from "axios";
import axios from "axios";

export const getAlbums = async (id: string): Promise<any> => {
  const teste = axios.create({
    baseURL: `https://dws-recruiting-bands.dwsbrazil.io/api/albums/${id}`,
  });
  try {
    const { data } = await teste.get("");
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    console.log(err.name);

    return [];
  }
};
