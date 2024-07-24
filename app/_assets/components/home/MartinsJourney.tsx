import React from 'react';
import Image from 'next/image';

import afterPhoto from '../../images/home/profile_after-600x600.webp';
import beforePhoto from '../../images/home/side_side-600x600.webp';

const MartinsJourney = () => {
    return (
        <div className="row about-martin" id="about-martin">
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
                            Thanks for visiting this page. I created it to share
                            my journey and to encourage others in their battle
                            with metabolic syndrome. I am 61 years old. My
                            battle with metabolic syndrome has been ongoing for
                            most of his life.
                        </p>
                        <p className="text-center">
                            <i>Metabolic syndrome was winning</i>
                        </p>
                        <p>
                            In my early years, athletics kept me busy enough to
                            control my waist size and maintain a concept of
                            strength and fitness. I was typical for most young
                            people - ignorant of my own immortality. But as life
                            progressed, I was constantly battling the bulge
                            around my waist. To put it simple, I got fat very
                            easily. If a person could win awards for gaining
                            weight in a short amount of time, I would need a
                            warehouse for all the trophies.
                        </p>

                        <p>
                            The awards I received for years of losing battles
                            with metabolic syndrome were eye-opening, including
                            prediabetes, lung disease and cancer. It was time to
                            get my act together, if at all possible. I have a
                            lots to live for, but life itself was escaping me
                            quickly thanks to metabolic syndrome.
                        </p>

                        <p className="text-center">
                            <i>Metabolic victory is possible</i>
                        </p>
                        <p>
                            My first reaction was to get busy again, returning
                            to the strength and conditioning of my youth. To
                            help me engage and share with others, I completed{' '}
                            <a href="https://www.issaonline.com/certification/personal-trainer-certification">
                                certification
                            </a>{' '}
                            as a Certified Fitness Trainer (CFT) and Strength
                            and Conditioning Coach( SSC). It felt to be strong
                            again and to encourage others. But something was
                            missing, it was still so easy to gain weight.
                        </p>
                        <p>
                            Through a diet and exercise program that worked for
                            me I was able to say goodbye to obesity worries and
                            embrace a new lifestyle. This works for me, and I am
                            excited about it, which is why I share it on this
                            site. Before anyone should try the programs
                            discussed on this website, they should have the
                            support of their doctor, understand their own body
                            chemistry and inherent challenges.
                        </p>
                        <p>
                            If you have any questions about the material on this
                            site, please visit the{' '}
                            <a href="/contact">contact page</a> to send me a
                            message. .
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
