import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.scss';

export default function Carousel() {
    const TOTAL_IMAGES = 1; //Including 0
    const [imageIndex, setImageIndex] = useState(0); //Increment over time, which updates the className. The image src is defined in the home.module.scss;

    const IMAGES = [
        {
            src: 'driver',
            position: 'left'
        },
        {
            src: 'driver-female',
            position: 'center'
        }
    ];

    var timeout;

    useEffect(() => {
        timeout = setTimeout(() => {
            setImageIndex(imageIndex === TOTAL_IMAGES ? 0 : imageIndex + 1);
        }, 8000);
    }, [imageIndex]);

    function supportsWebP() {
        var elem = document.createElement('canvas'); if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }    // very old browser like IE 8, canvas not supported
        return false;
    }

    return (
        <div className={ styles.carousel }>
            {
                IMAGES.map((item, i) => {
                    return <img key={ i } src={ `/images/stock/${item.src}.webp` } className={ imageIndex === i ? styles.show : undefined } style={ { objectPosition: item.position } } loading='lazy' alt='' />;
                })
            }
        </div>
    );
}
