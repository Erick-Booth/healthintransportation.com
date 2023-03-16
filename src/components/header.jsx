import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/HIT/logo.webp';

export default function Header(props) {
    return (
        <>
            <header>
                <div id='Top-Header'></div>
                <div id="Header">
                    <Link href={ '/' }><Image src={ Logo } alt="Health In Transportation" /></Link>
                    <nav>
                        <iconify-icon inline icon="openmoji:flag-united-states" title='United States' />
                        <a title='Call Us!' className='phone' href="tel:+16026922734">(602) 692-2734</a>
                        <a title='Call Us!' className='mobile-phone' href="tel:+16026922734"><iconify-icon inline icon="material-symbols:phone-in-talk"></iconify-icon></a>
                    </nav>
                </div>
            </header>
            <button id='BackToTop' className={ props.offset > 100 ? 'show' : undefined } title='Back to top' onClick={ () => { props.scrollToTop(); } }><iconify-icon icon="material-symbols:keyboard-arrow-up-sharp"></iconify-icon></button>
        </>
    );
}
