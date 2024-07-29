import React, { Component } from 'react';
import emailjs from '@emailjs/browser';
import { Contact } from '../../_assets/components/contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact |  Metabolize.us',
};

const ContactPage = () => {
    return <Contact />;
};

export default ContactPage;
