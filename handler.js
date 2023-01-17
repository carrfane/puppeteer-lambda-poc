'use strict';
const chromium = require('chrome-aws-lambda');


module.exports.hello = async (event) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
  
  const page = await browser.newPage();
  await page.goto('https://developers.google.com/web/');

  console.log(await page.content());
};
