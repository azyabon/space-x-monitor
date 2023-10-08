import axios from 'axios';
// @ts-ignore
import {API_BACKEND_URL} from '@env';

export const http = axios.create({
  baseURL: API_BACKEND_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Content-Language': 'ru',
  },
});
