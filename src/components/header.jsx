import React from 'react';
import Link from 'next/link';

export default function Header(props) {
    return (
        <>
            <header>
                <div id='Top-Header'></div>
                <div id="Header">
                    <Link href={ '/' }><img src="/images/HIT/logo.png" alt="Health In Transportation" /></Link>
                    <nav>
                        <iconify-icon inline icon="openmoji:flag-united-states" title='United States' />
                        <a className='phone' href="tel:+1602-692-2734">(602) 692-2734</a>
                        <a className='mobile-phone' href="tel:+6026922734"><iconify-icon inline icon="material-symbols:phone-in-talk"></iconify-icon></a>
                    </nav>
                </div>
            </header>
            <button id='BackToTop' className={ props.offset > 100 ? 'show' : undefined } title='Back to top' onClick={ () => { props.scrollToTop(); } }><iconify-icon icon="material-symbols:keyboard-arrow-up-sharp"></iconify-icon></button>
        </>
    );
}
