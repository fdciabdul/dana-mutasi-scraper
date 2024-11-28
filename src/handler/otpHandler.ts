import { Page } from "puppeteer";
import selectors from "../selectors";

export async function handleOtp(page: Page, otp: string): Promise<void> {
  try {
    await page.waitForSelector(selectors.otpPrompt, { timeout: 10000 });
    console.log("OTP required, entering OTP...");
    for (let i = 0; i < otp.length; i++) {
      await page.type(selectors.otpInput, otp[i]);
      await page.keyboard.press("Tab");
    }
    console.log("OTP entered successfully.");
  } catch (error) {
    console.log("OTP prompt not found. Continuing to the next step...");
  }
}
