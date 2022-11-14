// import { Label, Line, LineChart } from 'recharts';
// import styles from '../styles/MonitorChart.module.scss';



// export default function DemoChart() {
//   const data = [
//     // { name: '2017', Performance: `${performance}`, Accessibility: `${accessibility}`, SEO: `${seo}`, BestPractices: `${bestpractices}`},
//     { name: '2018', Lara: 42, Hua: 42, Phoebe: 53, Vivian: 37},
//     { name: '2019', Lara: 51, Hua: 41, Phoebe: 54, Vivian: 42},
//     { name: '2020', Lara: 60, Hua: 37, Phoebe: 28, Vivian: 53},
//     { name: '2021', Lara: 51, Hua: 31, Phoebe: 27, Vivian: 37},
//     { name: '2022', Lara: 95, Hua: 44, Phoebe: 49, Vivian: 31}
//   ];

//   return (
//     <div className={styles.monitorContainer}>
//       <h2>Hi I am chart</h2>
//       <div>
//         <button>Web Core Vitals</button>
//         {/* <button>Next.js Vitals</button> */}
//       </div>
//       <div className={styles.chartContainer}>
//         <div className={styles.webVitalBtns}>
//           <label>Performance</label>
//           <button className={styles.button}>95</button>
//           <label>SEO</label>
//           {/* <button className={styles.button}>{seo}</button> */}
//           <label>Best Practices</label>
//           {/* <button className={styles.button}>{bestpractices}</button> */}
//           <label>Accessibility</label>
//           {/* <button className={styles.button}>{accessibility}</button> */}
//         </div>
//         {/* Next.js vital measurements */}
//         {/* maybe make a separate component? *stretch */}
//         {/* <div>
//           <button>hydration</button>
//           <button>route-change-to-render</button>
//           <button>render</button>
//         </div> */}
//         <div className={styles.lineGraph}>
//           <LineChart width={600} height={300} data={data}>
//             <Line type='monotone' dataKey='Lara' stroke='#2196F3' strokeWidth={3}/>
//             <Line type='monotone' dataKey='Hua' stroke='#F44236' strokeWidth={3}/>
//             <Line type='monotone' dataKey='Phoebe' stroke='#FFCA29' strokeWidth={3}/>
//             <Line type='monotone' dataKey='Vivian' stroke='#6d30bb' strokeWidth={3}/>
//           </LineChart>
//         </div>
//       </div>
//     </div>
//   )
// }