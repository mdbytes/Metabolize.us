//import Image from "next/image";
import parse from "html-react-parser";
import Layout from "../../components/layout/Layout";
import Seo from "../../components/layout/Seo";
import Link from "next/link";

export default function Post(data) {
  const post = data.post;

  let postIdString = "";
  let mainContent = "";

  if (post) {
    postIdString = "post-" + post.postId;
    const content = post.content;

    mainContent = content.replace("[", "").replace("]", "");
  }

  return (
    <Layout>
      <Seo title={`Article | ${post.title}`} />
      <section id="post" className="post">
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">
              Featured Article
            </h1>
            <div className="heading-line"></div>
          </div>
        </div>

        <div className="container post-text" id={postIdString}>
          <div>
            <h3 className="post-title">{parse(post.title)}</h3>
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              width: "60%",
              margin: "2rem auto",
            }}
          >
            The material below is not intended to replace the advice or
            attention of health care professionals. Any changes in your
            nutrition or exercise should be made only with the advice and
            consent of your doctor. Additional disclosures and disclaimers can
            be found here:{" "}
            <Link href="/privacy" passHref>
              Legal Disclosures.
            </Link>
          </p>
          <div className="container">{parse(mainContent)}</div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://primal.wp.mdbytes.us/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        postId
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://primal.wp.mdbytes.us/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
