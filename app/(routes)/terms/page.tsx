import React from 'react';
import TermsPage from '../../_assets/components/terms/TermsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms | Metabolize.us',
};

export default function Terms() {
    return <TermsPage />;
}
