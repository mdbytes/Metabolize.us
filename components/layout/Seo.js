import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Seo = (props) => {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        async
        src={'https://www.googletagmanager.com/gtag/js?id=UA-88714829-4'}
      ></Script>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date()); gtag('config', 'UA-88714829-4');
        `}
      </Script>
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
          content="https://goprimalstrength.com/wp-content/uploads/2022/05/primal-strength-media.jpeg"
        />

        <meta name="twitter:title" content="Primal Strength and Conditioning" />
        <meta
          name="twitter:description"
          content="Primal Strength Training and Conditioning, a website dedicated to strength, conditioning and longevity."
        />
        <meta
          name="twitter:image"
          content="https://goprimalstrength.com/wp-content/uploads/2022/05/primal-strength-media.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
};

export default Seo;
