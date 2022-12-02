import styles from '../../styles/DocsNavBar.module.scss';
import DocsNavBar from '../../components/DocsNavBar';

export default function Overview() {
  return (
    <div className={styles.docContainer}>
      <DocsNavBar />
      <div className={styles.overview}>
        <h1>Overview</h1>
        <hr/>
        <h3>okNEXT is a Next.js Dev-tool to monitor, display, store, and optimize Next.js websites. Power your Next.js Application during development with the okNext developer tool.</h3>
        <ol>
          <li><b>Core Web-Vitals:</b> Google Lighthouse audits performance, accessibility and search engine optimization of web pages. okNEXT handles your Next.js optimization.</li>
          <li><b>Save your reports:</b> Safely store the entire history of your website's analytics in a SQL database, and review them on your own time.</li>
          <li><b>Next.js Recommendations:</b> Get curated recommendations on how to optimize your Next.js website.</li>
        </ol>
      </div>
    </div>
  );
}
