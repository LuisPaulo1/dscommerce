import { requestBackend } from "utils/request";
import { AxiosRequestConfig } from "axios";
import { ProductDTO } from "models/product";

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

export function deleteById(id: number) {
  const config : AxiosRequestConfig = {
    url: `/products/${id}`,
    method: 'DELETE',
    withCredentials: true
  }
  return requestBackend(config);  
}

export function updateRequest(data: ProductDTO) {
  const config : AxiosRequestConfig = {
    url: `/products/${data.id}`,
    method: 'PUT',
    withCredentials: true,
    data
  }
  return requestBackend(config);
}

export function insertRequest(data: ProductDTO) {
  const config : AxiosRequestConfig = {
    url: '/products',
    method: 'POST',
    withCredentials: true,
    data
  }
  return requestBackend(config);
}