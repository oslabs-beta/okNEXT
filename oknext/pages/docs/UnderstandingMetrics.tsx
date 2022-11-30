import styles from '../styles/Docs.module.scss';
import DocsNavBar from '../../components/DocsNavBar';
import Suggestions from '../../components/Suggestions';

export default function Docs() {
  return (
    <>
      <DocsNavBar />
      <Suggestions />

      <div>
        {/* Audit	Weight
First Contentful Paint	10%
Speed Index	10%
Largest Contentful Paint	25%
Time to Interactive	10%
Total Blocking Time	30%
Cumulative Layout Shift	15% */}
      </div>
    </>
  );
}