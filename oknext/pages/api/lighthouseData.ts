const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

//for ios users
async function fetchdata (req:any, res:any){
  console.log(req.body);
  return res.json('hello! it\'s just me fetchdata');
  
  // const { url } = req.body;
  // console.log('this is request body', req.body);
  // // const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});

  // //chromeLauncher: lh runs on chrome, need chromeLauncher to launch lh report
  // //more info: https://www.npmjs.com/package/chrome-launcher
  // //for ubuntu users:
  //   const chrome = await chromeLauncher.launch({
  //     chromePath: process.env.CHROME_PATH,
  //     chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  //   });

  // //options: choosing what categories needed for application
  // const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'], port: chrome.port};
  // //only want desktop report
  // const configObj = {
  //   extends: 'lighthouse:default',
  //   settings: {
  //     screenEmulation: {mobile: false, disabled: false},
  //     formFactor: 'desktop'
  //   },
  // }

  // //runs lighthouse report
  // const runnerResult = await lighthouse(url, options, configObj);
  // console.log('next.js metrics', runnerResult.lhr.audits['user-timings'].details.items)

  // // `.report` is the HTML report as a json object
  // const reportJson = runnerResult.report;
  // fs.writeFileSync('lhreport.json', reportJson);

    },
    fullAuditReport: runnerResult.lhr.audits
  }

  // ----------------------------------------------------------------------------
// Below, auditReport and getId is used to find the names of all the metrics for performance, seo, accessibility, and bestpractices categories. 

//   const auditReport = {
//     performance: runnerResult.lhr.categories.performance.auditRefs,
//     accessibility: runnerResult.lhr.categories.accessibility.auditRefs,
//     seo: runnerResult.lhr.categories.seo.auditRefs,
//     bestpractices: runnerResult.lhr.categories['best-practices'].auditRefs
//   }

// function getId (auditReport: any) {
//   let performanceMetrics = [];
//   let accessibilityMetrics = [];
//   let seoMetrics = [];
//   let bestpracticesMetrics = [];
//   for(let cat in auditReport) {
//     if(cat === "performance") {
//       auditReport["performance"].forEach(obj => {
//         performanceMetrics.push(obj["id"])
//       })
//     } else if (cat === "accessibility") {
//       auditReport["accessibility"].forEach(obj => {
//         accessibilityMetrics.push(obj["id"])
//       })
//     } else if (cat === "seo") {
//       auditReport["seo"].forEach(obj => {
//         seoMetrics.push(obj["id"])
//       })
//     } else if (cat === "bestpractices") {
//       auditReport["bestpractices"].forEach(obj => {
//         bestpracticesMetrics.push(obj["id"])
//       })
//     }
    
//   }
//   return [performanceMetrics, accessibilityMetrics, seoMetrics, bestpracticesMetrics];
// }

// console.log(getId(auditReport))

  res.json(vitalReport);

  //closes chrome instance that was started by chromeLauncher
  await chrome.kill();
};

export default fetchdata;
