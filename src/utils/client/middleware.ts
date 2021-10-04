import { AxiosResponse } from 'axios';

export function responseMiddleware(response: AxiosResponse) {
  if (response.status !== 200) {
    return Promise.reject({
      response,
    });
  }

  return response.data;
}