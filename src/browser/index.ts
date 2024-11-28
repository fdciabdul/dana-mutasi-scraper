import puppeteer, { Browser, Page } from "puppeteer";

export async function launchBrowser(executablePath: string): Promise<{ browser: Browser; page: Page }> {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath,
  });
  const page = await browser.newPage();
  return { browser, page };
}
