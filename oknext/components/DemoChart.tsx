import { Label, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';


export default function DemoChart() {
  const data = [
    // { name: '2017', Performance: `${performance}`, Accessibility: `${accessibility}`, SEO: `${seo}`, BestPractices: `${bestpractices}`},
    { name: '11/14/2022', Performance: 33, SEO: 90, Accessibility: 83, BestPractices: 67},
    { name: '11/14/2022', Performance: 74, SEO: 92, Accessibility: 83, BestPractices: 75},
    { name: '2020', Performance: 60, SEO: 37, Accessibility: 28, BestPractices: 53},
    { name: '2021', Performance: 51, SEO: 31, Accessibility: 27, BestPractices: 37},
    { name: '2022', Performance: 95, SEO: 44, Accessibility : 49, BestPractices: 31}
  ];

  return (
    <>
      <div className={styles.monitorContainer}>
        <h2>I am Demo</h2>
        <div>
          <button>Web Core Vitals</button>
          {/* <button>Next.js Vitals</button> */}
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.webVitalBtns}>
            <label>Performance</label>
            <button className={styles.button}>74</button>
            <label>SEO</label>
            <button className={styles.button}>92</button>
            <label>Best Practices</label>
            <button className={styles.button}>75</button>
            <label>Accessibility</label>
            <button className={styles.button}>83</button>
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
              <XAxis/>
              <YAxis type='number' domain={[0, 100]}/>
              <Line type='monotone' dataKey='Performance' stroke='#2196F3' strokeWidth={3}/>
              <Line type='monotone' dataKey='SEO' stroke='#F44236' strokeWidth={3}/>
              <Line type='monotone' dataKey='Accessibility' stroke='#FFCA29' strokeWidth={3}/>
              <Line type='monotone' dataKey='BestPractices' stroke='#6d30bb' strokeWidth={3}/>
              <Tooltip/>
            </LineChart>
          </div>
        </div>
      </div>
    </>
  )
}