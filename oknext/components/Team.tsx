import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.teamMember}>
        <div className={styles.memberName}>Vivian Odekhiran</div>
        <Image
          className={styles.teamImages}
          src="/vivian.png"
          alt="vivian"
          width={180}
          height={180}
        />
        <div className={styles.profile}>
          <Link href="https://github.com/vodekhir">
            <Image
              className={styles.github}
              src="/githublogo.png"
              alt="github link"
              width={38}
              height={38}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/vivian-odekhiran/">
            <Image
              className={styles.linkedin}
              src="/linkedin.png"
              alt="linkedin link"
              width={38}
              height={38}
            />
          </Link>
        </div>
      </div>
      <div className={styles.teamMember}>
        <div className={styles.memberName}>Hua Liu</div>
        <Image
          className={styles.teamImages}
          src="/lario.png"
          alt="hua"
          width={180}
          height={180}
        />

        <div className={styles.profile}>
          <Link href="https://github.com/HuaJLiu17">
            <Image
              className={styles.github}
              src="/githublogo.png"
              alt="github link"
              width={38}
              height={38}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/hua-liu-123599117/">
            <Image
              className={styles.linkedin}
              src="/linkedin.png"
              alt="linkedin link"
              width={38}
              height={38}
            />
          </Link>
        </div>
      </div>
      <div className={styles.teamMember}>
        <div className={styles.memberName}>Phoebe Ermert</div>
        <Image
          className={styles.teamImages}
          src="/phoebe.jpg"
          alt="phoebe"
          width={180}
          height={180}
        />
        <div className={styles.profile}>
          <Link href="https://github.com/ermertP">
            <Image
              className={styles.github}
              src="/githublogo.png"
              alt="github link"
              width={38}
              height={38}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/phoebe-ermert/">
            <Image
              className={styles.linkedin}
              src="/linkedin.png"
              alt="linkedin link"
              width={38}
              height={38}
            />
          </Link>
        </div>
      </div>
      <div className={styles.teamMember}>
        <div className={styles.memberName}>Lara Beesley</div>
        <Image
          className={styles.teamImages}
          src="/lario.png"
          alt="lara"
          width={180}
          height={180}
        />
        <div className={styles.profile}>
          <Link href="https://github.com/labeesley">
            <Image
              className={styles.github}
              src="/githublogo.png"
              alt="github link"
              width={38}
              height={38}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/beesleylara/">
            <Image
              className={styles.linkedin}
              src="/linkedin.png"
              alt="linkedin link"
              width={38}
              height={38}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
