const puppeteer = require('puppeteer');
const fs = require('fs');
require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

async function AutomateTweet() {
  browser = await puppeteer.launch({ headless: false });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false
  });

  const data = await fs.readFileSync('beeMovieScript.txt', 'utf-8');

  const tweet = async () => {
    const lines = data.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    const FIVE_MINUTES = 300000;

    for (const line of lines) {
      await page.goto('https://twitter.com/compose/tweet', { waitUntil: 'networkidle2' });
      await page.focus('.public-DraftStyleDefault-block');
      await page.keyboard.type(`${line} #SaveWarriorNun`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      // I couldn't access the button by its attributes lol sorry for all the tabs
      await page.keyboard.press('Enter');
      await page.waitForNavigation({ timeout: 120000 });

      if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, FIVE_MINUTES));
    }

    return lines.length;
  };

  await page.setCacheEnabled(false);
  await page.goto('https://twitter.com/login', { waitUntil: 'networkidle2', timeout: 150000 });

  //LOGIN
  await page.type('input[name="text"]', username, { delay: 25 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', password, { delay: 25 });
  await page.keyboard.press('Enter');
  await page.waitForNavigation({ timeout: 120000 });

  await tweet();
  await context.close();
  await browser.close();
}

AutomateTweet();
