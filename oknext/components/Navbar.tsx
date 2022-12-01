import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import { UserContext, useUser } from '@auth0/nextjs-auth0';
// import { useState } from 'react';

export default function Navbar() {
  const { user, error, isLoading } = useUser(); //user is the logged in user
  // const [name, setName]= useState('')
  console.log(user);

  function checkUser() {
    if (user === undefined) {
      console.log('User is not signed in! Please sign in!');
      return;
    }
    fetch('/api/createUser', {
      method: 'POST',
      body: JSON.stringify({ email: user.email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data from database', data);
      })
      .catch((error) => {
        console.error('PostError', error);
      });
  }

  return (
    <div className={styles.navFlex}>
      
      <Link href="/">
        <div className={styles.leftNav}>
          <Image src="/okNext.jpg" alt="logo" width="228" height="99" />
        </div>
      </Link>
      {/* {user ? (<p>Welcome {user.given_name}</p>): ('')} */}
      <div className={styles.rightNav}>
        <Link
          onClick={checkUser}
          href="/monitoring/monitor"
          className={styles.algoliaButton}
        >
          Monitoring
        </Link>
        <Link href="/docs/Overview" className={styles.algoliaButton}>
          Docs
        </Link>
        <Link
          href="https://medium.com/@phoebeermert/oknext-your-next-solution-for-web-app-performance-monitoring-d83d2c79a665"
          className={styles.algoliaButton}
        >
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
