import { expect, test } from "@playwright/test";

// Added the 'HOOK' below for when other tests suites are added
test.beforeEach(async ({ page }) => {
  await page.goto("https://steven22091977.wixsite.com/stevenatkinartist");
});

test.describe("Test suite 1", () => {
  test("Header buttons testing", async ({ page }) => {
    await page.getByText("Artwork").click();
    // add assertion that artwork page has loaded
    await expect(page.getByText("Life drawings")).toHaveText("Life drawings");
    await page.getByRole("link", { name: "3D", exact: true }).click();
    // add assertion that 3D page has loaded
    await expect(page.getByText("3D Design page")).toHaveText("3D Design page");
    await page.getByRole("link", { name: "Animation / Previs" }).click();
    // add assertion that Animation page has loaded
    await expect(page.getByText("Animation / FILM")).toHaveText(
      "Animation / FILM",
    );
    // Click on HOME button
    await page.getByRole("link", { name: "Home" }).click();
  });
});

test.describe("Test suite 2", () => {
    test('Please enter details section', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Name *' }).fill('Steven');
    // Add assertion that text box is filled in with 'Steven'
    await expect(page.locator('[id="input_comp-kg7gxrqy1"]')).toHaveValue('Steven')
    await page.getByRole('textbox', { name: 'Email *' }).fill('testers@yahoo.co.uk')
    // Add assertion that email field has been fileld in with an email address
    await expect(page.locator('[id="input_comp-kg7gxrre"]')).toHaveValue('testers@yahoo.co.uk')
    await page.getByRole('textbox', { name: 'Subject' }).fill('This is the SUBJECT text')
    // Add assertion that 'Subject' field has been filed in with an email address
    await expect(page.locator('[id="input_comp-kg7gxrri"]')).toHaveValue('This is the SUBJECT text')
    await page.getByPlaceholder('Message').fill('THis is the message text,')
    // Add assertion that 'Message' field has been filed in with text
await expect(page.locator('[id="textarea_comp-kg7gxrrl1"]')).toHaveValue('THis is the message text,')
  });
});
