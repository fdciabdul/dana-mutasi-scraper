import { Page } from "puppeteer";
import { collectTransactionDetails } from "../handler/trxHandler";
import { handleOtp } from "../handler/otpHandler";
import selectors from "../selectors";
import { promptInput } from "../utils";
import { BASE_DANA_URL } from "../utils/urlList";
/**
 * @author taqin
 * @description Base script untuk mutasi dana
 * @param page Page
 * @return { void } return mutasi dana dalam bentuk json
**/
export async function mutasiDana(page: Page): Promise<void> {
  const encodeUrl = encodeURI("/i/biller-app/game/home");
  await page.goto(
    BASE_DANA_URL.BASE_API + "/d/ipg/new/inputphone?phoneNumber=&ipgForwardUrl="+encodeUrl+"&isFromItemDigital=true"
  );

  const phoneNumber = await promptInput("Enter phone number:");
  await page.waitForSelector(selectors.phoneInput);
  await page.type(selectors.phoneInput, phoneNumber);

  await page.click(selectors.agreementButton);

  const pin = await promptInput("Enter PIN:");
  await page.waitForSelector(selectors.pinInput);
  await page.type(selectors.pinInput, pin);

  const otp = await promptInput("Enter OTP (if required):");
  await handleOtp(page, otp);

  await page.goto(
    BASE_DANA_URL.BASE_API + "/d/ipg/completed");
  const transactionDetails = await collectTransactionDetails(page);

  console.log("Collected Transaction Details:", transactionDetails);
}
