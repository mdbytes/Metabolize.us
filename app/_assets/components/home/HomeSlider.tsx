'use client';

import { useEffect, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import { slide } from '@/types';
import React from 'react';

type HtmlButtonRef =
  | MutableRefObject<HTMLButtonElement>
  | MutableRefObject<null>;

export default function HomeSlider({ slides }: { slides: slide[] }) {
  let nextButtonRef: HtmlButtonRef = useRef(null);

  useEffect(() => {
    nextButtonRef?.current?.click();
  }, [nextButtonRef]);

  let slideId = slides[0].slideTitle.replace(' ', '');

  return (
    <div className="row">
      <div
        id={slideId}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={'#' + slideId}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={'#' + slideId}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={'#' + slideId}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => {
            let slideClass = 'carousel-item';
            if (index === 0) {
              slideClass = 'carousel-item active';
            }
            return (
              <div className={slideClass} key={index}>
                <Image
                  src={slide.src}
                  className="d-block w-100"
                  alt="slider 1"
                />
                <div className="carousel-caption">
                  <h3>{slide.slideTitle}</h3>
                  <a href={slide.href} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={'#' + slideId}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          ref={nextButtonRef}
          className="carousel-control-next"
          type="button"
          data-bs-target={'#' + slideId}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
