import styles from '../styles/Features.module.scss';
import Image from 'next/image';

export default function Features() {
  return (
    <>
      <div className={styles.title}>
        Power your Next.js Application during development with Google Lighthouse
        and the okNEXT developer tool.
      </div>
      <div className={styles.featuresFlex}>
        <div className={styles.feature}>
          <Image
            className={styles.none}
            src="/seo.png"
            alt="seo"
            width={60}
            height={60}
          />
          <div className={styles.featureTitle}>Core Web-Vitals</div>
          <div className={styles.featureDescription}>Google Lighthouse audits performance, accessibility and search engine optimization of web pages. okNEXT handles your Next.js optimization.</div>
        </div>
        <div className={styles.feature}>
          <Image
            className={styles.none}
            src="/database.png"
            alt="seo"
            width={60}
            height={60}
          />
          <div className={styles.featureTitle}>Save your reports</div>
          <div className={styles.featureDescription}>Safely store the entire history of your website's analytics in a SQL database, and review them on your own time.</div>
        </div>
        <div className={styles.feature}>
          <Image
            className={styles.none}
            src="/react.png"
            alt="seo"
            width={60}
            height={60}
          />
          <div className={styles.featureTitle}>Next.js Recommendations</div>
          <div className={styles.featureDescription}>Get curated recommendations on how to optimize your Next.js website.</div>
        </div>
      </div>
    </>
  );
}
