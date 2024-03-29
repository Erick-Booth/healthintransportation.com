import Image from 'next/image';
import styles from '../styles/home.module.scss';
import Link from 'next/link';

import Bob from '../../public/images/HIT/Bob.webp';
import PhoneApp from '../../public/images/HIT/phone-app.webp';

import AnimatedBus from '@/components/svgs/animatedBus';
import ContactForm from '@/components/contactForm';
import Carousel from '@/components/carousel';

export default function Home(props) {
  return (
    <>
      <section id='Landing' className={ styles.Landing }>
        <div className="container">
          <h1>Protecting Drivers' Livelihoods Through Better Health Choices</h1>
          <h2>We provide health & medical services to fleets & CDL drivers</h2>
          <Link title='Contact Us' href={ '/contact' }>Contact Us <iconify-icon inline icon="material-symbols:chat-outline-sharp"></iconify-icon></Link>
        </div>
      </section>

      <section id="About" className={ styles.About }>
        <Carousel />
        <div className={ styles.text }>
          <p className={ styles.believe }>Believe Us,</p>
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
            <iconify-icon inline icon="fluent-mdl2:health-solid"></iconify-icon> CDL Health Scanner
          </li>
          <li>
            <iconify-icon inline icon="ic:sharp-card-giftcard"></iconify-icon> Reward your drivers with a FIT Driver VISA Rewards Card
          </li>
          <li>
            <iconify-icon inline icon="mdi:teacher"></iconify-icon> Telephonic & Onsite CDL Health&nbsp;Coaching
          </li>
          <li>
            <iconify-icon inline icon="ri:health-book-fill"></iconify-icon> Disease Management Programs
          </li>
        </ul>
      </section>

      <section id='Grid' className={ styles.Grid }>
        <a href="https://www.cdlhealthscanner.com" target={ '_blank' } rel='noreferrer'>
          <h3>CDL Health Scanner</h3>
          <p>An online web-application that quickly & accurately measures a driver’s blood pressure, body mass index (BMI), heart rate, and respiration.</p>
        </a>
        <Link href="#BobPerry">
          <h3>Bob Perry Trucker&nbsp;Trainer&trade; Consulting</h3>
          <p>Helping carriers help drivers make healthier choices & stay in the seat.</p>
        </Link>
        <a href="https://Galileo.io" target={ '_blank' } rel='noreferrer'>
          <h3>Galileo Health</h3>
          <p>Bringing the best doctors to you on your mobile device. Get care in your cab, at home, or anywhere you go.</p>
        </a>
      </section>

      <section id='BobPerry' className={ styles.Bob }>
        <Image src={ Bob } alt="" title='Bob Perry' />
        <div className={ styles.text }>
          <h3>Bob Perry</h3>
          <h4>President & Founder</h4>
          <span className='separator' />
          <p>Bringing more than <span>25 Years</span> of Wellness Expertise to the Driver’s Community, Bob comes from a family of career drivers from Northeast Ohio, who have been in the industry for the past 4 decades.</p>
          <p>Having devoted his career to the health & fitness of professional drivers, Bob is recognized all over the country as the <span>Trucker Trainer&trade;</span>.</p>
          <p>From 2007-2009, he served as the Vice-Chairman of the <span>ATA Safety Management Council’s</span> Health & Wellness Working Group, then served as Chairman for an additional 4 years. To this day, Bob remains active with both the ATA, and ABA.</p>
        </div>
      </section>

      <section id='HealthScanner' className={ styles.HealthScanner }>
        <div className={ styles.topContent }>
          <Image src={ PhoneApp } alt="" title='Health Scanner' />
          <div className={ styles.textContent }>
            <div className={ styles.patents }>11 US Patents</div>
            <h3>The CDL <span>Health&nbsp;Scanner</span></h3>
            <p>An online web-application that quickly & accurately measures a driver’s blood pressure, body mass index (BMI), heart rate, and respiration.</p>
            <a href="https://cdlhealthscanner.com">Visit CDLHealthScanner.com</a>
          </div>
        </div>

        <div className={ styles.features }>
          <div className={ styles.feature }>
            <iconify-icon icon="material-symbols:health-and-safety-outline"></iconify-icon>
            <h4>Personalized Health Data</h4>
            <p>Receive personalized metrics including BMI, blood pressure, heart rate, and respiration.</p>
          </div>
          <div className={ styles.feature }>
            <iconify-icon icon="ic:baseline-file-download-off"></iconify-icon>
            <h4>No Download Required</h4>
            <p>The application is accessed through a URL.</p>
          </div>
          <div className={ styles.feature }>
            <iconify-icon icon="mdi:clipboard-text-search-outline"></iconify-icon>
            <h4>Instant Results</h4>
            <p>Complete the screening in about 2 minutes, and receive your metrics instantly.</p>
          </div>
        </div>

        <div className={ styles.drivingBus }>
          <div className={ styles.city } />
          <AnimatedBus pageOffset={ props.offset } />
        </div>
      </section>

      <section id='Contact' className={ styles.Contact }>
        <h3>Get in touch!</h3>
        <h4>We'd love to hear from you.</h4>
        <a className={ styles.phone } href="tel:+6026922734"><iconify-icon inline icon="material-symbols:phone-in-talk"></iconify-icon> (602) 692-2734</a>
        <ContactForm />
      </section>
    </>
  );
}
