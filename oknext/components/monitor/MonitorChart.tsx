import { useState } from 'react';
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import styles from '../../styles/MonitorChart.module.scss';
import { UserContext, useUser } from '@auth0/nextjs-auth0';

export default function MonitorChart(props: any) {
  const { user, error, isLoading } = useUser(); //from auth0
  const { performance, accessibility, seo, bestpractices, performanceScores } = props.data;
  const { webChart, setWebChart, color, type } = props;

  const date = props.date ? props.date : null;
  console.log('From MonitorChart!', props.data[0])

  // const data = props.data[0];
  const data = [
    // {
    //   name: date,
    //   Performance: `${performance}`,
    //   Accessibility: `${accessibility}`,
    //   SEO: `${seo}`,
    //   BestPractices: `${bestpractices}`,
    // },
  ];
  for (let i = 0; i < props.data[0].length; i++) {
    data.push({
      name : props.data[0][i]['date'],
      Performance : props.data[0][i]['performance'],
      Accessibility : props.data[0][i]['accessibility'],
      SEO : props.data[0][i]['SEO'],
      BestPractices : props.data[0][i]['best_practices'],
    })
  }
  
  data.reverse();

  console.log(data);

  return (
    <div className={styles.monitorContainer}>
      <div className={styles.lineGraph}>
      <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey={'name'}/>
          <YAxis type="number" domain={[0, 100]} />
          <Legend align='center' verticalAlign="bottom" height={30}/>
          {/* if rendChart is true render all lines */}
          {webChart ? (
            <>
              <Line
                type="monotone"
                dataKey="Performance"
                stroke="#2196F3"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="SEO"
                stroke="#F44236"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Accessibility"
                stroke="#FFCA29"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="BestPractices"
                stroke="#6d30bb"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
            </>
            ) : (
            <Line
              type="monotone"
              dataKey={type}
              stroke={color}
              strokeWidth={3}
              activeDot={{ r: 5 }}
            />
            )}
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}