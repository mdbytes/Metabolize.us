import React from 'react';
import { AboutContent } from '../_assets/components/about/AboutContent';
import { AboutIntro } from '../_assets/components/about/AboutIntro';

const AboutPage = () => {
  return (
    <div className="page" id="about-page">
      <AboutIntro />
      <AboutContent />
    </div>
  );
};

export default AboutPage;
