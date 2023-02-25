import React from 'react';
import ContactForm from '@/components/contactForm';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Health In Transportation</title>
            </Head>
            <section id='Contact' className='contactPage'>
                <h1>Contact Us</h1>
                <h2>We'd love to hear from you.</h2>
                <ContactForm />
            </section>
        </>
    );
}
