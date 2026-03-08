const puppeteer = require("puppeteer");

(async () => {

 const browser = await puppeteer.launch({
  args: ["--no-sandbox"]
 });

 const page = await browser.newPage();

 await page.goto("https://aternos.org/go/");

 await page.type("#user", " Ybs1234");
 await page.type("#password", "yusuf2009");

 await page.click("#login");

 await page.waitForTimeout(10000);

 await page.goto("https://aternos.org/server/");

 await page.waitForTimeout(5000);

 await page.click("#start");

 console.log("Server başlatıldı");

})();