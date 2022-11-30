import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../../../styles/MonitorChart.module.scss';

export default function PerformanceChart (props: any) {
  // const { fcp, lcp, speed, cls, tti, tbt } = props.data[0];
  const { pChart } = props;

  // console.log('i am performanceScores', props.data.performanceScores);

  const data = [
    // {
    //   name: date,
    //   FCP: `${fcp.numericValue}`, //ms change it to s
    //   SI: `${speed.numericValue}`, //ms change it to s
    //   LCP: `${lcp.numericValue}`, //ms change it to s
    //   TTI: `${tti.numericValue}`, //ms (can change to s i think)
    //   TBT: `${tbt.numericValue}`, //ms change it to s
    //   CLS: `${cls.numericValue}` //no units
    // },
  ];
  for (let i = 0; i < props.data[0].length; i++) {
    data.push({
      name : props.data[0][i]['date'],
      FCP : props.data[0][i]['FCP'],
      SI : props.data[0][i]['speed_index'],
      LCP : props.data[0][i]['LCP'],
      TTI : props.data[0][i]['time_to_interactivity'],
      TBT : props.data[0][i]['TBT'],
      CLS : props.data[0][i]['CLS']
    })
  };
  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';
  const green = '#32E118';
  const orange = '#F28D27';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [type, setType] = useState('FCP');

  console.log('from performance char component', props.data);
  return (
    <div className={styles.monitorContainer}>
      <h2>I am performance chart</h2>
      <div className={styles.buttonContainer}>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: blue === color ? color : "#000" }} onClick={() => {setType('FCP'), setColor(blue)}}>{data[0][0]['FCP']}</button>
          <label>FCP</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: red === color ? color : "#000" }} onClick={() => {setType('SI'), setColor(red)}}>{data[0][0]['speed_index']}</button>
          <label>SI</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: yellow === color ? color : "#000" }} onClick={() => {setType('LCP'), setColor(yellow)}}>{data[0][0]['LCP']}</button>
          <label>LCP</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: purple === color ? color : "#000" }} onClick={() => {setType('TTI'), setColor(purple)}}>{data[0][0]['time_to_interactivity']}</button>
          <label>TTI</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: green === color ? color : "#000" }} onClick={() => {setType('TBT'), setColor(green)}}>{data[0][0]['TBT']}</button>
          <label>TBT</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} style={{ color: orange === color ? color : "#000" }} onClick={() => {setType('CLS'), setColor(orange)}}>{data[0][0]['CLS']}</button>
          <label>CLS</label>
        </section>
      </div>
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 1000]} />
          { pChart ? (
            <>
              <Line
                type="monotone"
                dataKey="FCP"
                stroke={blue}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="SI"
                stroke={red}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="LCP"
                stroke={yellow}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="TTI"
                stroke={purple}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="TBT"
                stroke={green}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="CLS"
                stroke={orange}
                strokeWidth={3}
              />
            </>
          ) : (
            <Line
              type="monotone"
              dataKey={type}
              stroke={color}
              strokeWidth={3}
            />
          )
          }
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};