import React from 'react';
import Link from 'next/link';
import styles from '../styles/articles.module.scss';

export default function PageNotFound() {
    return (
        <div className={ styles.pageNotFound }>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>That resource either doesn't exist, or has been moved.</p>
            <Link className='CTA' href={ '/' }>Back Home</Link>
        </div>
    );
}
