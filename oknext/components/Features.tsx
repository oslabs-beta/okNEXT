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
          <div>Core Web-Vitals</div>
          <div>Description</div>
        </div>
        <div className={styles.feature}>
          <Image
            className={styles.none}
            src="/database.png"
            alt="seo"
            width={60}
            height={60}
          />
          <div>Save your reports</div>
          <div>Description</div>
        </div>
        <div className={styles.feature}>
          <Image
            className={styles.none}
            src="/react.png"
            alt="seo"
            width={60}
            height={60}
          />
          <div>Next.js Recommendations</div>
          <div>Description</div>
        </div>
      </div>
    </>
  );
}
