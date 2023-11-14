import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';

class Posts extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="adventures" className="service-objects">
        {this.props.posts.map((post) => (
          <div className="row service-item-row" key={post.id}>
            <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
              <div className="services__content">
                <div className="icon fas fa-paper-plane d-block"></div>
                <h3 className="display-3--title">
                  {parse(post.title.rendered)}
                </h3>
                <span className="lh-lg">{parse(post.excerpt.rendered)}</span>
                <div className="learn-btn">
                  <NavLink
                    to={{
                      pathname: '/post',
                      aboutProps: {
                        posts: this.props.posts,
                        postId: post.id,
                      },
                    }}
                    exact
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    Read More
                    <span>
                      <i className="bi bi-book"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <NavLink
                  to={{
                    pathname: '/post',
                    aboutProps: {
                      posts: this.props.posts,
                      postId: post.id,
                    },
                  }}
                  exact
                >
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt="UI Design"
                    className="img-fluid"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
