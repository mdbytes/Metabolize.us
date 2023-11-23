import React from 'react';
import { Metadata } from 'next';
import AboutPage from '../../_assets/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About | Primal Strength and Conditioning',
};

const Page = () => {
  return <AboutPage />;
};

export default Page;
