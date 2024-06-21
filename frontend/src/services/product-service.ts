import { BASE_URL } from "../utils/system";
import axios, { AxiosRequestConfig } from "axios";

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
  const config : AxiosRequestConfig = {
    baseURL: BASE_URL,
    url: '/products',
    method: 'GET',
    params: {
      page,
      name,
      size,
      sort
    }
  }
  return axios.request(config);
}

export function findById(id: number) {
  return axios.get(`${BASE_URL}/products/${id}`);
}