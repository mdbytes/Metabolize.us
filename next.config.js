/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'metabolicvictory.com',
            },
            {
                protocol: 'https',
                hostname: 'primal-strength.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'goprimalstrength.com',
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
        WP_REST_GET_POST_WITH_SLUG_URL:
            process.env.WP_REST_GET_POST_WITH_SLUG_URL,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'app/_assets/styles/scss')],
    },
    webpack: (config, { dev }) => {
        // Enable source maps in development mode
        if (dev) {
            config.devtool = 'source-map';
        }
        return config;
    },
    productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
