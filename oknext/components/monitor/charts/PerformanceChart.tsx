import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, } from 'recharts';
import styles from '../../../styles/PerformanceChart.module.scss';

export default function PerformanceChart (props: any) {
  const { pMetrics, setPMetrics } = props;

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';
  const green = '#32E118';
  const orange = '#F28D27';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [type, setType] = useState('FCP');

  const data = [];

  for (let i = 0; i < props.data[0].length; i++) {
    data.push({
      name : props.data[0][i]['date'],
      FCP : (props.data[0][i]['FCP']/1000).toFixed(2), //(s)
      SI : (props.data[0][i]['speed_index']/1000).toFixed(2), //(s)
      LCP : (props.data[0][i]['LCP']/1000).toFixed(2), //(s)
      TTI : (props.data[0][i]['time_to_interactivity']/1000).toFixed(2), //(s)
      TBT : (props.data[0][i]['TBT']/1000).toFixed(2), //(ms)
      CLS : props.data[0][i]['CLS'] //no units
    })
  };
  data.reverse();

  console.log('from performance char component', props.data);
  return (
    <div className={styles.nextContainer}>
      {/* <h2>I am performance chart</h2> */}
      <div className={styles.buttonContainer}>
        <div>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: blue === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('FCP'), setColor(blue), setPMetrics(false)}}>{parseFloat(`${props.data[0][0]['FCP']/1000}`).toFixed(2)} s</button>
            <label>FCP</label>
          </section>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: red === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('SI'), setColor(red), setPMetrics(false)}}>{(props.data[0][0]['speed_index']/1000).toFixed(2)} s</button>
            <label> SI</label>
          </section>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: yellow === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('LCP'), setColor(yellow), setPMetrics(false)}}>{(props.data[0][0]['LCP']/1000).toFixed(2)} s</button>
            <label>LCP</label>
          </section>
        </div>
        <div>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: purple === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('TTI'), setColor(purple), setPMetrics(false)}}>{(props.data[0][0]['time_to_interactivity']/1000).toFixed(2)} s</button>
            <label>TTI</label>
          </section>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: green === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('TBT'), setColor(green), setPMetrics(false)}}>{(props.data[0][0]['TBT']/1000).toFixed(2)} s</button>
            <label>TBT</label>
          </section>
          <section className={styles.vitals}>
            <button className={styles.button} style={{ color: orange === color ? '#FFFFFF' : "#000" }} onClick={() => {setType('CLS'), setColor(orange), setPMetrics(false)}}>{props.data[0][0]['CLS']}</button>
            <label>CLS</label>
          </section>
        </div>
      </div>
      <div className={styles.lineGraph}>
        <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey={'name'}/>
          <YAxis type="number" domain={[0, 20]} />
          <Legend align='center' verticalAlign="bottom" height={30}/>
          { pMetrics ? (
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