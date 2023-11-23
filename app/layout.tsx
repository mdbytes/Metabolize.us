import type { Metadata } from 'next';
import { Navbar } from './_assets/components/layout/NavBar';
import { Footer } from './_assets/components/layout/Footer';

// Import font families
import '@fontsource/acme';
import '@fontsource/aclonica';

// Import global styles
import './_assets/styles/css/globals.min.css';

const dotenv = require('dotenv');
dotenv.config();

export const metadata: Metadata = {
  icons: [
    'https://goprimalstrength.com/wp-content/themes/PrimalPressMD/assets/images/bodybuilder-icon.webp',
  ],
  metadataBase: new URL('https://primal-strength.vercel.app'),
  title: 'Home | Primal Strength',
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
