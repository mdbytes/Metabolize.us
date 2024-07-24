import React from 'react';
import PostsPage from '../../_assets/components/posts/PostsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Posts | Metabolic Victory',
};

export default async function Posts() {
    return <PostsPage />;
}
