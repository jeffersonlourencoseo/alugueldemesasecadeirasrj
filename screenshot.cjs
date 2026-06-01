const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:4323/');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshot-home.png', fullPage: true });
    console.log('Screenshot saved to screenshot-home.png');
    await browser.close();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
})();
