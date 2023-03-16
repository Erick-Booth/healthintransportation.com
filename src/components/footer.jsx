import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/HIT/logo.webp';

export default function Footer() {
    return (
        <footer id='Footer'>
            <div className="container">
                <Image src={ Logo } alt="Health In Transportation" />
                <div className='text'>
                    <p>Copyright { new Date().getFullYear() } Health In Transportation. All&nbsp;Rights&nbsp;Reserved.</p>
                    <div className='links'>
                        <Link href={ '/policy/terms' }>Terms of Use</Link>
                        <Link href={ '/policy/privacy' }>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
