import axios, { AxiosResponse } from "axios";
import { axiosHttpRequester } from "./axiosHttpRequester";
import { EnvSettings } from "@/plugins/EnvSettings";

export function axiosFactory() {
  const axiosInstance = axios.create({
    baseURL: EnvSettings.backendUri(),
    headers: {
      Authorization: `Bearer ${EnvSettings.token()}`,
    },
  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
  });

  return axiosHttpRequester(axiosInstance);
}
