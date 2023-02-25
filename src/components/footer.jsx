import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id='Footer'>
            <div className="container">
                <img src="/images/HIT/logo.png" alt="Health In Transportation" />
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
