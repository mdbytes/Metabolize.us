import React from "react";
import { Helmet } from "react-helmet";

const Seo = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta
        name="description"
        content="Primal Strength Training and Conditioning, a website dedicated to strength, conditioning and longevity."
      />
      <meta
        name="keywords"
        content="powerlifting conditioning weight lifting fitness longevity"
      />
    </Helmet>
  );
};

export default Seo;
