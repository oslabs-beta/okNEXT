import { useState, Suspense } from 'react';
import { Label, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../styles/MonitorChart.module.scss';
import LoadingSpinner from './LoadingSpinner';
import { UserContext, useUser } from '@auth0/nextjs-auth0';

export default function MonitorChart(props: any) {
  const { user, error, isLoading } = useUser(); //from auth0

  //move buttons to monitor.tsx
  const { performance, accessibility, seo, bestpractices } = props.data;
  // const performance = props.data.performance ? props.data.performance : '-';
  // const accessibility = props.data.accessibility ? props.data.accessibility : '-';
  // const seo = props.data.seo ? props.data.seo : '-';
  // const bestpractices = props.data.bestpractices ? props.data.bestpractices : '-';

  console.log('i am performance', performance);

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
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Line
            type="monotone"
            dataKey="Performance"
            stroke="#2196F3"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Accessibility"
            stroke="#F44236"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="SEO"
            stroke="#FFCA29"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="BestPractices"
            stroke="#6d30bb"
            strokeWidth={3}
          />
          <Tooltip />
        </LineChart>
      </div>
      {/* </Suspense> */}
    </div>
  );
}
