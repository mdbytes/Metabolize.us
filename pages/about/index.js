import React, { Component } from "react";
import AboutIntro from "../../components/about/AboutIntro";
import AboutContent from "../../components/about/AboutContent";
import Layout from "../../components/layout/Layout";
import Seo from "../../components/layout/Seo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section id="about-page" className="about-page">
        <div className="container">
          <AboutIntro />
          <AboutContent />
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
