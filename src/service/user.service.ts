import {axiosPublic} from '@/lib/axios';

export async function getUsers() {
  const response = await axiosPublic.get('/users');
  return response.data;
}
