import Image from 'next/image';

import approachPic from '../../images/home/in_big_pants.jpg';
import Link from 'next/link';

export default function OurApproach() {
    return (
        <div className="our-approach" id="our-approach">
            <div className="container-fluid">
                <div className="row">
                    <h2>Metabolize.us</h2>
                </div>
                <div className="row pb-3 about-martin">
                    <div className="col-lg-8 approach about">
                        <div className="row">
                            <div className="col card">
                                <h3>Overview</h3>

                                <p>
                                    <Image
                                        src="https://goprimalstrength.com/wp-content/uploads/2018/02/Screenshot-from-2018-02-19-13-41-25-150x150.png"
                                        alt=""
                                        width="75"
                                        height="75"
                                        className="img-fluid"
                                    />
                                    My name is Martin. I am over 60 years old
                                    and have been training most of my life.
                                    Resistance training, ketogenic nutrition and
                                    high intensity cardio have changed my life.
                                    You will find my own experience here along
                                    with my research as a certified personal
                                    trainer. This website is intended to battle
                                    chronic disease by promoting healthy
                                    outcomes from proper nutrition and exercise
                                    as the world faces troubling realities:{' '}
                                    <br />
                                    <br />
                                </p>
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul
                                            className="fa-ul"
                                            style={{
                                                width: '100%',
                                                clear: 'both',
                                            }}
                                        >
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                The world is facing a three-fold
                                                pandemic of diabetes, heart
                                                disease and cancer.
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                This pandemic is driven by
                                                processed foods and sedentary
                                                lifestyles.
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                Low-fat diets, diet centers, and
                                                diet products have all failed
                                                for decades.
                                            </li>{' '}
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                Calorie counting diets do not
                                                work.
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                We do not need more pills or
                                                shots.
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                We need to eat to be satisfied
                                                and healthy.
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fa-solid fa-circle-arrow-right"></i>
                                                </span>
                                                We need more exercise.
                                            </li>
                                        </ul>
                                        <p>
                                            On this website, you can{' '}
                                            <Link href="#featured-posts">
                                                read our featured articles
                                            </Link>
                                            , review the
                                            <Link href="/posts">
                                                {' '}
                                                list of articles
                                            </Link>{' '}
                                            available at this time, watch one of
                                            the YouTube videos available here,
                                            or{' '}
                                            <Link href="/contact">
                                                contact me
                                            </Link>{' '}
                                            or learn more about{' '}
                                            <Link href="/about">
                                                my background and transformation
                                            </Link>{' '}
                                        </p>
                                    </div>

                                    <div className="col-md-4">
                                        <Image
                                            src={approachPic}
                                            alt=""
                                            height="800"
                                            width="400"
                                            className="transformation-photo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-4 approach battle card">
                        <h3 className="text-center">Approach</h3>

                        <div className="table-wrapper">
                            <div className="metabolic-solution">
                                <ul className="fa-ul" style={{ width: '100%' }}>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        Intermittent Fasting
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        Ketogenic Nutrition
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        Metabolic Resistance Training
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        High Intensity Interval Cardio
                                    </li>
                                </ul>
                            </div>
                            <table
                                className="table pt-5"
                                style={{ display: 'none' }}
                            >
                                <tbody>
                                    <tr>
                                        <th>Waist Size</th>
                                        <td>
                                            &lt; 40 inches (men)
                                            <br /> &lt; 34 inches (women)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Blood Pressure</th>
                                        <td>&lt; 130/80</td>
                                    </tr>
                                    <tr>
                                        <th>Blood Sugar</th>
                                        <td>&lt; 100mg/dL fasting</td>
                                    </tr>
                                    <tr>
                                        <th>Cholesterol(HDL)</th>
                                        <td>
                                            &gt; 40 mg/dL (men) <br />
                                            &gt; 50 mg/dL (women)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Triglycerides</th>
                                        <td>&lt; 150 mg/dL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
