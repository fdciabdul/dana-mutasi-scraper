import { launchBrowser } from "./src/browser";
import { mutasiDana } from "./src/main";

(async () => {
  const { browser, page } = await launchBrowser(
    "CHROM_PATCHES_PATH"
  );

  try {
    await mutasiDana(page);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();
