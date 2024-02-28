import { AxiosInstance } from "axios";
import { HttpRequester } from "./HttpRequester";

export function axiosHttpRequester(axios: AxiosInstance): HttpRequester {
  function get<T>(
    route: string,
    params?: Record<string, unknown> | undefined,
  ): Promise<T> {
    return axios.get(route, { params });
  }

  return { get };
}
