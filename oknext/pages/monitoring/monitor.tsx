import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import MonitorChart from '../../components/MonitorChart';
import fetchdata from '../api/lighthouseData';

export default function Monitor() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState({});
  // if(req.method === 'POST') {
  //   //Process a POST request
  // } else {
  //   //handle any other HTTP method
  // }
  //Post request: when we press get report
  const fetchVitals = async (e: any) => {
    e.preventDefault();

    console.log('hello from the frontend');
    const response = await fetch('/api/lighthouseData', {
      method:'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('after fetch request finishes');
    const vitalData = await response.json();
    setData(vitalData);
    console.log('response jsonified', vitalData);
    // setSeo(vitalData.seo)
    //reset input box to empty
    setUrl('');
    //add error handling
  }


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
              value={url}
              type= 'text'
              placeholder='/'
              //maybe url?
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <button onClick={fetchVitals}>Get Report</button>
        </form>
      </div>
      <div>
        <MonitorChart data={data} />
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}