import PostsPage from '../../_assets/components/posts/PostsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts | Primal Strength and Conditioning',
};

export default async function Posts() {
  return <PostsPage />;
}
