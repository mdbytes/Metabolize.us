import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

const logo =
  "https://primal.wp.mdbytes.us/wp-content/uploads/2018/02/bodybuilder-146791_1280_gold.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navClick = this.navClick.bind(this);
  }

  navClick = (evt) => {
    document.querySelector("#navToggler").click();
    if (evt.target.getAttribute("id") !== "homeLink") {
      document.querySelector("#homeLink").classList.remove("active");
    } else {
      document.querySelector("#homeLink").classList.add("active");
    }
  };

  componentDidMount() {
    let pattern = /\/$/;
    if (!pattern.test(window.location.href)) {
      document.querySelector("#homeLink").classList.remove("active");
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container">
            <Link href="/" passHref>
              <div className="navbar-brand d-flex align-items-end">
                <Image src={logo} alt="logo" width="40" height="65" />
                <span className="company-font">
                  Primal Strength & Conditioning
                </span>
              </div>
            </Link>
            <button
              id="navToggler"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item d-flex align-items-center ">
                  <Link href="/" passHref>
                    <div
                      id="homeLink"
                      className="nav-link"
                      onClick={this.navClick}
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link href="/about" passHref>
                    <div
                      id="servicesLink"
                      className="nav-link"
                      onClick={this.navClick}
                    >
                      About
                    </div>
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <Link href="/posts" passHref>
                    <div
                      id="testimonialsLink"
                      className="nav-link"
                      to="/posts"
                      onClick={this.navClick}
                    >
                      Articles
                    </div>
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <Link href="/contact" passHref>
                    <div
                      id="contactLink"
                      className="nav-link"
                      to="/contact"
                      onClick={this.navClick}
                    >
                      Contact
                    </div>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link href="/privacy" passHref>
                    <div
                      id="privacyLink"
                      className="nav-link"
                      to="/privacy"
                      onClick={this.navClick}
                    >
                      Privacy
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
