import axios from 'axios';

console.log(process.env.WP_REST_GET_POSTS_URL);

export async function getAllPosts() {
  const url = process.env.WP_REST_GET_POSTS_URL as string;
  const result = await axios.get(url);

  return result.data;
}

export async function getPostBySlug(slug: string) {
  const url = process.env.WP_REST_GET_POST_WITH_SLUG_URL as string;
  const result = await axios.get(`${url}${slug}`);

  console.log('result', result);

  return result.data[0];
}
