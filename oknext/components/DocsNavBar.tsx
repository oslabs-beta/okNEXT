import styles from '../styles/DocsNavBar.module.scss';
import Link from 'next/link';

export default function DocsNavBar() {
  return (
    <div className={styles.sidenav}>
      <h2>Documentation</h2>
      <Link href="/docs/Overview">Overview</Link>
      <Link href="/docs/GettingStarted">Getting Started</Link>
      <Link href="/docs/UnderstandingMetrics">
        Understanding the Metrics
      </Link>
      <Link href="https://github.com/oslabs-beta/okNEXT">How to Contribute</Link>
      <Link href="https://nextjs.org/learn/seo/improve/lighthouse">
        Next.js Documentation
      </Link>
      <Link href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md">
        Google Lighthouse Docs
      </Link>
    </div>
  );
}
