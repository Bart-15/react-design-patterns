import axios, {type AxiosInstance} from 'axios';

export const axiosPublic: AxiosInstance = axios.create({
  baseURL: process.env.JSON_PLACEHOLDER_URL,
});
