import styles from '../../styles/DocsNavBar.module.scss';
import DocsNavBar from '../../components/DocsNavBar';

export default function UnderstandingMetrics() {
  return (
    <div className={styles.docContainer}>
      <DocsNavBar />
      <div className={styles.metrics}>
        <h1>Understanding Metrics</h1>
        <hr/>
        <section>
          <h3>Next.js Metrics</h3>
          <ul>
            <li>Next.js-hydration (Hydration Duration) | Length of time it takes for the page to start and finish hydrating (in ms)</li>
            <li>Next.js-route-change-to-render (Before Render Start) | Length of time it takes for a page to start rendering after a route change (in ms)</li>
            <li>Next.js-render (Before Hydration Duration) | Length of time it takes for a page to finish render after a route change (in ms)</li>
          </ul>
        </section>
        <section>
          <h3>Key Lighthouse Metrics</h3>
          <ul>
            <li>Performance | Identifies areas that may lead to slow performance or reduced responsiveness, such as large images.</li>
            <li>Accessibility | Analyzes performance against accessibility best practices, including compatibility with assistive technology.</li>
            <li>Best Practices | Recommendations against the best practices in modern web development.</li>
            <li>SEO | Highlights potential improvements to improve search engine performance.</li>
          </ul>
        </section>
        <section>
          <h3>Performance Web Vitals</h3>
          <ul>
            <li>First Contentful Paint (FCP) | The time at which the first text or image is painted.</li>
            <li>Time to Interactive (TTI) | The amount of time it takes for the page to become fully interactive.</li>
            <li>Speed Index (SI) | How quickly the contents of a page are visibly populated.</li>
            <li>Total Blocking Time (TBT) | Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.</li>
            <li>Largest Contentful Paint (LCP) | The time at which the largest text or image is painted.</li>
            <li>Cumulative Layout Shift (CLS) | The movement of visible elements within the viewport.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
