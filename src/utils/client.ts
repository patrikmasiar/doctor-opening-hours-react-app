import axios, { AxiosRequestConfig } from 'axios';
import appConfig from 'config';
import { responseMiddleware } from 'utils/client/middleware';

const config: AxiosRequestConfig = {
  baseURL: `${appConfig.API_URL}/`,
};

const client = axios.create(config);

client.interceptors.response.use(responseMiddleware);

export const get = client.get;
export const post = client.post;
