import {
  Label,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { useState } from 'react';
import styles from '../styles/DemoChart.module.scss';

export default function DemoChart() {
  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  let [color, setColor] = useState(blue);
  let [activeIndex, setActive] = useState(0);
  let [type, setType] = useState('Performance');
  //entire graph to populate demo
  let [demo, setDemo] = useState(true);

  const data = [
    {
      name: '11/14',
      Performance: 74,
      SEO: 90,
      Accessibility: 83,
      'Best Practices': 67,
    },
    {
      name: '11/15',
      Performance: 74,
      SEO: 92,
      Accessibility: 83,
      'Best Practices': 75,
    },
    {
      name: '11/20',
      Performance: 85,
      SEO: 100,
      Accessibility: 90,
      'Best Practices': 100,
    },
    {
      name: '11/21',
      Performance: 64,
      SEO: 92,
      Accessibility: 83,
      'Best Practices': 75,
    },
    {
      name: '11/29',
      Performance: 73,
      SEO: 94,
      Accessibility: 87,
      'Best Practices': 67,
    },
  ];

  const buttons = [
    {
      name: 'Performance',
      color: blue,
      value: 74,
      id: 1,
    },
    {
      name: 'SEO',
      color: red,
      value: 92,
      id: 2,
    },
    {
      name: 'Best Practices',
      color: purple,
      value: 75,
      id: 3,
    },
    {
      name: 'Accessibility',
      color: yellow,
      value: 83,
      id: 4,
    },
  ];

  return (
    <>
      <div className={styles.monitorContainer}>
        <h2></h2>
        <div>
          <button className={styles.button4} onClick={() => setDemo(true)}>
            Web Core Vitals
          </button>
          <button className={styles.button4}>Next.js Vitals</button>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.webVitalFlex}>
            {buttons.map((item, index) => (
              <div className={styles.webVitalBtns} key={index}>
                <button
                  className={styles.button}
                  style={{ color: item.color === color ? '#FFFFFF' : '#000' }}
                  onClick={() => {
                    setType(item.name),
                    setActive(index),
                    setColor(item.color),
                    setDemo(false);
                  }}
                >
                  {item.value}
                </button>
                <label>{item.name}</label>
              </div>
            ))}
          </div>
          <div className={styles.lineGraph}>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 25, right: 35, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray={'3'}
                horizontal={true}
                vertical={false}
              />
              <XAxis dataKey={'name'} />
              <YAxis type="number" domain={[0, 100]} />
              <Legend align="center" verticalAlign="bottom" height={30} />
              {demo ? (
                <>
                  <Line
                    type="monotone"
                    dataKey="Performance"
                    stroke={blue}
                    strokeWidth={3}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="SEO"
                    stroke={red}
                    strokeWidth={3}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Accessibility"
                    stroke={yellow}
                    strokeWidth={3}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Best Practices"
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
      </div>
    </>
  );
}

