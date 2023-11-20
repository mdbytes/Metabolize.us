import Link from 'next/link';
import parse from 'html-react-parser';

export function PostPage(props: PostPageProps) {
  console.log('post', props.post);

  let postIdString = '';
  let mainContent = '';

  let post = props.post;

  if (post) {
    postIdString = 'post-' + post.id;
    const content = post?.content?.rendered ? post.content.rendered : '';
    console.log(post);
    mainContent = content.replace('[', '').replace(']', '');
  }

  return (
    <div className="post-page">
      <section id="post" className="post">
        <div className="container">
          <div className="row text-center mt-5 mb-5"></div>
        </div>

        <div className="container post-text" id={postIdString}>
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
    </div>
  );
}
