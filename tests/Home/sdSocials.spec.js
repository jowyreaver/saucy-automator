const { test, expect } = require('@playwright/test');

// Navigate to the login page and perform a successful login before each test
test.beforeEach(async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.locator("input[name='user-name']").fill('standard_user');
await page.locator("input[name='password']").fill('secret_sauce');
await page.locator('#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test("Test Socials - X", async function({ page, context }) {

    // Set X link as a constant > verify link is visible > verify correct hyperlink reference
    const xLink = page.locator('.social_twitter a');
    await expect(xLink).toBeVisible();
    await expect(xLink).toHaveAttribute('href', 'https://twitter.com/saucelabs'); 

    // Set new page as a constant > click the X link and wait for the new page to open 
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        xLink.click()
    ]);

    // Verify that the new page has navigated to the saucelabs X URL
    await expect(newPage).toHaveURL('https://x.com/saucelabs'); //await expect(newPage).toHaveURL('https://twitter.com/saucelabs');
})

test("Test Socials - Facebook", async function({ page, context }) {

    // Set Facebook link as a constant > verify link is visible > verify correct hyperlink reference
    const facebookLink = page.locator('.social_facebook a');
    await expect(facebookLink).toBeVisible();
    await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/saucelabs'); 

    // Set new page as a constant > click the Facebook link and wait for the new page to open 
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        facebookLink.click()
    ]);

    // Verify that the new page has navigated to the saucelabs Facebook URL
    await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs'); //await expect(newPage).toHaveURL('https://twitter.com/saucelabs');
})

test("Test Socials - LinkedIn", async function({ page, context }) {

    // Set LinkedIn link as a constant > verify link is visible > verify correct hyperlink reference
    const linkedInLink = page.locator('.social_linkedin a');
    await expect(linkedInLink).toBeVisible();
    await expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/'); 

    // Set new page as a constant > click the LinkedIn link and wait for the new page to open 
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        linkedInLink.click()
    ]);

    // Verify that the new page has navigated to the saucelabs LinkedIn URL
    await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/'); //await expect(newPage).toHaveURL('https://twitter.com/saucelabs');
})