import { config } from '../../../app-config/src/lib/config';
import axios, { AxiosInstance } from 'axios';
import { redirectAuthorize } from '@spotify/web/auth';


const API_URL = config().API_HOST;
const request : AxiosInstance= axios.create({
  baseURL: API_URL,
});
request.defaults.headers.post['Content-Type'] = 'application/json';
request.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
request.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    return new Promise(() => {
      redirectAuthorize();
    });
  }
  return Promise.reject(error);
});

const setToken = (token: string) => {
  request.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { request, setToken };
