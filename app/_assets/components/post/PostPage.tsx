import Link from 'next/link';
import parse from 'html-react-parser';
import { PostPageProps } from '../../../../types';

export function PostPage(props: PostPageProps) {
  let postIdString = '';
  let mainContent = '';

  let post = props.post;

  if (post) {
    postIdString = 'post-' + post.id;
    const content = post?.content?.rendered ? post.content.rendered : '';
    mainContent = content.replace('[', '').replace(']', '');
    mainContent = mainContent.replaceAll(
      'class="img-fluid"',
      'class="img-fluid animate__animated animate__fadeIn animate__slow"'
    );
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
          <p id="intro-text">
            The material below is not intended to replace the advice or
            attention of health care professionals. Any changes in your
            nutrition or exercise should be made only with the advice and
            consent of your doctor. Additional disclosures and disclaimers can
            be found here:{' '}
            <Link href="/terms" passHref>
              Legal Disclosures.
            </Link>
          </p>
          <div className="container">{parse(mainContent)}</div>
        </div>
      </section>
    </div>
  );
}
