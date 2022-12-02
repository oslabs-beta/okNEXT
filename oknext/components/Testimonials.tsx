import styles from '../styles/Testimonials.module.scss';

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonial}>
        <div className={styles.quote}>
          "One of my go-to dev-tools for all my Next.js projects"
        </div>
        <div className={styles.name}>
          -Andrew Rama, Software Engineer @DockLight
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.quote}>
          "So simple to use, handles all my SEO monitoring needs."
        </div>
        <div className={styles.name}>
          -Katie Angelopoulos, Software Engineer @Denosoar
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.quote}>
          "Finally a monitoring tool that includes Next.js specific metrics"
        </div>
        <div className={styles.name}>
          -Andy Zheng, Software Engineer @Cachier
        </div>
      </div>
    </div>
  );
}
