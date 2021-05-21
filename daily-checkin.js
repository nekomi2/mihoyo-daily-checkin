const puppeteer = require('puppeteer');
const fs = require('fs');

URL = '' //put your signin URL here

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const cookies = fs.readFileSync('cookies.json', 'utf8')
  const deserializedCookies = JSON.parse(cookies)
  try{
  await page.setCookie(...deserializedCookies)
  await page.goto(URL,{waitUntil:'networkidle2'});
  await page.click("div[class*='---active---']")
  }
  catch(e){
    console.error(e);
  }
  await browser.close();
})();
