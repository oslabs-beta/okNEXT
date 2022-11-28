import styles from '../styles/DocsNavBar.module.scss';
import Link from 'next/link';

export default function DocsNavBar() {
  return (
    <div className={styles.sidenav}>
      <h2>Documentation</h2>
      <Link href="/docs/getting-started">Getting Started</Link>
      <Link href="/docs/overview">Overview</Link>
      <Link href="/docs/understanding-the-metrics">
        Understanding the Metrics
      </Link>
      <Link href="/docs/contribute">How to Contribute</Link>
      <Link href="https://nextjs.org/learn/seo/improve/lighthouse">
        Next.js Documentation
      </Link>
      <Link href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md">
        Google Lighthouse Docs
      </Link>
    </div>
  );
}
