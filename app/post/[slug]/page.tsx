import parse from 'html-react-parser';
import { getAllPosts, getPostBySlug } from '../../_assets/utils/wp-rest-api';
import { PostPage } from '../../_assets/components/post/PostPage';

import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
  let posts = await getAllPosts();

  let staticParams = [];

  for (let post of posts) {
    staticParams.push({ slug: post.slug });
  }

  return staticParams;
}

export default async function page({ params }: { params: { slug: string } }) {
  console.log(params);

  const post: Post = await getPostBySlug(params.slug);

  return <PostPage post={post} />;
}
