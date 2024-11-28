import puppeteer, { Browser, Page } from "puppeteer";

/**
 * @author taqin
 * Membuat browser dan page baru
 * @param executablePath Path executable chrome yang sudah di patch
 * @return { browser: Browser; page: Page }
 */
export async function launchBrowser(executablePath: string): Promise<{ browser: Browser; page: Page }> {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath,
  });
  const page = await browser.newPage();
  return { browser, page };
}
