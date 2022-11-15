import { useState } from 'react';
import { Label, Line, LineChart, XAxis, YAxis } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';


export default function MonitorChart(props: any) {
  // const [ performance, setPerformance ]= useState('-');
  // const [ accessibility, setAccessibility ]= useState('-');
  // const [ seo, setSeo ]= useState('-');
  // const [ bestpractices, setBestPractices ]= useState('-');
  
  //move buttons to monitor.tsx
  const performance = props.data.performance ? props.data.performance : '-';
  const accessibility = props.data.accessibility ? props.data.accessibility : '-';
  const seo = props.data.seo ? props.data.seo : '-';
  const bestpractices = props.data.bestpractices ? props.data.bestpractices : '-';

  console.log('i am performance', performance)

  const date = props.date ? props.date : null;

  const data = [
    // { name: '2017', Performance: 0, Accessibility: 0, SEO: 0, BestPractices: 0},
    { name: date, Performance: `${performance}`, Accessibility: `${accessibility}`, SEO: `${seo}`, BestPractices: `${bestpractices}`},
    // { name: '2018', Lara: 42, Hua: 42, Phoebe: 53, Vivian: 37},
    // { name: '2019', Lara: 51, Hua: 41, Phoebe: 54, Vivian: 42},
    // { name: '2020', Lara: 60, Hua: 37, Phoebe: 28, Vivian: 53},
    // { name: '2021', Lara: 51, Hua: 31, Phoebe: 27, Vivian: 37},
    // { name: '2022', Lara: 95, Hua: 44, Phoebe: 49, Vivian: 31}
  ];

  console.log('from monitor char component', props.data);
  return (
    <div className={styles.monitorContainer}>
      <h2>Hi I am chart</h2>
      <div>
        <button>Web Core Vitals</button>
        {/* <button>Next.js Vitals</button> */}
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.webVitalBtns}>
          <label>Performance</label>
          <button className={styles.button}>{performance}</button>
          <label>SEO</label>
          <button className={styles.button}>{seo}</button>
          <label>Best Practices</label>
          <button className={styles.button}>{bestpractices}</button>
          <label>Accessibility</label>
          <button className={styles.button}>{accessibility}</button>
        </div>
        {/* Next.js vital measurements */}
        {/* maybe make a separate component? *stretch */}
        {/* <div>
          <button>hydration</button>
          <button>route-change-to-render</button>
          <button>render</button>
        </div> */}
        <div className={styles.lineGraph}>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey='name'/>
            <YAxis type='number' domain={[0, 100]}/>
            <Line type='monotone' dataKey='Performance' stroke='#2196F3' strokeWidth={3}/>
            <Line type='monotone' dataKey='Accessibility' stroke='#F44236' strokeWidth={3}/>
            <Line type='monotone' dataKey='SEO' stroke='#FFCA29' strokeWidth={3}/>
            <Line type='monotone' dataKey='BestPractices' stroke='#6d30bb' strokeWidth={3}/>
          </LineChart>
        </div>
      </div>
    </div>
  )
}