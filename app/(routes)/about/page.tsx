import React from 'react';
import { AboutContent } from '../../_assets/components/about/AboutContent';
import { AboutIntro } from '../../_assets/components/about/AboutIntro';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Primal Strength and Conditioning',
};

const AboutPage = () => {
  return (
    <div className="page" id="about-page">
      <AboutIntro />
      <AboutContent />
    </div>
  );
};

export default AboutPage;
