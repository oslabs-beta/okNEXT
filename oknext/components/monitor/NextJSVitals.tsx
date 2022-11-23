import { useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';


export default function NextJSVitals (props:any) {
  const { beforeHydrationDuration, hydrationDuration, beforeRenderStart } = props.data;
  const {chart, setChart} = props;

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  let [color, setColor] = useState(blue);
  let [activeIndex, setActive] = useState(0);
  let [type, setType] = useState('Hydration');

  const date = props.date ? props.date : null;

  const data = [
    {
      name: date,
      Hydration: `${beforeHydrationDuration}`,
      "Route-Change-to-Render": `${hydrationDuration}`,
      Render: `${beforeRenderStart}`
    }
  ];

  const buttons = [
    {
      name: "Hydration",
      color: blue,
      value: 74,
      id: 1
    },
    {
      name: "Route-Change-to-Render",
      color: red,
      value: 92,
      id: 2
    },
    {
      name: "Render",
      color: purple,
      value: 75,
      id: 3
    }
  ];

  return (
    <div>
      <h3>I am Next.js</h3>
      <div>
          {buttons.map((item, index) => 
            <div key={index} >
             <button style={{ color: item.color === color ? color : "#000" }} onClick={() => {setType(item.name), setActive(index),
             setColor(item.color), setChart(false)}}>
              {item.value}
             </button>
             <label>{item.name}</label>
            </div>
          )}
          <div>
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
                stroke="#2196F3"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Route-Change-to-Render"
                stroke="#F44236"
                strokeWidth={3}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Render"
                stroke="#FFCA29"
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
    </div>
  )
}