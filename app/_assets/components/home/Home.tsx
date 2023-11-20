import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="app">
      <section id="home" className="intro-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 intros">
              <div id="intro">
                <h1 className="company-font">
                  Primal Strength
                  <br />
                </h1>
                <span className="display-2--description lh-base">
                  <p className="tagline">
                    Building vitality and longevity with strength training and
                    conditioning.
                  </p>
                </span>
                <Link href="/posts" passHref>
                  <div className="rounded-pill btn-rounded">
                    Articles{' '}
                    <span>
                      <i className="bi bi-book"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 intros right-side">
              <span className="display-2--description lh-base">
                <p>
                  A site demo by&nbsp;
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">MD </span>Bytes
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
