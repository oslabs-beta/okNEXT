import Head from 'next/head';
// import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
// import DemoChart from '../components/DemoChart';

export default function Home() {
  return (
    <div>
      <Head>
        <title>okNEXT</title>
      </Head>
      <h1 className={styles.mission}>Dev-tools for Next.js Developers</h1>
      <div className={styles.body}>
        <div>
          <h2>Next.js 13 Performance Monitoring</h2>
          <p>Monitor key website performance metrics using Google Lighthouse</p>
          <p>Additional Next.js-specific metrics such as:</p>
          <p>- Next.js-hydration</p>
          <p>- Next.js-route-change-to-render</p>
          <p>- Next.js-render</p>
        </div>
        {/* <DemoChart /> */}
      </div>

      <div className={styles.body}>Sponsored by OSLabs Beta Tech Accelator</div>
      <div className={styles.body}>Meet the team!</div>
      <div className={styles.body}>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </div>
    </div>
  );
}
