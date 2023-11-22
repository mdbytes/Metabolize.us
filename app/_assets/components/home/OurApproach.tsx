import Image from 'next/image';

import approachPic from '../../images/home/journey-together.webp';

export default function OurApproach() {
  return (
    <div className="row about-martin">
      <div className="row">
        <h2>Our Approach</h2>
      </div>
      <div className="row pb-3">
        <div className="card col-lg-8 approach">
          <p>
            The philosophy of fitness and training you will find on this website
            is simple. Each person is uniquely, and wonderfully, made. But we
            are gloriously different. Some are genetically gifted and excel at
            physical tasks easily while some are facing physical challenges of
            one kind or another. Maybe you&apos;ve been told you are &apos;too
            short&apos; or &apos;too tall&apos; or too much this or that.
          </p>
          <p>
            While you will find information and guidance here for top athletic
            performance, the vast majority of what you will find here is
            guidance on what you need to keep setting the right fitness goals,
            making the right training plans and literally keep moving toward a
            new, more strong and positive direction.
          </p>
          <p>
            But the best of plans need to be set aside when real life gets in
            the way. Life is messy and can be very hard physically and
            emotionally. Ups and downs, starts and stops, will occur due to
            illness, job pressures, family problems and more. We want to embrace
            others in their trials, having them join us in two simple goals;
            living strong and staying positive.
          </p>
          <p>
            Training our body and mind is not about forgetting the struggles of
            life, or about reaching a permanent state of perfection. Rather, its
            about establishing a good foundation that will draw us back over and
            over through life.
          </p>
          <p>
            The destination may seem far away, but we support one another on the
            journey. Let&apos;s live strong and stay positive together.
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
  );
}
