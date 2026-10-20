import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://steven22091977.wixsite.com/stevenatkinartist');
  await link.hover();
  await expect(link).toBeVisible();
  await page.getByRole('link', { name: 'About Me' }).click();
  await page.getByRole('link', { name: 'Key Skills / Experience' }).click();
  await page.getByRole('link', { name: 'Employment History' }).click();
});