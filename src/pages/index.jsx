import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import Link from 'next/link';

import AnimatedBus from '@/components/svgs/animatedBus';
import ContactForm from '@/components/contactForm';
export default function Home(props) {
  return (
    <>
      <section id='Landing' className={ styles.Landing }>
        <div className="container">
          <h1>Supporting Professional Drivers To Protect Their Livelihoods</h1>
          <h2>Protecting Drivers' Livelihoods Through Better Health&nbsp;Choices</h2>
          <Link href={ '/contact' }>Contact Us <iconify-icon inline icon="material-symbols:chat-outline-sharp"></iconify-icon></Link>
        </div>
      </section>

      <section id="About" className={ styles.About }>
        <div className={ styles.image } />
        <div className={ styles.text }>
          <h2>Believe Us,</h2>
          <p>we know that staying healthy can be a struggle for a professional driver.</p>
          <p>That’s why we aim to provide exceptional health program referrals & services that are <span>tailored to you and your fleet</span>.</p>
        </div>
      </section>

      <section id="Services" className={ styles.Services }>
        <div className={ styles.textWrap }>
          <div className={ styles.text }>
            <h2>We make sure drivers stay <span>on the road</span>, instead of sidelined on the couch.</h2>
          </div>
        </div>
        <ul className={ styles.serviceList }>
          <li>
            <iconify-icon inline icon="fluent:food-apple-24-filled"></iconify-icon> CDL Orientation Lunches
          </li>
          <li>
            <iconify-icon inline icon="ri:health-book-fill"></iconify-icon> Disease Management Programs
          </li>
          <li>
            <iconify-icon inline icon="mdi:teacher"></iconify-icon> Telephonic & Onsite Health&nbsp;Coaching
          </li>
          <li>
            <iconify-icon inline icon="mdi:id-card-outline"></iconify-icon> Fit Drivers, Get Your Drivers Fit&nbsp;to&nbsp;Pass
          </li>
          <li>
            <iconify-icon inline icon="fluent-mdl2:health-solid"></iconify-icon> Self-administered Health&nbsp;Check&nbsp;Stations
          </li>
        </ul>
      </section>

      <section id='Grid' className={ styles.Grid }>
        <a href="" target={ '_blank' } rel='noreferrer'>
          <h3>CDL Health Scanner</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, itaque?</p>
        </a>
        <a href="#BobPerry" target={ '_blank' } rel='noreferrer'>
          <h3>Bob Perry Trucker&nbsp;Trainer Consulting</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, itaque?</p>
        </a>
        <a href="https://Galileo.io" target={ '_blank' } rel='noreferrer'>
          <h3>Galileo.io</h3>
          <p>Galileo's dedicated team of doctors and nurse practitioners is on call 24/7 to deliver full-spectrum medical care.</p>
        </a>
      </section>

      <section id='BobPerry' className={ styles.Bob }>
        <img src="/images/HIT/Bob.jpg" alt="" title='Bob Perry' />
        <div className={ styles.text }>
          <h1>Bob Perry</h1>
          <h2>President & Founder</h2>
          <span className='separator' />
          <p>Bringing more than <span>25 Years</span> of Wellness Expertise to the Driver’s Community, Bob comes from a family of career drivers from Northeast Ohio, who have been in the industry for the past 4 decades.</p>
          <p>Having devoted his career to the health & fitness of professional drivers, Bob is recognized all over the country as the <span>Trucker Trainer&trade;</span>.</p>
          <p>From 2007-2009, he served as the Vice-Chairman of the <span>ATA Safety Management Council’s</span> Health & Wellness Working Group, then served as Chairman for an additional 4 years. To this day, Bob remains active with both the ATA, and ABA.</p>
        </div>
      </section>

      <section id='HealthScanner' className={ styles.HealthScanner }>
        <div className={ styles.topContent }>
          <img src="/images/HIT/phone-app.png" alt="" title='Health Scanner' />
          <div className={ styles.textContent }>
            <div className={ styles.patents }>11 US Patents</div>
            <h1>The CDL <span>Health&nbsp;Scanner</span></h1>
            <p>An online web-application that quickly & accurately measures a driver’s blood pressure, body mass index (BMI), heart rate, and respiration.</p>
            <a href="https://healthscanner.app" className='CTA'>Learn More</a>
          </div>
        </div>

        <div className={ styles.features }>
          <div className={ styles.feature }>
            <iconify-icon icon="material-symbols:health-and-safety-outline"></iconify-icon>
            <h2>Personalized Health Data</h2>
            <p>Recieve personalized metrics including BMI, blood pressure, heart rate, and respiration</p>
          </div>
          <div className={ styles.feature }>
            <iconify-icon icon="ic:baseline-file-download-off"></iconify-icon>
            <h2>No Download Required</h2>
            <p>The application is accessed through the URL <a href="https://healthscanner.app">healthscanner.app</a></p>
          </div>
          <div className={ styles.feature }>
            <iconify-icon icon="mdi:clipboard-text-search-outline"></iconify-icon>
            <h2>Instant Results</h2>
            <p>Complete the screening in about 2 minutes, and receive your metrics instantly</p>
          </div>
        </div>

        <div className={ styles.drivingBus }>
          <div className={ styles.city } />
          <AnimatedBus pageOffset={ props.offset } />
        </div>
      </section>

      <section id='Contact' className={ styles.Contact }>
        <h1>Get in touch!</h1>
        <h2>We'd love to hear from you.</h2>
        <a className={ styles.phone } href="tel:+6026922734"><iconify-icon inline icon="material-symbols:phone-in-talk"></iconify-icon> (602) 692-2734</a>
        <ContactForm />
      </section>
    </>
  );
}
