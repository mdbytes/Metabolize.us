import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

const logo =
  "https://goprimalstrength.com/wp-content/uploads/2018/02/bodybuilder-146791_1280_gold.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.companyName = "WildThings Photography";
    this.backToTop = this.backToTop.bind(this);
  }

  backToTop = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>

              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>
              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>
            </div>
            <div className="row d-flex align-content-center justify-content-center"></div>
          </div>

          <div className="container footer-middle">
            <div className="row text-white justify-content-center ">
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="footer-sm">
                  <h5 style={{ textAlign: "center" }} className="">
                    Social Media Links
                  </h5>
                  <p></p>

                  <div id="social-icons" className="row ">
                    <a
                      className="col"
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      className="col"
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      className="col"
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      className="col"
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      className="col"
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div id="mascot-container" className="col-12 col-sm-6 col-lg-4">
                <h5 style={{ textAlign: "center" }} className="company-font">
                  Primal Strength & Conditioning
                </h5>
                <br />
                <Image
                  src={logo}
                  alt="Baby Tux"
                  className="img-fluid"
                  width="75"
                  height="110"
                />

                <p>
                  Living Strong and
                  <br />
                  Staying Positive
                </p>
              </div>

              <div id="site-menu" className="col-12 col-sm-4 col-lg-4">
                <h5>Quick Links</h5>
                <div id="quick-links">
                  <Link href="/">Home</Link>
                  <span>|</span>
                  <Link href="/about">About</Link>
                  <span>|</span>
                  <Link href="/posts">Articles</Link>
                  <span>|</span>
                  <Link href="/privacy">Privacy</Link>
                  <span>|</span>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-12">
                  <div className="footer-bottom__copyright">
                    &copy; Copyright 2022{" "}
                    <span className="company-font">
                      Primal Strength & Conditioning
                    </span>{" "}
                    | Created by{" "}
                    <a
                      href="https:/mdbytes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <span className="logo-style">md</span>
                      <span className="name-style">Bytes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <button
          onClick={this.backToTop}
          className="shadow btn rounded-circle back-to-top"
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      </div>
    );
  }
}

export default Footer;
