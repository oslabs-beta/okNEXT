import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import styles from '../../styles/NextJSVitals.module.scss';


export default function NextJSVitals (props:any) {
  const { chart, setChart } = props;

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [activeIndex, setActive] = useState(0);
  const [type, setType] = useState('Hydration');
  // const [chart, setChart] = useState(false);

  const data = [
    // {
    //   name: date,
    //   Hydration: `${beforeHydrationDuration}`,
    //   "Route-Change-to-Render": `${hydrationDuration}`,
    //   Render: `${beforeRenderStart}`
    // }
  ];

/*
  for (let i = 0; i < props.data[2].length; i++) {
    data.push({
      name : props.data[2][i]['date'],
      beforeHydration :  props.data[2][i]['nextjs_beforehydrationduration'],
      hydrationDuration : props.data[2][i]['nextjs_hydrationduration'],
      beforeRenderStart : props.data[2][i]['nextjs_beforerenderstart'],
    })
  };

  */

  const buttons = [
    // {
    //   name: "Before-Hydration",
    //   color: blue,
    //   value: `${beforeHydrationDuration}`,
    //   id: 1
    // },
    // {
    //   name: "Hydration-Duration",
    //   color: red,
    //   value: `${hydrationDuration}`,
    //   id: 2
    // },
    // {
    //   name: "Before-Render-Start",
    //   color: purple,
    //   value: `${beforeRenderStart}`,
    //   id: 3
    // }
  ];

  return (
    <div className={styles.nextContainer}>
      <h3 className={styles.header}>I am Next.js</h3>
      <div className={styles.buttonContainer}>
          {buttons.map((item, index) => 
            <div className={styles.buttons} key={index} >
             <button style={{ color: item.color === color ? color : "#000" }} onClick={() => {setType(item.name), setActive(index),
             setColor(item.color), setChart(false)}}>
              {item.value}
             </button>
             <label>{item.name}</label>
            </div>
          )}
      </div>
      <div className={styles.chartContainer}>
        <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey={'name'}/>
          <YAxis type="number" domain={[0, 100]} />
          <Legend align='center' verticalAlign="bottom" height={30}/>
          {chart ? (
            <>
          <Line
            type="monotone"
            dataKey="Hydration"
            stroke={blue}
            strokeWidth={3}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Route-Change-to-Render"
            stroke={red}
            strokeWidth={3}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Render"
            stroke={purple}
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
  )
}