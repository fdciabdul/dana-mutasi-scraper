import { Page } from "puppeteer";
import fs from "fs";
import selectors from "../selectors";
import { TransactionDetails } from "../interfaces";
import { BASE_DANA_URL } from "../utils/urlList";
/**
 * @author taqin
 * Mengumpulkan detail transaksi dari api dana ygy
 * @param page Page
 * @return { TransactionDetails[] }
**/
export async function collectTransactionDetails(page: Page): Promise<TransactionDetails[]> {
  const allTransactionDetails: TransactionDetails[] = [];
  try {
    await page.waitForSelector(selectors.orderWrapperCard);
    const orderCards = await page.$$(selectors.orderWrapperCard);

    for (const card of orderCards) {
      await card.click();
      const response = await page.waitForResponse((res) =>
        res.url().includes(
    BASE_DANA_URL.BASE_API + "/wallet/api/alipayplus.mobilewallet.user.transaction.detail.json"
        )
      );

      const responseData: TransactionDetails = await response.json();
      allTransactionDetails.push(responseData);

      await page.goto("https://m.dana.id/d/ipg/completed");
    }

    fs.writeFileSync("transaction_details.json", JSON.stringify(allTransactionDetails, null, 2));
    console.log("Transaction details saved to transaction_details.json.");
  } catch (error) {
    console.error("Error collecting transaction details:", error);
  }

  return allTransactionDetails;
}
