import Axios from "axios";
import { ResApi } from "../Interfaces";

export const GetDadosApi = async () => {
  const Res: ResApi = await Axios.get(
    "https://run.mocky.io/v3/d4a79840-93c0-4297-80bb-108c279377a3"
  )
    .then((e) => e.data.data)
    .catch((e) => e.data);

  return Res;
};
