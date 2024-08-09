import Head from 'next/head';
import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <div className="post-page pt-5">
            <div className="contact">
                <section id="contact" className="get-started container-fluid">
                    <h1 className="display-3 text-center pt-5 mb-3">Contact</h1>
                    <div className="heading-line mb-1"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cta-info w-100">
                                    <h3 className="display-4">
                                        Training Solutions
                                    </h3>
                                    <p>
                                        Your health and physical vitality does
                                        not need to be expensive or time
                                        consuming. These days, I prefer home gym
                                        solutions with cardio and weightlifting
                                        that can be pursued for little or no
                                        investment. My own ketogenic nutrition
                                        is accomplished mostly with whole foods
                                        readily available at any market.
                                    </p>{' '}
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-envelope"></i>
                                            </span>
                                            Send me a message with the form on
                                            this page.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                            Describe your situation, including
                                            medical challenges you would like to
                                            overcome.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-trophy"></i>
                                            </span>
                                            Tell me what you want to accomplish.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
