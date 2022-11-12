import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import MonitorChart from '../../components/MonitorChart';
import fetchdata from '../api/lighthouseData';

export default function Monitor() {
  // const [seo, setSeo] = useState();

  //GET request
  const fetchVitals = async (e: any) => {
    e.preventDefault();
    console.log('hello from the frontend');
    const response = await fetch('/api/lighthouseData');
    console.log('after fetch request finishes');
    const vitalData = await response.json()
    console.log('response jsonified', vitalData);
    // setSeo(vitalData.seo)
  }
  // fetch('http://localhost:3000/api/lighthouseData')
  //   .then((response) => response.json())
  //   .then((data) =>{
  //     console.log('data here!', data)
  //   });
  
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
          <button onClick={fetchVitals}>Get Report</button>
        </form>
      </div>
      <div>
        <MonitorChart/>
      </div>
      <Link href="/">← Back to home</Link>
    </>
  );
}