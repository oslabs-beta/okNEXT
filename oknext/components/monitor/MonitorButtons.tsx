import styles from '../../styles/MonitorChart.module.scss';

export default function MonitorButtons () {
  return (
    <>
      <h3>I am buttons</h3>
      <div className={styles.buttonsContainer}>
        <div className={styles.webVitalBtns}>
        <section className={styles.vitals}>
          <button className={styles.button} onClick={handleClick}>
            {data.performance}
          </button>
          <label>Performance</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} onClick={handleClick}>
            {data.seo}
          </button>          
          <label>SEO</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} onClick={handleClick}>
            {data.bestpractices}
          </button>
          <label>Best Practices</label>
        </section>
        <section className={styles.vitals}>
          <button className={styles.button} onClick={handleClick}>
            {data.accessibility}
          </button>
          <label>Accessibility</label>
        </section>
      </div>
      </div>
    </>
  )
}