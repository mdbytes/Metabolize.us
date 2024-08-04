'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedArticles from './FeaturedArticles';
import { sliderOne, sliderTwo } from './slides';
import HomeSlider from './HomeSlider';
import OurApproach from './OurApproach';
import profilePic from '../../images/home/20180712_comparison_2.webp';
import logoPic from '../../images/home/metabolic-img.ico';
import MartinsJourney from './MartinsJourney';
import MetabolicSyndrome from './MetabolicSyndrome';

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
                                        Metabolize.us{' '}
                                    </h1>
                                    <p className="tagline text-center">
                                        Battling metabolic syndrome
                                    </p>
                                </div>
                                <div className="site-description">
                                    <div className="heading">
                                        <ul className="fa-ul">
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-check-square"></i>
                                                </span>
                                                Optimize your metabolism
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-check-square"></i>
                                                </span>
                                                Fat burning nutrition
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-check-square"></i>
                                                </span>
                                                Muscle building exercise
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btn-learn-more">
                                    <a
                                        className="btn btn-primary"
                                        href="#metabolic-syndrome"
                                    >
                                        Learn More{' '}
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
                                    <div className="heading">
                                        <p className="text-center text-white">
                                            Sharing experience and insights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <MetabolicSyndrome />

            <FeaturedArticles />
        </>
    );
};

export default LandingPage;
