import React from 'react';
import Image from 'next/image';

import afterPhoto from '../../images/home/profile_after-600x600.webp';
import beforePhoto from '../../images/home/side_side-600x600.webp';

const MartinsJourney = () => {
  return (
    <div className="row about-martin">
      <div className="row">
        <div className="card col-lg-3 image-card left">
          <Image
            src={beforePhoto}
            width="800"
            className="img-fluid left"
            alt="martin transformation photo"
          />
        </div>
        <div className="card col-lg-6">
          <div className="card-body martin-intro">
            <h3 className="text-center">Martin&apos;s Journey</h3>
            <p>
              At 60 years old, Martin considers himself an over comer with many
              victories in life over cancer, lung disease and type 2 diabetes.
              Staying strong and positive over 60 years can be a struggle with
              ups and downs. Be it illness, injuries, family or professional
              priorities, we all face periods of time where are training may
              have to be delayed.
            </p>
            <p>
              Martin has found constant refuge and joy in lifting weights, light
              cardio, sharing his journey and coaching others online.
              Martin&apos;s professional certifications from International
              Sports Sciences Association include:
            </p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-dumbbell"></i>
                </span>
                Certified Fitness Trainer (CFT)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-weight-hanging"></i>
                </span>
                Strength and Conditional Coach Certification (SSC)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-globe"></i>
                </span>
                Online Coaching Certification (OCC)
              </li>
            </ul>
            <p>
              Today, Martin uses this site, along with his professional
              education and certifications, as a way to encouraging and guiding
              others in their wellness journeys. For more information, you can
              send a note to Martin at our <a href="/contact">contact page</a> .
            </p>
          </div>
        </div>
        <div className="card col-lg-3 image-card">
          <Image
            src={afterPhoto}
            className="img-fluid right"
            alt="martin transformation photo"
          />
        </div>
      </div>
    </div>
  );
};

export default MartinsJourney;
