import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className={styles.navFlex}>
      <Link href="/">
        <div className={styles.leftNav}>
          <Image src="/okNext.jpg" alt="logo" width="228" height="99" />
        </div>
      </Link>

      <div className={styles.rightNav}>
        <Link href="/demo/demo" className={styles.algoliaButton}>
          Demo
        </Link>
        <Link href="/monitoring/monitor" className={styles.algoliaButton}>
          Monitoring
        </Link>
        <a href="/" className={styles.algoliaButton}>
          Blog
        </a>
        <Link href="/" className={styles.algoliaButton}>
          Docs
        </Link>
        <Link href="/" className={styles.algoliaButton}>
          Login
        </Link>

        <Link
          href="https://github.com/oslabs-beta/okNEXT"
          className={styles.algoliaButton}
        >
          Github
        </Link>
      </div>
    </div>
  );
}
