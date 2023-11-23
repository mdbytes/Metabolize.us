/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goprimalstrength.com',
      },
      {
        protocol: 'https',
        hostname: 'primal-strength.vercel.app',
      },
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    EMAIL_JS: process.env.NEXT_PUBLIC_EMAILJS_USER,
    WP_REST_GET_POSTS_URL: process.env.WP_REST_GET_POSTS_URL,
    WP_REST_GET_POST_WITH_SLUG_URL: process.env.WP_REST_GET_POST_WITH_SLUG_URL,
  },
};

module.exports = nextConfig;
