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
      <meta property="og:title" content="Primal Strength and Conditioning" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://primal-strength.vercel.app/" />
      <meta
        property="og:image"
        content="https://primal.wp.mdbytes.us/wp-content/uploads/2022/03/Kazam_screenshot_00023.png"
      />

      <meta name="twitter:title" content="Primal Strength and Conditioning" />
      <meta
        name="twitter:description"
        content="Primal Strength Training and Conditioning, a website dedicated to strength, conditioning and longevity."
      />
      <meta
        name="twitter:image"
        content="https://primal.wp.mdbytes.us/wp-content/uploads/2022/03/Kazam_screenshot_00023.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
