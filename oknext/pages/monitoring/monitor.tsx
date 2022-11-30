import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { UserContext, useUser } from '@auth0/nextjs-auth0';
import MonitorChart from '../../components/monitor/MonitorChart';
import EmptyChart from '../../components/monitor/charts/EmptyChart';
import styles from '../../styles/Monitor.module.scss';
import suggestionStyles from '../../styles/Suggestions.module.scss';
import PerformanceChart from '../../components/monitor/charts/PerformanceChart';
import NextJSVitals from '../../components/monitor/NextJSVitals';
import MonitorButtons from '../../components/monitor/MonitorButtons';
import { arrayBuffer } from 'stream/consumers';

//NEED TO FIGURE OUT HOW TO ATTACH THE BUTTONS TO THE LINES
export default function Monitor() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(undefined);
  const [rendChart, setRendChart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(undefined);
  const [toggle, setToggle] = useState(false);
  const [vitals, setVitals] = useState(false);
  //for nextjs comp
  const [chart, setChart] = useState(false);
  //for monitor chart comp
  const [webChart, setWebChart] = useState(false);
  //performance chart
  const [performance, setPerformance] = useState(false);
  const [pChart, setPChart] = useState(false);

  const [AuditReport, setAuditReport] = useState(undefined);
  const [categorySuggestionsState, setCategorySuggestionsState] = useState('');
  const [performanceSuggestionsState, setPerformanceSuggestionsState] =
    useState<any[]>([]);
  const [accessibilitySuggestionsState, setAccessibilitySuggestionsState] =
    useState<any[]>([]);
  const [seoSuggestionsState, setSeoSuggestionsState] = useState<any[]>([]);
  const [bestpracticesSuggestionsState, setBestPracticesSuggestionsState] =
    useState<any[]>([]);
  const [loginFirst, setLoginFirst] = useState('');

  let performanceSuggestions = [];
  let seoSuggestions = [];
  let accessibilitySuggestions = [];
  let bestpracticesSuggestions = [];

  const { user } = useUser();

  const performanceMetrics = [
    'first-contentful-paint',
    'interactive',
    'speed-index',
    'total-blocking-time',
    'largest-contentful-paint',
    'cumulative-layout-shift',
    'max-potential-fid',
    'first-meaningful-paint',
    'render-blocking-resources',
    'uses-responsive-images',
    'offscreen-images',
    'unminified-css',
    'unminified-javascript',
    'unused-css-rules',
    'unused-javascript',
    'uses-optimized-images',
    'modern-image-formats',
    'uses-text-compression',
    'uses-rel-preconnect',
    'server-response-time',
    'redirects',
    'uses-rel-preload',
    'uses-http2',
    'efficient-animated-content',
    'duplicated-javascript',
    'legacy-javascript',
    'preload-lcp-image',
    'total-byte-weight',
    'uses-long-cache-ttl',
    'dom-size',
    'critical-request-chains',
    'user-timings',
    'bootup-time',
    'mainthread-work-breakdown',
    'font-display',
    'resource-summary',
    'third-party-summary',
    'third-party-facades',
    'largest-contentful-paint-element',
    'lcp-lazy-loaded',
    'layout-shift-elements',
    'uses-passive-event-listeners',
    'no-document-write',
    'long-tasks',
    'non-composited-animations',
    'unsized-images',
    'viewport',
    'no-unload-listeners',
    'performance-budget',
    'timing-budget',
    'network-requests',
    'network-rtt',
    'network-server-latency',
    'main-thread-tasks',
    'diagnostics',
    'metrics',
    'screenshot-thumbnails',
    'final-screenshot',
    'script-treemap-data',
  ];

  const accessibilityMetrics = [
    'accesskeys',
    'aria-allowed-attr',
    'aria-command-name',
    'aria-hidden-body',
    'aria-hidden-focus',
    'aria-input-field-name',
    'aria-meter-name',
    'aria-progressbar-name',
    'aria-required-attr',
    'aria-required-children',
    'aria-required-parent',
    'aria-roles',
    'aria-toggle-field-name',
    'aria-tooltip-name',
    'aria-treeitem-name',
    'aria-valid-attr-value',
    'aria-valid-attr',
    'button-name',
    'bypass',
    'color-contrast',
    'definition-list',
    'dlitem',
    'document-title',
    'duplicate-id-active',
    'duplicate-id-aria',
    'form-field-multiple-labels',
    'frame-title',
    'heading-order',
    'html-has-lang',
    'html-lang-valid',
    'image-alt',
    'input-image-alt',
    'label',
    'link-name',
    'list',
    'listitem',
    'meta-refresh',
    'meta-viewport',
    'object-alt',
    'tabindex',
    'td-headers-attr',
    'th-has-data-cells',
    'valid-lang',
    'video-caption',
    'logical-tab-order',
    'focusable-controls',
    'interactive-element-affordance',
    'managed-focus',
    'focus-traps',
    'custom-controls-labels',
    'custom-controls-roles',
    'visual-order-follows-dom',
    'offscreen-content-hidden',
    'use-landmarks',
  ];

  const seoMetrics = [
    'viewport',
    'document-title',
    'meta-description',
    'http-status-code',
    'link-text',
    'crawlable-anchors',
    'is-crawlable',
    'robots-txt',
    'image-alt',
    'hreflang',
    'canonical',
    'font-size',
    'plugins',
    'tap-targets',
    'structured-data',
  ];

  const bestpracticesMetrics = [
    'is-on-https',
    'geolocation-on-start',
    'notification-on-start',
    'no-vulnerable-libraries',
    'csp-xss',
    'password-inputs-can-be-pasted-into',
    'image-aspect-ratio',
    'image-size-responsive',
    'preload-fonts',
    'doctype',
    'charset',
    'js-libraries',
    'deprecations',
    'errors-in-console',
    'valid-source-maps',
    'inspector-issues',
  ];

  const blue = '#2196F3';
  const red = '#F44236';
  const yellow = '#FFCA29';
  const purple = '#6d30bb';

  //individual lines to populate the graph
  const [color, setColor] = useState(blue);
  const [type, setType] = useState('Performance');

  console.log(user);
  //fetch data from Lighthouse
  const fetchVitals = async (e: any) => {
    //checking if user is signed in before fetching vitals
    if (user === undefined) {
      // setLoginFirst('Please login before making a report!')
      alert('Please login before making a report!');
      e.preventDefault();
      return;
    }

    if (url.length === 0) {
      alert('Please type in a valid URL');
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const timestamp = Date.now();
    const humanReadableDateTime = new Date(timestamp).toLocaleString();
    setIsLoading(true);
    console.log('hello from the frontend');
    const response = await fetch('/api/fetchData', {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        date: humanReadableDateTime,
        url,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // console.log('after fetch request finishes');
    const vitalData = await response.json();
    console.log('Response from fetch request', vitalData);
    // console.log('this is vitalData', vitalData);
    setData(vitalData);
    console.log('response jsonified', vitalData);
    setDate(humanReadableDateTime);
    //reset input box to empty
    setUrl('');
    setIsLoading(false);
    setRendChart(true);
    setWebChart(true);
    setVitals(false);
    //add error handling

    // <-------------------------------Suggestions Section-------------------------------->

    let fullAuditReport = vitalData[1];
    console.log('this is vitalData', vitalData);
    console.log('fullAuditReport:', fullAuditReport);

    setAuditReport(fullAuditReport);

    function getSuggestions(fullAuditReport, ...arrayOfCategories) {
      for (let i = 0; i < arrayOfCategories.length; i++) {
        for (let j = 0; j < arrayOfCategories[i].length; j++) {
          if (
            fullAuditReport[arrayOfCategories[i][j]] &&
            arrayOfCategories[i] === performanceMetrics
          ) {
            performanceSuggestions.push(
              fullAuditReport[arrayOfCategories[i][j]]
            );
            setPerformanceSuggestionsState(performanceSuggestions);
          } else if (
            fullAuditReport[arrayOfCategories[i][j]] &&
            arrayOfCategories[i] === accessibilityMetrics
          ) {
            accessibilitySuggestions.push(
              fullAuditReport[arrayOfCategories[i][j]]
            );
            setAccessibilitySuggestionsState(accessibilitySuggestions);
          } else if (
            fullAuditReport[arrayOfCategories[i][j]] &&
            arrayOfCategories[i] === seoMetrics
          ) {
            seoSuggestions.push(fullAuditReport[arrayOfCategories[i][j]]);
            setSeoSuggestionsState(seoSuggestions);
          } else if (
            fullAuditReport[arrayOfCategories[i][j]] &&
            arrayOfCategories[i] === bestpracticesMetrics
          ) {
            bestpracticesSuggestions.push(
              fullAuditReport[arrayOfCategories[i][j]]
            );
            setBestPracticesSuggestionsState(bestpracticesSuggestions);
          }
        }
      }
    }
    getSuggestions(
      fullAuditReport,
      performanceMetrics,
      accessibilityMetrics,
      seoMetrics,
      bestpracticesMetrics
    );
  };

  // console.log('from monitoring component', data);

  // console.log('performance state', performanceSuggestionsState);
  // console.log('accessibility state', accessibilitySuggestionsState);
  // console.log('seo state', seoSuggestionsState);
  // console.log('bestpractices state', bestpracticesSuggestionsState);

  // console.log('performance outside', performanceSuggestions[0].description);

  // function returnSuggestions() {
  // setCategorySuggestions('performanceSuggestions');
  // performanceSuggestions.map((metric) => {
  //   return <div key={metric.id}>{metric.description}</div>;
  // });
  // }
  // console.log('I am performance state', performance);

  return (
    <>
      <Head>
        <title>Performance Monitoring</title>
      </Head>
      <div className={styles.sidebar}>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <form>
              <label>
                Enter an endpoint:
                <input
                  className={styles.urlInputBox}
                  value={url}
                  type="url"
                  placeholder="/"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </label>
              <button className={styles.button84} onClick={fetchVitals}>
                Get Report
              </button>
              <p>{loginFirst}</p>
            </form>
          </div>

          <div className={styles.vitalsButtons}>
            <button
              className={styles.button84}
              onClick={() => {
                setVitals(false),
                setWebChart(true),
                setPerformance(false),
                setPChart(false);
              }}
            >
              Web Core Vitals
            </button>
            <button
              className={styles.button84}
              onClick={() => {
                setVitals(true),
                setChart(true),
                setPerformance(false),
                setPChart(false);
              }}
            >
              Next.js Vitals
            </button>
          </div>
          <div className={styles.form}>Endpoints:</div>
          <div className={styles.endpoints}>
            <div>localhost:3000/</div>
            <div>localhost:3000/monitoring/monitor</div>
            <div>localhost:3000/docs/gettingstarted</div>
            <div>https://oknext-one.vercel.app/</div>
            <div>https://oknext-oslabs.vercel.app/</div>
          </div>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.header}>
            <h3>App Performance Monitoring</h3>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.webVitalBtns}>
              <section className={styles.vitals}>
                {data ? (
                  <>
                    <button
                      className={styles.buttonPerformance}
                      style={{ color: color === blue ? '#FFFFFF' : '#000' }}
                      onClick={() => {
                        setType('Performance'),
                        setColor(blue),
                        setWebChart(false),
                        setPerformance(true),
                        setVitals(false);
                      }}
                    >
                      {data[0][5]['performance']}
                    </button>
                    <label>Performance</label>
                  </>
                ) : (
                  <button className={styles.buttonPerformance}>-</button>
                )}
              </section>
              <section className={styles.vitals}>
                {data ? (
                  <>
                    <button
                      className={styles.buttonSEO}
                      style={{ color: color === red ? '#FFFFFF' : '#000' }}
                      onClick={() => {
                        setType('SEO'),
                        setColor(red),
                        setWebChart(false),
                        setVitals(false);
                      }}
                    >
                      {data[0][5]['SEO']}
                    </button>
                    <label>SEO</label>
                  </>
                ) : (
                  <button className={styles.buttonSEO}>-</button>
                )}
              </section>
              <section className={styles.vitals}>
                {data ? (
                  <>
                    <button
                      className={styles.buttonBestPractices}
                      style={{ color: color === purple ? '#FFFFFF' : '#000' }}
                      onClick={() => {
                        setType('BestPractices'),
                        setColor(purple),
                        setWebChart(false),
                        setVitals(false);
                      }}
                    >
                      {data[0][5]['best_practices']}
                    </button>
                    <label>Best Practices</label>
                  </>
                ) : (
                  <button className={styles.buttonBestPractices}>-</button>
                )}
              </section>
              <section className={styles.vitals}>
                {data ? (
                  <>
                    <button
                      className={styles.buttonAccessibility}
                      style={{ color: color === yellow ? '#FFFFFF' : '#000' }}
                      onClick={() => {
                        setType('Accessibility'),
                        setColor(yellow),
                        setWebChart(false),
                        setVitals(false);
                      }}
                    >
                      {data[0][5]['accessibility']}
                    </button>
                    <label>Accessibility</label>
                  </>
                ) : (
                  <button className={styles.buttonAccessibility}>-</button>
                )}
              </section>
            </div>
          </div>
          <div className={styles.chartContainer}>
            {performance ? (
              <div>
                <button onClick={() => setPChart(true)}>
                  Performance Metrics
                </button>
              </div>
            ) : (
              ''
            )}
            <div>
              {vitals && rendChart ? (
                <NextJSVitals data={data} chart={chart} setChart={setChart} />
              ) : rendChart && vitals === false ? (
                //need to probably propdrill rendChart to Monitor chart
                //and the button state
                <MonitorChart
                  data={data}
                  date={date}
                  webChart={webChart}
                  setWebChart={setWebChart}
                  type={type}
                  color={color}
                />
              ) : !data ? (
                <EmptyChart isLoading={isLoading} />
              ) : rendChart && pChart ? (
                <PerformanceChart
                  data={data}
                  date={date}
                  setIsLoading={setIsLoading}
                  pChart={pChart}
                  setPChart={setPChart}
                />
              ) : (
                ''
              )}
            </div>

            {/* {type === 'Performance' ? (
              <button>Click ME</button>
            ) : 
            <PerformanceChart
            data={data}
            date={date}
            setIsLoading={setIsLoading}
            />
            } */}
          </div>
          <div className={suggestionStyles.container}>
            {performanceSuggestionsState ? (
              performanceSuggestionsState.map((metricObj, index) => (
                <div className={suggestionStyles.description} key={index}>
                  {metricObj.description}
                </div>
              ))
            ) : (
              <div>None</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
