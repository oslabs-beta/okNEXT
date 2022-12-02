import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { onCLS, onFID, onLCP } from 'web-vitals';
import { UserProvider } from '@auth0/nextjs-auth0';

// export function reportWebVitals(metric: any) {
//   if (metric.label === 'custom' || metric.label === 'web-vital') {
//     console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }

// send metric data to database , save it
// fetch get data from DB, display on client side

// <--------------------------------------------------------------------->

// export function reportWebVitals(metric: any) {
//   switch (metric.name) {
//     case 'FCP':
//       console.log(metric);
//       break;
//     case 'LCP':
//       console.log(metric);
//       break;
//     case 'CLS':
//       console.log(metric);
//       break;
//     case 'FID':
//       console.log(metric);
//       break;
//     case 'TTFB':
//       console.log(metric);
//       break;
//     case 'INP':
//       console.log(metric);
//       break;
//     case 'Next.js-hydration':
//       console.log(metric);
//       break;
//     case 'Next.js-route-change-to-render':
//       console.log(metric);
//       break;
//     case 'Next.js-render':
//       console.log(metric);
//     default:
//       break;
//   }
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
