import React from 'react';
import TermsPage from '../../_assets/components/terms/TermsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms | Metabolic Victory',
};

export default function Terms() {
    return <TermsPage />;
}
