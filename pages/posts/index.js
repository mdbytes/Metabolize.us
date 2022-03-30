import React from "react";
import PostsIntro from "../../components/posts/PostsIntro";
import Posts from "../../components/posts/Posts";
import Layout from "../../components/layout/Layout";
import Seo from "../../components/layout/Seo";

const PostsPage = (data) => {
  const posts = data.posts.nodes;

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
  const result = await fetch("https://goprimalstrength.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query AllPostQuery {
        posts {
          nodes {
            slug
            title(format: RENDERED)
            content(format: RENDERED)
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }`,
    }),
  });
  const json = await result.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}

export default PostsPage;
