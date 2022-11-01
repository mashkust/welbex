import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const BACKEND_URL = 'http://localhost:8000/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
  );
  return api;
};

const api = createAPI();

export default api;