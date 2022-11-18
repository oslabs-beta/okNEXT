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
    performance: runnerResult.lhr.categories.performance.score * 100,
    performanceScores: {
      fcp: runnerResult.lhr.audits['first-contentful-paint'],
      lcp: runnerResult.lhr.audits['largest-contentful-paint'],
      speed: runnerResult.lhr.audits['speed-index'],
      cls: runnerResult.lhr.audits['cumulative-layout-shift'],
      tti: runnerResult.lhr.audits['interactive'],
      tbt: runnerResult.lhr.audits['total-blocking-time']
    },
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
    bestpractices: runnerResult.lhr.categories['best-practices'].score * 100
  }
  res.json(vitalReport);

  //closes chrome instance that was started by chromeLauncher
  await chrome.kill();
};

export default fetchdata;
