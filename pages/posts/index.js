import React from 'react';
import PostsIntro from '../../components/posts/PostsIntro';
import Posts from '../../components/posts/Posts';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/layout/Seo';
import axios from 'axios';

const PostsPage = (data) => {
  const posts = data.posts;

  if (posts) {
    return (
      <Layout>
        <Seo title="Training Articles" />
        <section id="services" className="services">
          <div className="container">
            <PostsIntro />
            <Posts posts={posts} />
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Seo title="Training Articles" />
        <section id="services" className="services">
          <div className="container">
            <PostsIntro />
            <h3>Posts loading</h3>
          </div>
        </section>
      </Layout>
    );
  }
};

export async function getStaticProps() {
  const result = await axios.get(
    'https://goprimalstrength.com/wp-json/wp/v2/posts?_embed'
  );

  return {
    props: {
      posts: result.data,
    },
  };
}

export default PostsPage;
