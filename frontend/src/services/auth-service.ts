import { AxiosRequestConfig } from "axios";
import { CredentialsDTO } from "models/auth";
import QueryString from "qs";
import { requestBackend } from "../utils/request";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import * as accessTokenRepository from "../localstorage/access-token-repository";

export function loginRequest(loginData: CredentialsDTO) {

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  }

  const data = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data,
    headers,
  };

  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}