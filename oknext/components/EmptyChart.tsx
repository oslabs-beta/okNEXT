import { Label, Line, LineChart, XAxis, YAxis } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';


export default function EmptyChart(props: any) {
  // const data = [
  //   // { name: '2017', Performance: 0, Accessibility: 0, SEO: 0, BestPractices: 0},
  //   { name: date, Performance: `${performance}`, Accessibility: `${accessibility}`, SEO: `${seo}`, BestPractices: `${bestpractices}`}
  // ];


  return (
    <div className={styles.monitorContainer}>
      <h2>I am empty chart</h2>
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300}>
          <XAxis/>
          <YAxis type='number' domain={[0, 100]}/>
        </LineChart>
      </div>
    </div>
  )
}