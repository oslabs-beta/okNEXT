import { useState } from 'react';
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import styles from '../../styles/MonitorChart.module.scss';
import { UserContext, useUser } from '@auth0/nextjs-auth0';

export default function MonitorChart(props: any) {
  const { user, error, isLoading } = useUser(); //from auth0
  const { performance, accessibility, seo, bestpractices, performanceScores } = props.data;
  const {chart} = props;

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [activeIndex, setActive] = useState(0);
  const [type, setType] = useState('Performance');
  //entire graph to populate demo
  // const [chart, setChart] = useState(true);
  

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
          {chart ? (
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

//OLD ONE
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

//DEMO
// export default function MonitorChart(props: any) {
// const blue = '#2196F3';
//   const red = '#F44236';
//   const yellow = '#FFCA29';
//   const purple = '#6d30bb';

  // //   //individual lines to populate the graph
  // const [color, setColor] = useState(blue);
  // const [activeIndex, setActive] = useState(0);
  // const [type, setType] = useState('Performance');
  // //entire graph to populate demo
  // const [demo, setDemo] = useState(true);

//   const data = [
//     {
//       name: "11/14",
//       Performance: 74,
//       SEO: 90,
//       Accessibility: 83,
//       "Best Practices": 67,
//     },
//     {
//       name: "11/15",
//       Performance: 74,
//       SEO: 92,
//       Accessibility: 83,
//       "Best Practices": 75,
//     },
//     {
//       name: "11/20",
//       Performance: 85,
//       SEO: 100,
//       Accessibility: 90,
//       "Best Practices": 100,
//     },
//     {
//       name: "11/21",
//       Performance: 64,
//       SEO: 92,
//       Accessibility: 83,
//       "Best Practices": 75,
//     },
//     {
//       name: "2022",
//       Performance: 95,
//       SEO: 44,
//       Accessibility: 49,
//       "Best Practices": 31,
//     },
//   ];


//   const BUTTONS = [
//     {
//       name: "Performance",
//       color: blue,
//       value: 74,
//       id: 1
//     },
//     {
//       name: "SEO",
//       color: red,
//       value: 92,
//       id: 2
//     },
//     {
//       name: "Best Practices",
//       color: purple,
//       value: 75,
//       id: 3
//     },
//     {
//       name: "Accessibility",
//       color: yellow,
//       value: 83,
//       id: 4
//     }
//   ];
  
//   return (
//     <>
//       <div className={styles.monitorContainer}>
//         <h2>I am Demo</h2>
//         <div>
//           <button onClick={() => setDemo(true)}>Web Core Vitals</button>
//           <button>Next.js Vitals</button>
//         </div>
//         <div className={styles.chartContainer}>
//           {BUTTONS.map((item, index) => 
//             <div className={styles.webVitalBtns} key={index} >
//              <button className={styles.button} style={{ color: item.color === color ? color : "#000" }} onClick={() => {setType(item.name), setActive(index),
//              setColor(item.color), setDemo(false)}}>
//               {item.value}
//              </button>
//              <label>{item.name}</label>
//             </div>
//           )}
//           <div className={styles.lineGraph}>
//             <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
//               <XAxis dataKey={'name'}/>
//               <YAxis type="number" domain={[0, 100]} />
//               <Legend align='center' verticalAlign="bottom" height={30}/>
//               {demo ? (
//                 <>
//               <Line
//                 type="monotone"
//                 dataKey="Performance"
//                 stroke="#2196F3"
//                 strokeWidth={3}
//                 activeDot={{ r: 5 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="SEO"
//                 stroke="#F44236"
//                 strokeWidth={3}
//                 activeDot={{ r: 5 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Accessibility"
//                 stroke="#FFCA29"
//                 strokeWidth={3}
//                 activeDot={{ r: 5 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="BestPractices"
//                 stroke="#6d30bb"
//                 strokeWidth={3}
//                 activeDot={{ r: 5 }}
//               />
//               </>
//               ) : (
//               <Line
//                 type="monotone"
//                 dataKey={type}
//                 stroke={color}
//                 strokeWidth={3}
//                 activeDot={{ r: 5 }}
//               />
//               )}
//               <Tooltip />
//             </LineChart>
//           </div>
//         </div>
//       </div>
//     </>
//   );