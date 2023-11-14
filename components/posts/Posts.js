import React, { Component } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';

class Posts extends Component {
  componentDidMount() {}

  render() {
    for (let post of this.props.posts) {
      if (!post.excerpt.rendered) {
        post.excerpt.rendered = post.content.rendered.slice(0, 250);
      }
    }

    return (
      <div id="adventures" className="service-objects">
        {this.props.posts.map((post) => (
          <div className="row service-item-row" key={post.postId}>
            <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
              <div className="services__content">
                <div className="icon fas fa-paper-plane d-block"></div>
                <h3 className="display-3--title">
                  {parse(post.title.rendered)}
                </h3>
                <span className="lh-lg">
                  {post.excerpt.rendered
                    ? parse(post.excerpt.rendered)
                    : parse(post.content.rendered.slice(0, 250))}
                </span>
                <div className="learn-btn">
                  <Link href={'/post/' + post.slug} passHref>
                    <div className="rounded-pill btn-rounded border-primary">
                      Read More
                      <span>
                        <i className="bi bi-book"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <Link href={'/post/' + post.slug} passHref>
                  <Image
                    fill
                    src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                    alt="UI Design"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
