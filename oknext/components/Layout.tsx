import styles from '../styles/Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
