'use client';

import Image from 'next/image';

import approachPic from '../../images/home/recovery.jpg';

export default function MetabolicSyndrome() {
    return (
        <div className="metabolic-syndrome" id="metabolic-syndrome">
            <hr />
            <div className="container-fluid">
                <h2 className="text-center pt-4 mt-3">Metabolic Syndrome</h2>

                <div className="row mt-3">
                    <div className="card col-lg-6">
                        <div className="metabolic-info-wrapper">
                            <p>
                                Metabolic syndrome (MetS) is a group of
                                conditions that together raise your risk of a
                                wide range of health problems. MetS{' '}
                                <u>affects one in three adults</u> in the United
                                States.
                            </p>

                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </span>
                                    <b>Increases Risk: </b>
                                    <ul>
                                        <li>Heart Disease</li>
                                        <li>Stroke</li>
                                        <li>Type 2 Diabetes</li>
                                        <li>Dementia</li>
                                        <li>Alzheimer&apos;s Disease</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </span>
                                    <b>Indications:</b>
                                    <ul>
                                        <li>Family History</li>
                                        <li>Insulin Resistance</li>
                                        <li>High Blood Sugar</li>
                                        <li>High Blood Pressure</li>
                                        <li>Obesity</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </span>
                                    <b>Diagnosis:</b>
                                    <ul>
                                        <li>Blood tests</li>
                                        <li>
                                            Blood pressure and body measurements
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </span>
                                    <b>Treatment: </b>
                                    <ul>
                                        <li>
                                            Medications as prescribed by a
                                            doctor
                                        </li>
                                        <li>Diet and exercise</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 image-card">
                        <h3 className="text-center mt-1">Video Introduction</h3>
                        <p>
                            A growing wealth of research, information and
                            resources are available online. The doctors at{' '}
                            <a
                                href="https://talkingwithdocs.com/"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                Talking with Docs
                            </a>{' '}
                            have provided a concise introductory video.
                        </p>
                        <div id="front-page-video-holder">
                            <iframe
                                id="front-page-video"
                                src="https://www.youtube.com/embed/nrZHg7Pcr9A?si=7ogeNZ1NXLFSW402"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <div className="btn-learn-more">
                                <a
                                    className="btn btn-primary"
                                    href="#featured-posts"
                                >
                                    Learn More{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
