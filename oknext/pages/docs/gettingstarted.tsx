import styles from '../../styles/DocsNavBar.module.scss';
import DocsNavBar from '../../components/DocsNavBar';
import Image from 'next/image';

export default function GettingStarted() {
  return (
    <>
      <div className={styles.docContainer}>
        <DocsNavBar />
        <div className={styles.GettingStarted}>
          <h1>Getting Started</h1>
          <hr />
          <h3>
            To get started, it is very simple. Just enter any Next.js website
            endpoint and click 'Get Report'!
          </h3>
          <Image
            src="/getreport.png"
            alt="Picture of the getreport"
            width={261}
            height={148}
          ></Image>
          <h4>Examples of Usable URLs (make sure you include FULL https): </h4>
          <ul>
            <li>https://localhost:3000/</li>
            <li>https://localhost:3000/monitoring/monitor</li>
            <li>https://localhost:3000/docs/GettingStarted</li>
            <li>https://oknext-one.vercel.app/</li>
            <li>https://oknext-oslabs.vercel.app/</li>
          </ul>
        </div>
      </div>
    </>
  );
}
