import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import { UserContext, useUser } from '@auth0/nextjs-auth0';
import Suggestions from './Suggestions';

export default function Navbar() {
  const { user, error, isLoading } = useUser(); //user is the logged in user
  // console.log(user.picture);
  console.log(user);

  return (
    <div className={styles.navFlex}>
      <Link href="/">
        <div className={styles.leftNav}>
          <Image src="/okNext.jpg" alt="logo" width="228" height="99" />
        </div>
      </Link>

      <div className={styles.rightNav}>
        <Link href="/monitoring/monitor" className={styles.algoliaButton}>
          Monitoring
        </Link>
        <Link href="/docs/gettingstarted" className={styles.algoliaButton}>
          Docs
        </Link>
        <Link href="/" className={styles.algoliaButton}>
          Blog
        </Link>
        <Link
          href="https://github.com/oslabs-beta/okNEXT"
          className={styles.algoliaButton}
        >
          Github
        </Link>
        {user ? (
          <Link href="/api/auth/logout" className={styles.algoliaButton}>
            Logout
          </Link>
        ) : (
          <Link href="/api/auth/login" className={styles.algoliaButton}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
