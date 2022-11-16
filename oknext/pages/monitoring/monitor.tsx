import Link from 'next/link';
import Head from 'next/head';
import MonitorChart from '../../components/MonitorChart';
import { onLCP, onFID, onCLS } from 'web-vitals';

onLCP(console.log);
onFID(console.log);
onCLS(console.log);

export function reportWebVitals(metric: any) {
  switch (metric.name) {
    case 'FCP':
      console.log(metric);
      break;
    case 'LCP':
      console.log(metric);
      break;
    case 'CLS':
      console.log(metric);
      break;
    case 'FID':
      console.log(metric);
      break;
    case 'TTFB':
      console.log(metric);
      break;
    case 'INP':
      console.log(metric);
      break;
    case 'Next.js-hydration':
      console.log(metric);
      break;
    case 'Next.js-route-change-to-render':
      console.log(metric);
      break;
    case 'Next.js-render':
      console.log(metric);
    default:
      break;
  }
}

export default function Monitor() {
  return (
    <>
      <Head>
        <title>Performance Monitoring</title>
      </Head>
      <h3>App Performance Monitoring</h3>
      <div>
        <form>
          <label>
            Enter an endpoint:
            <input
              type="text"
              placeholder="/"
              //maybe url?
              //value={endpoint}
              //onChange={}
            />
          </label>
          <button onClick={reportWebVitals}>Get Report</button>
        </form>
      </div>
      <div>
        <MonitorChart />
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}
