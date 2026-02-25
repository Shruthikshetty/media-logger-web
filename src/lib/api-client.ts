/**
 * Api client extending the axios for making api calls
 */

import env from '@/env';
import axios from 'axios';
import Cookies from 'js-cookie';
import { COOKIE_NAMES } from '@/src/constants/config.constants';
import { useAuthStore } from '../state-management/auth.store';

// create axios instance
const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axios interceptor to add auth token to the request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get(COOKIE_NAMES.token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// axios interceptor to handle the 401 or invalid token response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      // reset the auth store
      useAuthStore.getState().resetAuth();
      // remove the token from cookie
      Cookies.remove(COOKIE_NAMES.token);
    }
    // reject with error
    return Promise.reject(error);
  },
);

export default axiosInstance;
