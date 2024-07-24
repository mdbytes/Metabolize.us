'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedArticles from './FeaturedArticles';
import { sliderOne, sliderTwo } from './slides';
import HomeSlider from './HomeSlider';
import OurApproach from './OurApproach';
import profilePic from '../../images/home/20180712_reduction.webp';
import logoPic from '../../images/home/metabolic-img.ico';
import MartinsJourney from './MartinsJourney';

const LandingPage = () => {
    useEffect(() => {
        require('../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
    }, []);

    return (
        <>
            <div className="app">
                <section id="home" className="intro-section">
                    <div className="container-fluid">
                        <div className="jumbotron row container-fixed">
                            <div className="col-lg-6 left">
                                <div className="site-title">
                                    <h1 className="headline text-center">
                                        Metabolic Victory
                                    </h1>
                                    <p className="tagline text-center">
                                        Battling chronic disease with nutrition
                                        and exercise
                                    </p>
                                </div>
                                <div className="btn-learn-more">
                                    <a
                                        className="btn btn-primary"
                                        href="#featured-posts"
                                    >
                                        Read More{' '}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 right">
                                <Link href="/about">
                                    <div className="featured-image">
                                        <Image
                                            src={profilePic}
                                            alt="featured-image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </Link>
                                <div className="site-description">
                                    <div className="heading text-center">
                                        <h3>Martin Dwyer</h3>
                                        <h6>
                                            ISSA Elite Trainer<sup>*</sup>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FeaturedArticles />
            <HomeSlider slides={sliderOne} />
            <OurApproach />
        </>
    );
};

export default LandingPage;
