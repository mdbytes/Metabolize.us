import React, { Component } from 'react';
import Link from 'next/link';

export const PostsIntro = () => {
    return (
        <React.Fragment>
            <div className="row text-center">
                <h1 className="display-3 fw-bold">Articles</h1>
                <div className="heading-line mb-1"></div>
            </div>

            <div
                id="services-intro-overview"
                className="row pt-2 mt-1 mb1"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <p style={{ width: '80%', maxWidth: '800px' }}>
                    Below you will find a few featured articles. If you have a
                    question about one of the articles, or are seeking advice,
                    please &nbsp;
                    <Link href="/contact">contact Martin</Link>. &nbsp; &nbsp;
                    Please also be sure to review website &nbsp;
                    <Link href="/terms">terms and limitations</Link>.
                </p>
            </div>
        </React.Fragment>
    );
};
