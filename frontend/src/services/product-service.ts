import { requestBackend } from "../utils/request";
import { AxiosRequestConfig } from "axios";

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
  const config : AxiosRequestConfig = {
    url: '/products',
    method: 'GET',
    params: {
      page,
      name,
      size,
      sort
    }
  }
  return requestBackend(config);
}

export function findById(id: number) {
  return requestBackend({ url: `/products/${id}` });
}