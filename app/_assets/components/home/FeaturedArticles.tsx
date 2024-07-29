import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import { getFeaturedPosts } from '../../utils/wp-rest-api';

export default async function FeaturedArticles() {
    let featuredPosts = await getFeaturedPosts();

    if (featuredPosts.length > 0) {
        return (
            <div id="featured-posts" className="featured-posts">
                <h2 className="text-center">Articles</h2>
                <div className="row">
                    {featuredPosts.map((post) => {
                        let postLink = `/post/${post.slug}`;

                        return (
                            <div key={post.id} className="card col-lg-4">
                                <h5 className="card-title text-center">
                                    <a
                                        href={postLink}
                                        className="no-decoration"
                                    >
                                        {post.title.rendered}
                                    </a>
                                </h5>
                                <div className="card-img-holder">
                                    <Image
                                        src={
                                            post['_embedded'][
                                                'wp:featuredmedia'
                                            ][0]['source_url']
                                        }
                                        width="600"
                                        className="img-fluid"
                                        alt={post.title.rendered}
                                        height="300"
                                    />
                                </div>

                                <div className="card-body">
                                    <p className="card-text">
                                        {parse(
                                            post.excerpt.rendered
                                                .replace('[&hellip;]', '')
                                                .replace('<p>', '<span>')
                                                .replace('</p>', '</span>')
                                        )}
                                        <span>... </span>
                                        <a href={postLink} className="nu gray">
                                            {' '}
                                            read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
