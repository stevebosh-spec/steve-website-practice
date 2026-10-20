import { expect, test } from "@playwright/test";

test.describe('Test suite 1', () => {
    test("Header buttons testing", async ({ page }) => {
        await page.goto('https://steven22091977.wixsite.com/stevenatkinartist')
        //add assertion that page has loaded
        await page.getByText('Artwork').click()
        // add assertion that artwork page has loaded
        await expect(page.getByText('Life drawings')).toHaveText('Life drawings')
        await page.getByRole('link', { name: '3D', exact: true }).click()
        // add assertion that 3D page has loaded
        await expect(page.getByText('3D Design page')).toHaveText('3D Design page')
        await page.getByRole('link', { name: 'Animation / Previs' }).click()
        // add assertion that Animation page has loaded
        await expect(page.getByText('Animation / FILM')).toHaveText('Animation / FILM')
        // Click on HOME button 
        await page.getByRole('link', { name: 'Home' }).click()

    })
})
 

