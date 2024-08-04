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
                                    <h3 className="display-4">Need help?</h3>
                                    <p style={{ color: 'black' }}>Reach out!</p>
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-envelope"></i>
                                            </span>
                                            Send us a message today.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                            Describe your situation.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-trophy"></i>
                                            </span>
                                            Tell us about your desired outcome.
                                        </li>
                                    </ul>
                                    <p style={{ color: 'black' }}>
                                        We will get back to your as soon as
                                        possible.
                                    </p>
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
