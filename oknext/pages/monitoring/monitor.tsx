import Link from 'next/link';
import Head from 'next/head';
import MonitorChart from '../../components/MonitorChart';

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
              type= 'text'
              placeholder='/'
              //maybe url?
              //value={endpoint}
              //onChange={}
            />
          </label>
          <button>Get Report</button>
          {/* onClick={} */}
        </form>
      </div>
      <div>
        <MonitorChart/>
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}