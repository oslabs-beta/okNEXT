import { Label, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "../../../styles/MonitorChart.module.scss";
import LoadingSpinner from "./LoadingSpinner";

export default function EmptyChart(props: any) {
  const { isLoading } = props;

  // console.log("isLoading in EmptyChart", isLoading);
  
  return (
    <div className={styles.monitorContainer}>
      <h2>I am empty chart</h2>
      <div className={styles.lineGraph}>
        <LineChart
          width={600}
          height={300}
          margin={{ top: 25, right: 30, left: 10, bottom: 5 }}
        >
          <XAxis />
          <YAxis type="number" domain={[0, 100]} />
          <foreignObject x="270" y="100" width="200" height="100">
            <div className={styles.spinner}>
              {isLoading ? <LoadingSpinner /> : ""}
            </div>
          </foreignObject>
        </LineChart>
      </div>
    </div>
  );
}
