import { config } from '@spotify/web/shared/app-config';
import { request } from '@spotify/web/shared/http';

const appConfig = config();

export const getAllCategories = () => {
  return request.get(`${ appConfig.API_HOST }/browse/categories`, { params: { limit: 50, offset: 0 } });
};

export const getPlayListByCategoryId = (categoryId: string) => {
  return request.get(`${ appConfig.API_HOST }/browse/categories/${ categoryId }/playlists`, {
    params: {
      limit: 50,
      offset: 0
    }
  });
};

export const getCategoryDetailsById = (categoryId: string) => {
  return request.get(`${ appConfig.API_HOST }/browse/categories/${ categoryId }`);
}
