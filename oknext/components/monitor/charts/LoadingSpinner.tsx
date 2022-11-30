import React from 'react';
import styles from '../../../styles/LoadingSpinner.module.scss';

export default function LoadingSpinner() {
  return (
    <div>
      <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    </div>
  );
}
