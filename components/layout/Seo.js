import React from "react";
import Head from "next/head";

const Seo = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
      <meta
        name="description"
        content="Primal Strength Training and Conditioning, a website dedicated to strength, conditioning and longevity."
      />
      <meta
        name="keywords"
        content="powerlifting conditioning weight lifting fitness longevity"
      />
    </Head>
  );
};

export default Seo;
