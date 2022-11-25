import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../../../styles/MonitorChart.module.scss';

export default function PerformanceChart (props: any) {
  const { fcp, lcp, speed, cls, tti, tbt } = props.data.performanceScores;
  const { date } = props;

  console.log('i am performanceScores', props.data.performanceScores);

  // const date = props.date ? props.date : null;

  const data = [
    // { name: '2017', Performance: 0, Accessibility: 0, SEO: 0, BestPractices: 0},
    {
      name: date,
      FCP: `${fcp.numericValue}`,
      SI: `${speed.numericValue}`,
      LCP: `${lcp.numericValue}`,
      TTI: `${tti.numericValue}`,
      TBT: `${tbt.numericValue}`,
      CLS: `${cls.numericValue}`
    },
  ];

  console.log('from performance char component', props.data);
  return (
    <div className={styles.monitorContainer}>
      <h2>I am performance chart</h2>
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 1000]} />
          <Line
            type="monotone"
            dataKey="FCP"
            stroke="#2196F3"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="SI"
            stroke="#F44236"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="LCP"
            stroke="#FFCA29"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="TTI"
            stroke="#6d30bb"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="TBT"
            stroke="#32E118"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="CLS"
            stroke="#6d30bb"
            strokeWidth={3}
          />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};