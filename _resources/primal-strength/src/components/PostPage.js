import React from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const PostPage = () => {
  const location = useLocation();

  let postId;
  let post;
  let posts;

  if (location.aboutProps) {
    posts = location.aboutProps.posts;
    post = posts.filter(
      (post) => post.id === Number.parseInt(location.aboutProps.postId)
    )[0];
    window.localStorage.setItem(
      'posts',
      JSON.stringify(location.aboutProps.posts)
    );
    window.localStorage.setItem(
      'postId',
      JSON.stringify(location.aboutProps.postId)
    );
  } else if (window.localStorage.getItem('posts')) {
    posts = JSON.parse(window.localStorage.getItem('posts'));
    postId = JSON.parse(window.localStorage.getItem('postId'));
    post = posts.filter((post) => post.id === Number.parseInt(postId))[0];
  } else {
    window.location.href = '/posts';
  }

  const postIdString = 'post-' + post.id;
  const content = post.content.rendered;
  const galleryBeginningIndex = content.indexOf(
    '<figure class="wp-block-image '
  );
  const mainContent = content
    .slice(0, galleryBeginningIndex)
    .replace('[', '')
    .replace(']', '');
  const galleryContent = content.slice(galleryBeginningIndex);
  let beginningIndex = 0;
  let startsWithUrl = '';
  let url = '';
  let remainingGallery = galleryContent;
  let portfolioDetails = {};
  let images = [];
  let elements = [];

  let portfolioImage = {};
  let portfolioElement = {};
  let morePhotos = true;
  let slideLocation = 0;

  while (morePhotos) {
    if (remainingGallery.indexOf('src=') === -1) {
      morePhotos = false;
      continue;
    }
    beginningIndex = remainingGallery.indexOf('src=') + 5;
    startsWithUrl = remainingGallery.slice(beginningIndex);
    url = startsWithUrl.slice(0, startsWithUrl.indexOf('"'));
    remainingGallery = startsWithUrl.slice(startsWithUrl.indexOf('"'));
    portfolioImage = {
      image: url,
      slideLocation: slideLocation,
    };

    portfolioElement = {
      href: url,
      type: 'image',
    };

    images.push(portfolioImage);
    elements.push(portfolioElement);
    slideLocation += 1;
  }

  portfolioDetails.images = images;
  portfolioDetails.elements = elements;

  //document.querySelector("#homeLink").classList.remove("active");

  return (
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
          The material below is not intended to replace the advice or attention
          of health care professionals. Any changes in your nutrition or
          exercise should be made only with the advice and consent of your
          doctor. Additional disclosures and disclaimers can be found here:{' '}
          <a href="/privacy">Legal Disclosures.</a>
        </p>
        {parse(mainContent)}
      </div>
    </section>
  );
};

export default PostPage;
