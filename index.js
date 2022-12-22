const puppeteer = require('puppeteer');
require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

let browser = null;

async function Login() {
  browser = await puppeteer.launch({ headless: false });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false
  });
  await page.setCacheEnabled(false);
  await page.goto('https://twitter.com/login', { waitUntil: 'networkidle2' });

  //LOGIN
  await page.type('input[name="text"]', username, { delay: 25 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', password, { delay: 25 });
  await page.keyboard.press('Enter');
  await page.waitForNavigation({ timeout: 120000 });
}

Login();