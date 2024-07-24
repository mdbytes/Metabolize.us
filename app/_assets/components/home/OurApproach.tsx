import Image from 'next/image';

import approachPic from '../../images/home/recovery.jpg';

export default function OurApproach() {
    return (
        <div className="about-martin">
            <div className="container">
                <div className="row">
                    <h2>Special Topics</h2>
                </div>
                <div className="row pb-3">
                    <div className="card col-lg-8 approach">
                        <p>
                            <strong>Recovery. </strong>Recovering from an injury
                            can be a challenging and frustrating experience, but
                            incorporating the right exercise regimen into your
                            recovery plan can make a significant difference.
                            Exercise during injury recovery not only helps to
                            restore strength and flexibility but also speeds up
                            the healing process, reduces pain, and prevents
                            future injuries. Here iss a brief guide on how
                            exercise can aid in injury recovery and some tips on
                            getting started safely.
                        </p>
                        <p>
                            <strong>Emotional Well Being. </strong>What makes a
                            person want to train, lift weights, do cardio, year
                            after year? Many factors have played a role in my
                            desire and ability to continue a regimen of exercise
                            year after year. Put simply, it feels good to
                            exercise. Weightlifting makes your body strong.
                            Cardio gives you endurance. Strength and endurance.
                            These are good. But when asked why I continue to
                            exercise intensely now for decades, my answer is
                            simple: Exercise makes me feel good!
                        </p>
                        <p>
                            <strong>Training with Age. </strong>The fastest
                            growing population group in the United States
                            includes those people between age 65 and 70, with
                            over 12 million people. With the aging baby boomers,
                            the population age 65 and higher is expected to
                            continue growing rapidly. However, growth in the
                            aged population has little to do with improved
                            health habits. The Center for Disease Control
                            reports that more than one-third of older adults
                            aged 65 and over were obese in 2007-2010 with
                            obesity prevalence was higher among those aged
                            65‒74. Studies regularly report that the aging
                            population loses muscle, gains fat, and overall
                            quality and quantity of life are impaired.
                        </p>
                    </div>
                    <div className="col-lg-4 image-card">
                        <Image
                            src={approachPic}
                            width="800"
                            className="img-fluid approach"
                            alt="journey"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
