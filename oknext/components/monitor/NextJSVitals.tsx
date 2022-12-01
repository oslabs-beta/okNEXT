import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import styles from '../../styles/NextJSVitals.module.scss';


export default function NextJSVitals (props:any) {
  const { chart, setChart } = props;

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [activeIndex, setActive] = useState(0);
  const [type, setType] = useState('Hydration');
  // const [chart, setChart] = useState(false);
  console.log('data in next.js vitals chart', props.data[2])
  const data = [];

  for (let i = 0; i < props.data[2].length; i++) {
    // console.log('data here', props.data[2][i]['nextjs_beforehydrationduration'])
    data.push({
      name : props.data[2][i]['date'],
      "Before Hydration Duration" :  props.data[2][i]['nextjs_beforehydrationduration'],
      "Hydration Duration" : props.data[2][i]['nextjs_hydrationduration'],
      "Before Render Start" : props.data[2][i]['nextjs_beforerenderstart'],
    })
  };
  data.reverse();

  const buttons = [
    {
      name: "Before Hydration Duration",
      color: blue,
      value: `${props.data[2][0]['nextjs_beforehydrationduration']}`,
      id: 1
    },
    {
      name: "Hydration Duration",
      color: yellow,
      value: `${props.data[2][0]['nextjs_hydrationduration']}`,
      id: 2
    },
    {
      name: "Before Render Start",
      color: red,
      value: `${props.data[2][0]['nextjs_beforerenderstart']}`,
      id: 3
    }
  ];

  return (
    <div className={styles.nextContainer}>
      <div className={styles.buttonContainer}>
          {buttons.map((item, index) => 
            <div key={index} >
             <button className={styles.button} style={{ color: item.color === color ? '#FFFFFF' : '#000' }} onClick={() => {setType(item.name), setActive(index),
             setColor(item.color), setChart(false)}}>
              {item.value} ms
             </button>
             <label>{item.name}</label>
            </div>
          )}
      </div>
      <div className={styles.chartContainer}>
        <LineChart width={600} height={300} data={data} margin={{ top: 25, right: 35, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3'} horizontal={true} vertical={false}/>
          <XAxis dataKey={'name'}/>
          <YAxis type="number" domain={[0, 150]} />
          <Legend align='center' verticalAlign="bottom" height={30}/>
          {chart ? (
            <>
          <Line
            type="monotone"
            dataKey="Before Hydration Duration"
            stroke={blue}
            strokeWidth={4}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Hydration Duration"
            stroke={yellow}
            strokeWidth={3}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Before Render Start"
            stroke={red}
            strokeWidth={2}
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