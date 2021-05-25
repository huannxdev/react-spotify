import { request, config } from '@spotify/web/shared/app-config';
import { AxiosResponse } from 'axios';
export const getMe = () => {
  return request.get(`${config.API_HOST}/me`);
}
