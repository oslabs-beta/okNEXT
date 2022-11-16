const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

// import lighthouse from 'next/lighthouse';
// export default function handler(req, res) {
async function fetchdata (req:any, res:any){
  const { url } = req.body;
  console.log('this is request body', req.body);
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'], port: chrome.port};
  const configObj = {
    extends: 'lighthouse:default',
    settings: {
      screenEmulation: {mobile: false, disabled: false},
      formFactor: 'desktop'
    },
  }
  const runnerResult = await lighthouse(url, options, configObj);
  console.log('lighthouse data over here', typeof(runnerResult.lhr));

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  // console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
  // console.log('Performance score was', runnerResult.lhr.categories.accessibility.score * 100);
  // res.status(200).json(`performance score ${runnerResult.lhr.categories.performance.score}`);
  console.log("hello from hell");
  const vitalReport = {
    performance: runnerResult.lhr.categories.performance.score * 100,
    // performancescores: {
    //   fcp:
    // },
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
    bestpractices: runnerResult.lhr.categories['best-practices'].score * 100
  }
  res.json(vitalReport);
  await chrome.kill();
  // return(res.body("I am data"))
};
// }

/*
  export default function handler(req, res) {

  }
*/
// fetchdata();
export default fetchdata;

