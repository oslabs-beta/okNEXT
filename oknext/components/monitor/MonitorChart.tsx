import { useState, Suspense } from 'react';
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';
import { UserContext, useUser } from '@auth0/nextjs-auth0';

export default function MonitorChart(props: any) {
  const { user, error, isLoading } = useUser(); //from auth0

  //move buttons to monitor.tsx
  const { performance, accessibility, seo, bestpractices, performanceScores } = props.data;

  console.log('i am performanceScores', performanceScores);

  const date = props.date ? props.date : null;

  const data = [
    // { name: '2017', Performance: 0, Accessibility: 0, SEO: 0, BestPractices: 0},
    {
      name: date,
      Performance: `${performance}`,
      Accessibility: `${accessibility}`,
      SEO: `${seo}`,
      BestPractices: `${bestpractices}`,
    },
  ];

  console.log('from monitor char component', props.data);
  return (
    <div className={styles.monitorContainer}>
      <h2>I am monitor chart</h2>
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Line
            type="monotone"
            dataKey="Performance"
            stroke="#2196F3"
            strokeWidth={2}
            activeDot={{r: 5}}
          />
          <Line
            type="monotone"
            dataKey="Accessibility"
            stroke="#F44236"
            strokeWidth={3}
            activeDot={{r: 5}}
          />
          <Line
            type="monotone"
            dataKey="SEO"
            stroke="#FFCA29"
            strokeWidth={3}
            activeDot={{r: 5}}
          />
          <Line
            type="monotone"
            dataKey="BestPractices"
            stroke="#6d30bb"
            strokeWidth={3}
            activeDot={{r: 5}}
          />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
