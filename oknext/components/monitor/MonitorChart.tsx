import { useState } from 'react';
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import styles from '../../styles/MonitorChart.module.scss';
import { UserContext, useUser } from '@auth0/nextjs-auth0';

export default function MonitorChart(props: any) {
  const { user, error, isLoading } = useUser(); //from auth0
  const { performance, accessibility, seo, bestpractices, performanceScores } = props.data;

  //I'm not sure if the state on lines 17-19 should be here or in monitor
  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [activeIndex, setActive] = useState(0);
  const [type, setType] = useState('Performance');
  

  const date = props.date ? props.date : null;

  const data = [
    {
      name: date,
      Performance: `${performance}`,
      Accessibility: `${accessibility}`,
      SEO: `${seo}`,
      BestPractices: `${bestpractices}`,
    },
  ];

  // console.log('from monitor char component', props.data);
  return (
    <div className={styles.monitorContainer}>
      <h2>I am monitor chart</h2>
      <div className={styles.lineGraph}>
      <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey={'name'}/>
          <YAxis type="number" domain={[0, 100]} />
          <Legend align='center' verticalAlign="bottom" height={30}/>
          {/* if rendChart is true render all lines */}
          {/* {chart ? (
            <> */}
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
            {/* </>
            ) : (
            <Line
              type="monotone"
              dataKey={type}
              stroke={color}
              strokeWidth={3}
              activeDot={{ r: 5 }}
            />
            )} */}
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

//OLD: Monitor Chart
// export default function MonitorChart(props: any) {
//   const { user, error, isLoading } = useUser(); //from auth0
//   const { performance, accessibility, seo, bestpractices, performanceScores } = props.data;

//   console.log('i am performanceScores', performanceScores);

//   const date = props.date ? props.date : null;

//   const data = [
//     {
//       name: date,
//       Performance: `${performance}`,
//       Accessibility: `${accessibility}`,
//       SEO: `${seo}`,
//       BestPractices: `${bestpractices}`,
//     },
//   ];

//   // console.log('from monitor char component', props.data);
//   return (
//     <div className={styles.monitorContainer}>
//       <h2>I am monitor chart</h2>
//       <div className={styles.lineGraph}>
//       <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
//           <XAxis dataKey={'name'}/>
//           <YAxis type="number" domain={[0, 100]} />
//           <Legend align='center' verticalAlign="bottom" height={30}/>
//           <Line
//             type="monotone"
//             dataKey="Performance"
//             stroke="#2196F3"
//             strokeWidth={2}
//             activeDot={{r: 5}}
//           />
//           <Line
//             type="monotone"
//             dataKey="Accessibility"
//             stroke="#F44236"
//             strokeWidth={3}
//             activeDot={{r: 5}}
//           />
//           <Line
//             type="monotone"
//             dataKey="SEO"
//             stroke="#FFCA29"
//             strokeWidth={3}
//             activeDot={{r: 5}}
//           />
//           <Line
//             type="monotone"
//             dataKey="BestPractices"
//             stroke="#6d30bb"
//             strokeWidth={3}
//             activeDot={{r: 5}}
//           />
//           <Tooltip />
//         </LineChart>
//       </div>
//     </div>
//   );
// }