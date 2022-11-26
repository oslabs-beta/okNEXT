const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

//for ios users
async function fetchdata (req:any, res:any){
  const { url } = req.body;
  console.log('this is request body', req.body);

  //chromeLauncher: lh runs on chrome, need chromeLauncher to launch lh report
  //more info: https://www.npmjs.com/package/chrome-launcher
  //for ubuntu users:
    // const chrome = await chromeLauncher.launch({
    //   chromePath: process.env.CHROME_PATH,
    //   chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
    // });
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  //options: choosing what categories needed for application
  const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'], port: chrome.port};
  //only want desktop report
  const configObj = {
    extends: 'lighthouse:default',
    settings: {
      screenEmulation: {mobile: false, disabled: false},
      formFactor: 'desktop'
    },
  }

  //runs lighthouse report
  const runnerResult = await lighthouse(url, options, configObj);

  // `.report` is the HTML report as a json object
  const reportJson = runnerResult.report;
  fs.writeFileSync('lhreport.json', reportJson);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log("hello from the void");
  const vitalReport = {
    performance: Math.floor(runnerResult.lhr.categories.performance.score * 100),
    performanceScores: {
      fcp: runnerResult.lhr.audits['first-contentful-paint'],
      lcp: runnerResult.lhr.audits['largest-contentful-paint'],
      speed: runnerResult.lhr.audits['speed-index'],
      cls: runnerResult.lhr.audits['cumulative-layout-shift'],
      tti: runnerResult.lhr.audits['interactive'],
      tbt: runnerResult.lhr.audits['total-blocking-time']
    },
    accessibility: Math.floor(runnerResult.lhr.categories.accessibility.score * 100),
    seo: Math.floor(runnerResult.lhr.categories.seo.score * 100),
    bestpractices: Math.floor(runnerResult.lhr.categories['best-practices'].score * 100),
    nextJs: {
      beforeHydrationDuration: runnerResult.lhr.audits['user-timings'].details.items[0]['duration'],
      hydrationDuration: runnerResult.lhr.audits['user-timings'].details.items[1]['duration'],
      beforeRenderStart: runnerResult.lhr.audits['user-timings'].details.items[2]['startTime']

    }
  }

  const auditReport = {
    performance: runnerResult.lhr.categories.performance.auditRefs,
    accessibility: runnerResult.lhr.categories.accessibility.auditRefs,
    seo: runnerResult.lhr.categories.seo.auditRefs,
    bestpractices: runnerResult.lhr.categories['best-practices'].auditRefs
  }

function getId (auditReport: any) {
  let performanceMetrics = [];
  let accessibilityMetrics = [];
  let seoMetrics = [];
  let bestpracticesMetrics = [];
  for(let cat in auditReport) {
    if(cat === "performance") {
      auditReport["performance"].forEach(obj => {
        performanceMetrics.push(obj["id"])
      })
    } else if (cat === "accessibility") {
      auditReport["accessibility"].forEach(obj => {
        accessibilityMetrics.push(obj["id"])
      })
    } else if (cat === "seo") {
      auditReport["seo"].forEach(obj => {
        seoMetrics.push(obj["id"])
      })
    } else if (cat === "bestpractices") {
      auditReport["bestpractices"].forEach(obj => {
        bestpracticesMetrics.push(obj["id"])
      })
    }
    
  }
  return [performanceMetrics, accessibilityMetrics, seoMetrics, bestpracticesMetrics];
}

  // function getAuditReportId (auditReport: any) {
  //   const newObj = [];
  //   for(let category in auditReport) {
  //     auditReport[category].forEach(obj => {
  //       for(let metric in obj) {
  //         if(metric === 'id') {
  //           newObj.push(metric.id)
  //         }
  //       }
  //     })
  //   }
  //   return newObj;
  // }

console.log(getId(auditReport))
  res.json(vitalReport);

  //closes chrome instance that was started by chromeLauncher
  await chrome.kill();
};

export default fetchdata;
