import { request, config } from '@spotify/web/shared/app-config';
const appConfig = config();

export const getAllCategories = () => {
  return request.get(`${appConfig.API_HOST}/browse/categories`, { params: {limit: 50, offset: 0} })
}
