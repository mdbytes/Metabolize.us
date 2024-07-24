import type { Metadata } from 'next';
import { Navbar } from './_assets/components/layout/NavBar';
import { Footer } from './_assets/components/layout/Footer';
import CookiesApproval from './_assets/components/layout/CookiesApproval';

// Import font families
import '@fontsource/nunito';
import '@fontsource/josefin-sans';
import '@fontsource/aclonica';

// Import global styles
import './_assets/styles/scss/globals.scss';

const dotenv = require('dotenv');
dotenv.config();

export const metadata: Metadata = {
    metadataBase: new URL('https://primal-strength.vercel.app'),
    title: 'Home | Metabolic Victory',
    description:
        'Primal Strength Training and Conditioning, a website dedicated to strength, conditioning and longevity.',
    keywords: 'power lifting conditioning weight lifting fitness longevity',
    openGraph: {
        title: 'Primal Strength and Conditioning',
        type: 'website',
        url: 'https://primal-strength.vercel.app/',
        images: '/images/primal-strength-media.jpeg',
    },

    twitter: {
        images: '/images/primal-strength-media.jpeg',
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
                <CookiesApproval />
            </body>
        </html>
    );
}
