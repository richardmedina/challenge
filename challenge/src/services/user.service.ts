
import { ApiResponseType } from '../types/ApiResponseType';
import http from './http';

export const getApiResponse = () => http.get<ApiResponseType>('/api');
