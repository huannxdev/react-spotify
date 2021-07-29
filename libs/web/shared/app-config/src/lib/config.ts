import { environment } from '../../../../../../apps/spotify/src/environments/environment';

export const config = () =>  ({
  API_HOST: environment.apiUrl,
  CALLBACK_API: environment.callbackUrl,
  APP_ENV_PROD: environment.production
});
