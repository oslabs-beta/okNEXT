import Link from 'next/link';
import Head from 'next/head';
import { use, useState } from 'react';
import MonitorChart from '../../components/MonitorChart';
import EmptyChart from '../../components/EmptyChart';
import styles from '../../styles/Monitor.module.scss';
import PerformanceChart from '../../components/PerformanceChart';

export default function Monitor() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();
  const [rendChart, setRendChart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    setToggle(true);
  }

  const fetchVitals = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    console.log('hello from the frontend');
    const response = await fetch('/api/lighthouseData', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log('after fetch request finishes');
    const vitalData = await response.json();
    setData(vitalData);

    console.log('response jsonified', vitalData);
    const timestamp = Date.now();
    const humanReadableDateTime = new Date(timestamp).toLocaleString();
    setDate(humanReadableDateTime);
    //reset input box to empty
    setUrl('');
    setIsLoading(false);
    setRendChart(true);
    //add error handling
  };

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
                  type="url"
                  placeholder="/"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>
              <button className={styles.algoliaButton} onClick={fetchVitals}>
                Get Report
              </button>
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
                {data ? 
                <button className={styles.button} onClick={handleClick}>{data.performance}</button>
                : <button className={styles.button}>-</button>
                }
                <label>Performance</label>
              </section>
              <section className={styles.vitals}>
              {data ? 
                <button className={styles.button}>{data.seo}</button>
                : <button className={styles.button}>-</button>
                }
                <label>SEO</label>
              </section>
              <section className={styles.vitals}>
                {data ? 
                <button className={styles.button}>{data.bestpractices}</button>
                : <button className={styles.button}>-</button>
                }
                <label>Best Practices</label>
              </section>
              <section className={styles.vitals}>
                {data ? 
                <button className={styles.button}>{data.accessibility}</button>
                : <button className={styles.button}>-</button>
                }
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
            {/* {!rendChart && isLoading ? (
              <LoadingSpinner />
            ) : // <EmptyChart />
            !isLoading && rendChart ? (
              <MonitorChart data={data} date={date} />
            ) : (
              <EmptyChart />
            )} */}
            {rendChart && toggle === false ? (
              <MonitorChart
                data={data}
                date={date}
                setIsLoading={setIsLoading}
              />
            ) : toggle === false ? (
              <EmptyChart isLoading={isLoading} />
            ) : (
              ''
            )}

            {toggle ? (
              <PerformanceChart
                data={data}
                date={date}
                setIsLoading={setIsLoading}
              />
            ) : ''}
          </div>
        </div>
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}

