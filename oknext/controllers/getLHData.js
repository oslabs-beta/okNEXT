// import the all lighthouse stuff here later
const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const puppeteer = require('puppeteer');
const puppeteer_core = require('puppeteer-core')
const chromium = require('chrome-aws-lambda');

//this function utilizes closure to give the inner function access to the req and res objects from the handler function
const getLHData = (handler) => {
  return async (req, res) => {
    // think about adding logic that only allows this to run if the username is defined, meaning the user is logged in

    const { url } = req.body;
    let runnerResult;
    let browser;
    console.log('hello from LHData function');

    // **UNCOMMENT FOR IOS**
    try {
      browser = await chromium.puppeteer.launch({
        args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      });
    } catch (error) {
      console.log('error in puppeteer', error);
      return res.json('error from puppeteer', error);
    }

    // **UNCOMMENT FOR UBUNTU/WSL**
    // try {
    //   chrome = await chromeLauncher.launch({
    //     chromePath: process.env.NEXT_PUBLIC_CHROME_PATH,
    //     chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
    //   });
    // } catch (error) {
    //   console.log('error in chromeLauncher', error);
    //   return res.json('error here in chrome launcher', error);
// }PP

    //options: choosing what categories needed for application
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'],
      port: new URL(browser.wsEndpoint()).port,
    };
    //additional config options object
    const configObj = {
    extends: 'lighthouse:default',
      settings: {
        screenEmulation: { mobile: false, disabled: false },
        formFactor: 'desktop',
      },
    };

    //runs lighthouse report stores in runnerResult variable
    try {
      runnerResult = await lighthouse(url, options, configObj);
    } catch (error) {
      console.log('error in lighthouse', error);
      return res.json('error from lighthouse', error);
    }

    // storing JSON report on file system
    const reportJson = runnerResult.report;
    // fs.writeFileSync('lhreport.json', reportJson);

    console.log('hello from the void');

    //storing all relevant data in an object to be stored in the database
    const vitalReport = {
      performance: Math.floor(
        runnerResult.lhr.categories.performance.score * 100
      ),
      performanceScores: {
        fcp: runnerResult.lhr.audits['first-contentful-paint'],
        lcp: runnerResult.lhr.audits['largest-contentful-paint'],
        speed: runnerResult.lhr.audits['speed-index'],
        cls: runnerResult.lhr.audits['cumulative-layout-shift'],
        tti: runnerResult.lhr.audits['interactive'],
        tbt: runnerResult.lhr.audits['total-blocking-time'],
      },
      accessibility: Math.floor(
        runnerResult.lhr.categories.accessibility.score * 100
      ),
      seo: Math.floor(runnerResult.lhr.categories.seo.score * 100),
      bestpractices: Math.floor(
        runnerResult.lhr.categories['best-practices'].score * 100
      ),
      fullAuditReport: runnerResult.lhr.audits,
      // nextJs: {
      //   beforeHydrationDuration: Math.floor(runnerResult.lhr.audits['user-timings'].details.items[0]['duration']),
      //   hydrationDuration: Math.floor(runnerResult.lhr.audits['user-timings'].details.items[1]['duration']),
      //   beforeRenderStart: Math.floor(runnerResult.lhr.audits['user-timings'].details.items[2]['startTime'])
      // },
    };

    //left off here
    if (runnerResult.lhr.audits['user-timings'].details.items.length !== 0) {
      vitalReport['nextJs'] = {
        beforeHydrationDuration: Math.floor(
          runnerResult.lhr.audits['user-timings'].details.items[0]['duration']
        ),
        hydrationDuration: Math.floor(
          runnerResult.lhr.audits['user-timings'].details.items[1]['duration']
        ),
        beforeRenderStart: Math.floor(
          runnerResult.lhr.audits['user-timings'].details.items[2]['startTime']
        ),
      };
    }

    //closes chrome instance that was started by chromeLauncher
    await browser.close();

    //storing data in a variable to be passed to the next function
    const data = vitalReport;
    // console.log('hello from getLHData function!', data);
    return handler(req, res, data);
  };
};

module.exports = getLHData;
