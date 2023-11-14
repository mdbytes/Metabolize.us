//import Image from "next/image";
import parse from 'html-react-parser';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/layout/Seo';
import Link from 'next/link';
import axios from 'axios';

export default function Post(data) {
  const post = data.post[0];

  let postIdString = '';
  let mainContent = '';

  if (post) {
    postIdString = 'post-' + post.id;
    const content = post.content?.rendered ? post.content.rendered : '';

    mainContent = content.replace('[', '').replace(']', '');
  }

  return (
    <Layout>
      <Seo title={`Article | ${post.title.rendered}`} />
      <section id="post" className="post">
        <div className="container">
          <div className="row text-center mt-5 mb-5"></div>
        </div>

        <div className="container post-text mt-5 mb-5" id={postIdString}>
          <div>
            <h3 className="post-title">{parse(post.title.rendered)}</h3>
          </div>
          <p
            style={{
              fontStyle: 'italic',
              fontSize: '14px',
              width: '60%',
              margin: '2rem auto',
            }}
          >
            The material below is not intended to replace the advice or
            attention of health care professionals. Any changes in your
            nutrition or exercise should be made only with the advice and
            consent of your doctor. Additional disclosures and disclaimers can
            be found here:{' '}
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
  const result = await axios.get(
    `https://goprimalstrength.com/wp-json/wp/v2/posts?slug=${context.params.slug}`
  );

  return {
    props: {
      post: result.data,
    },
  };
}

export async function getStaticPaths() {
  const result = await axios.get(
    'https://goprimalstrength.com/wp-json/wp/v2/posts'
  );

  const posts = result.data;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
