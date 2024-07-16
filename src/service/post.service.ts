import axios from 'axios';

export async function getPosts() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10'
  );
  return response.data;
}
