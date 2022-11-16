import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import MonitorChart from '../../components/MonitorChart';
import EmptyChart from '../../components/EmptyChart';
import styles from '../../styles/Monitor.module.scss';
import fetchdata from '../api/lighthouseData';

export default function Monitor() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();
  const [ performance, setPerformance ]= useState('-');
  const [ accessibility, setAccessibility ]= useState('-');
  const [ seo, setSeo ]= useState('-');
  const [ bestpractices, setBestPractices ]= useState('-');
  const [rendChart, setRendChart] = useState(false);
  const [date, setDate] = useState('');
 

  const fetchVitals = async (e: any) => {
    e.preventDefault();

    console.log('hello from the frontend');
    const response = await fetch('/api/lighthouseData', {
      method:'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('after fetch request finishes');
    const vitalData = await response.json();
    setData(vitalData);
    setPerformance(vitalData.performance);
    setAccessibility(vitalData.accessibility);
    setSeo(vitalData.seo);
    setBestPractices(vitalData.bestpractices);

    console.log('response jsonified', vitalData);
    const timestamp = Date.now()
    const humanReadableDateTime = new Date(timestamp).toLocaleString()
    setDate(humanReadableDateTime)
    //reset input box to empty
    setUrl('');
    setRendChart(true);
    //add error handling
  }


  return (
    <>
      <Head>
        <title>Performance Monitoring</title>
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h3>App Performance Monitoring</h3>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <form>
              <label>
                Enter an endpoint:
                <input 
                  value={url}
                  type= 'url'
                  placeholder='/'
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>
              <button className={styles.algoliaButton} onClick={fetchVitals}>Get Report</button>
            </form>
          </div>
          <div className={styles.vitalsButtons}>
            <button className={styles.algoliaButton}>Web Core Vitals</button>
            {/* <button>Next.js Vitals</button> */}
          </div>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.buttonsContainer}>
            <div className={styles.webVitalBtns}>
              <section className={styles.vitals}>
                <button className={styles.button}>{performance}</button>
                <label>Performance</label>
              </section>
              <section className={styles.vitals}>
                <button className={styles.button}>{seo}</button>
                <label>SEO</label>
              </section>
              <section className={styles.vitals}>
                <button className={styles.button}>{bestpractices}</button>
                <label>Best Practices</label>
              </section>
              <section className={styles.vitals}>
                <button className={styles.button}>{accessibility}</button>
                <label>Accessibility</label>
              </section>
            </div>
          {/* Next.js vital measurements */}
          {/* maybe make a separate component? *stretch */}
          {/* <div>
            <button>hydration</button>
            <button>route-change-to-render</button>
            <button>render</button>
          </div> */}
          </div>
          <div className={styles.chart}>
            {rendChart ? <MonitorChart data={data} date={date} /> : <EmptyChart/> }
          </div>
        </div>
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}