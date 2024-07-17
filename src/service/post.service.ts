import {axiosPublic} from '@/lib/axios';

export async function getPosts() {
  const response = await axiosPublic.get('/posts?_page=1&_limit=10');
  return response.data;
}
