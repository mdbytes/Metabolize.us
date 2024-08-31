import React, { Component } from 'react';
import Image from 'next/image';
import martinImage from '../../images/home/in_big_pants.jpg';

export const AboutIntro = () => {
    return (
        <div className="row text-center about-intro-container">
            <h2>Metabolize.us</h2>
            <Image
                src={martinImage}
                height={900}
                width={450}
                alt="site logo in navbar"
                className="about-martin-image"
            />
            <h1 className="display-3 fw-bold">About Martin</h1>
            <div className="heading-line mb-1"></div>
        </div>
    );
};
