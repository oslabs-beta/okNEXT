import Link from "next/link";
import styles from '../styles/Footer.module.scss';

export default function Footer() {
    return (
      <div className={styles.container}>
        <div className={styles.name}>
          <Link href='/'>
            <p>© okNEXT 2022</p>
          </Link>
        </div>
        <div className={styles.monitor}>
          <Link href='/monitoring/monitor'>
            <p>Performance Monitoring</p>
          </Link>
        </div>
        <div className={styles.links}>
          <ul className={styles.list}>
            <li><Link href='/'>Docs</Link></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>LinkedIn</a></li>
            <li><a href='https://github.com/oslabs-beta/okNEXT'>Github</a></li>
          </ul>
        </div>
      </div>
    )
  }