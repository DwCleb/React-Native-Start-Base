import axios from 'axios';
import { getToken } from '~/services/deviceStorage';
import Config from '~/configs';
import { clearToken } from './utils';
//
const API = axios.create({
  baseURL: Config.baseURL,
});

API.interceptors.request.use(async (config: any) => {
  const token = (await getToken()) || '';

  if (typeof clearToken(token) === 'string' && token.length > 1) {
    config.headers.Authorization = `Bearer ${clearToken(token)}`;
  }
  return config;
});

// API.interceptors.response.use(async (config) => {
//   const token = await config.headers.Authorization;

//   if (token) {
//     setToken(token)
//   }

//   return config;
// });
// ./

export default API;
