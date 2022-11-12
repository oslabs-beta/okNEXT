const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

// import lighthouse from 'next/lighthouse';
// export default function handler(req, res) {
async function fetchdata (req:any, res:any){
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse('https://netflix.com', options);
  // console.log(runnerResult.lhr);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
  // res.status(200).json(`performance score ${runnerResult.lhr.categories.performance.score}`);
  console.log("hello from hell")
  res.json(runnerResult.lhr.categories.performance.score * 100);
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

