import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";

const LandingPage = () => {
  return (
    <Layout>
      <Seo title="Primal Strength" />
      <section id="home" className="intro-section">
        <div className="container">
          <div className="col-lg-12 intros">
            <div id="intro">
              <h1 className="company-font">
                Primal Strength & Conditioning
                <br />
              </h1>
              <span className="display-2--description lh-base">
                <div id="tagline">
                  Building overall health through strength and conditioning
                </div>
                <br />
                <br />A site demo by{" "}
                <a href="https://mdbytes.com">
                  <span className="name-style">
                    <span className="logo-style">md </span>Bytes
                  </span>
                </a>
              </span>

              <Link href="/posts" passHref>
                <div className="rounded-pill btn-rounded">
                  Articles{" "}
                  <span>
                    <i className="bi bi-book"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
