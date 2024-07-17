'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedArticles from './FeaturedArticles';
import { sliderOne, sliderTwo } from './slides';
import HomeSlider from './HomeSlider';
import OurApproach from './OurApproach';
import profilePic from '../../images/home/header_profile_pic-1.webp';
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
                        <div className="jumbotron row">
                            <div className="col-md-6 left">
                                <div className="site-title">
                                    <h1 className="headline text-center">
                                        Metabolic Strength
                                    </h1>
                                    <p className="tagline text-center">
                                        Building metabolic strength.
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
                            <div className="col-md-6 right">
                                <div className="featured-image">
                                    <Image
                                        src={profilePic}
                                        alt="featured-image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="site-description">
                                    <div className="heading text-center">
                                        <h3>Martin Dwyer</h3>
                                        <h6>
                                            CFT, SSC, OCC<sup>*</sup>
                                        </h6>
                                    </div>
                                    <p>
                                        Living strong and staying positive with
                                        strength training, nutrition and
                                        exercise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FeaturedArticles />
            <HomeSlider slides={sliderOne} />
            <OurApproach />
            <HomeSlider slides={sliderTwo} />
            <MartinsJourney />
        </>
    );
};

export default LandingPage;
