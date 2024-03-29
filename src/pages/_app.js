import { useState, useEffect } from 'react';
import '../styles/index.scss';
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      setOffset(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="Health In Transportation" />
      <meta name="keywords" content="Health Transportation trucking trucker trainer bob perry cdl scanner drivers" />
      <meta name="description" content="Health in Transportation offers an array of health and medical services to bus and truck fleets as well as professional Commercial Driver's License (CDL) holders across the US." />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F83843" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#F83843" />
      <meta name="color-scheme" content="light only" />

      <meta property="og:description" content="Health in Transportation offers an array of health and medical services to bus and truck fleets as well as professional Commercial Driver's License (CDL) holders across the US." />
      <meta property="og:title" content="Health In Transportation" />
      <meta property="og:image" content="/images/manifest/HIT-OG-Image.png" />
      <meta property="og:image:alt" content="Health In Transporation website. Click to visit!"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.healthintransportation.com"></meta>

      <link rel='canonical' href='https://www.healthintransportation.com' />
      <link rel="shortcut icon" href="images/manifest/HIT T-32x.png" type="image/x-icon" />
      <link rel='apple-touch-icon' href='images/manifest/maskable/apple-touch-192x.png' />
      <link rel='manifest' href='manifest.json' />
      <title>Health In Transportation</title>
    </Head>

    <Script id='iconify' src='https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js' />
    <Script id='google_tag_manager' strategy='afterInteractive' src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}` }></Script>
    <Script id='google_data_layer' strategy='afterInteractive'>
      { `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
      
      `}
    </Script>

    <Header scrollToTop={ () => scrollToTop() } offset={ offset } />
    <Component { ...pageProps } offset={ offset } />
    <Footer />
  </>;
}

export default MyApp;
