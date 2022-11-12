import { Line, LineChart } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';

const data = [
  { name: '2017', Lara: 32, Hua: 37, Phoebe: 60, Vivian: 32},
  { name: '2018', Lara: 42, Hua: 42, Phoebe: 53, Vivian: 37},
  { name: '2019', Lara: 51, Hua: 41, Phoebe: 54, Vivian: 42},
  { name: '2020', Lara: 60, Hua: 37, Phoebe: 28, Vivian: 53},
  { name: '2021', Lara: 51, Hua: 31, Phoebe: 27, Vivian: 37},
  { name: '2022', Lara: 95, Hua: 44, Phoebe: 49, Vivian: 31}
];

export default function MonitorChart(props: any) {
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
          <button className={styles.button}>Performance</button>
          <button className={styles.button}>SEO</button>
          <button className={styles.button}>Best Practices</button>
          <button className={styles.button}>Accessibility</button>
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
            <Line type='monotone' dataKey='Lara' stroke='#2196F3' strokeWidth={3}/>
            <Line type='monotone' dataKey='Hua' stroke='#F44236' strokeWidth={3}/>
            <Line type='monotone' dataKey='Phoebe' stroke='#FFCA29' strokeWidth={3}/>
            <Line type='monotone' dataKey='Vivian' stroke='#6d30bb' strokeWidth={3}/>
          </LineChart>
        </div>
      </div>
    </div>
  )
}