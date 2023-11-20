'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef } from 'react';

type InputRef = MutableRefObject<HTMLInputElement> | MutableRefObject<null>;
type ButtonRef = MutableRefObject<HTMLButtonElement> | MutableRefObject<null>;
type NavLinkRef = MutableRefObject<HTMLAnchorElement> | MutableRefObject<null>;

export const Navbar = () => {
  let pathname = usePathname();

  let searchTermRef: InputRef = useRef(null);
  let navTogglerRef: ButtonRef = useRef(null);
  let homeRef: NavLinkRef = useRef(null);
  let aboutRef: NavLinkRef = useRef(null);
  let faqRef: NavLinkRef = useRef(null);
  let contactRef: NavLinkRef = useRef(null);
  let privacyRef: NavLinkRef = useRef(null);

  useEffect(() => {
    require('../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');

    let linkRefs: NavLinkRef[] = [
      homeRef,
      aboutRef,
      faqRef,
      contactRef,
      privacyRef,
    ];

    // Close the mobile nav display when a link is clicked
    if (navTogglerRef) {
      for (let link of linkRefs) {
        link?.current?.addEventListener('click', () => {
          navTogglerRef.current?.click();
        });
      }
    }
    let destination = pathname.slice(
      pathname.lastIndexOf('/') + 1,
      pathname.length
    );

    if (pathname === '/') {
      homeRef?.current?.classList.add('active');
      aboutRef?.current?.classList.remove('active');
      faqRef?.current?.classList.remove('active');
      contactRef?.current?.classList.remove('active');
      privacyRef?.current?.classList.remove('active');
    } else {
      for (let link of linkRefs) {
        link?.current?.classList.remove('active');

        if (link.current?.href.includes(destination)) {
          link.current?.classList.add('active');
        }
      }
    }
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* <img
              src={logo}
              alt="site logo in navbar"
              className="site-logo"
              height="32"
            /> */}
          </a>
          <button
            ref={navTogglerRef}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  ref={homeRef}
                  id="home-link"
                  className="nav-link"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  ref={aboutRef}
                  className="nav-link"
                  aria-current="page"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  ref={faqRef}
                  className="nav-link"
                  aria-current="page"
                  href="/posts"
                >
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  ref={contactRef}
                  className="nav-link"
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  ref={privacyRef}
                  className="nav-link"
                  aria-current="page"
                  href="/terms"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
