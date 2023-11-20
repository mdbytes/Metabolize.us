import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import homeImage from '../../_assets/images/home/home-deadlift.png';

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
                  <div id="tagline">
                    Health and longevity through
                    <br /> strength and conditioning
                  </div>
                  <br />
                  <br />A site demo by{' '}
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">MD </span>Bytes
                    </span>
                  </a>
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
            <div className="col-lg-6 intros photo">
              <Image
                src={homeImage}
                alt="home page"
                height={400}
                width={400}
                className="animate__animated animate__zoomInDown"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
