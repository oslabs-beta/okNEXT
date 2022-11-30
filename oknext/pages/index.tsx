import Head from 'next/head';
// import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import DemoChart from '../components/DemoChart';
import Team from '../components/Team';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>okNEXT</title>
      </Head>
      <div className={styles.body}>
        <div>
          <h2 className={styles.header}>
            Next.js Performance Monitoring with{' '}
            <span className={styles.companyName}>okNEXT</span>.
          </h2>
          <div className={styles.getStartedBtn}>
            <Link href="/monitoring/monitor" className={styles.button84}>
              Get Started
            </Link>
          </div>
        </div>
        <DemoChart />
      </div>
      <Features />
      <Testimonials />
      <div className={styles.meetTeam}>OSLabs Team</div>
      <Team />
    </div>
  );
}
