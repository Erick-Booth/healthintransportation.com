import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/articles.module.scss';

export default function Thanks() {
    let [name, setName] = useState("");

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let name = params.get('name');
        if (name) { setName(name.charAt(0).toUpperCase() + name.slice(1)); }
    }, []);

    return (
        <>
            <Head><title>Thanks! | Health In Transportation</title></Head>
            <div className={ styles.Thanks }>
                <div>
                    <span><iconify-icon inline icon="emojione:white-heavy-check-mark"></iconify-icon></span>
                    <h1>Thanks{ name ? `, ${name}` : '' }!</h1>
                    <h2>We&rsquo;ll reach out ASAP!</h2>
                    <p>You may close this tab, or keep browsing.</p>
                    <Link href='/'><button className="CTA"><iconify-icon inline icon="ic:round-arrow-back-ios"></iconify-icon> Back Home</button></Link>
                </div>
            </div>
        </>
    );
}
