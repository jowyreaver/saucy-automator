

const {test, expect} = require('@playwright/test')

// Navigate to the login page
// Put outside the test block so that it runs before all tests and we don't have to repeat it in each test case
test.beforeEach(async ({ page }) => await page.goto('https://www.saucedemo.com/'))

test("Successful Login - Standard User", async function({page}){

// Enter valid username & password with delay to emulate human typing
await page.locator("input[name='user-name']").type("standard_user", {delay:100})
await page.locator("input[name='password']").type("secret_sauce", {delay:100})

// Click the login button with valid credentials
await page.locator('#login-button').click()

// Verify that the inventory page is displayed
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

test("Successful Login - Problem User", async function({page}){

    // Enter valid username & password with delay to emulate human typing
    await page.locator("input[name='user-name']").type("problem_user", {delay:100})         
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})

    // Click the login button with valid credentials
    await page.locator('#login-button').click()

    // Verify that the inventory page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

test("Successful Login - Performance Glitch User", async function({page}){

    // Enter valid username & password with delay to emulate human typing
    await page.locator("input[name='user-name']").type("performance_glitch_user", {delay:100})    
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})

    // Click the login button with valid credentials
    await page.locator('#login-button').click()

    // Verify that the inventory page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

test("Successful Login - Error User", async function({page}){

    // Enter valid username & password with delay to emulate human typing
    await page.locator("input[name='user-name']").type("error_user", {delay:100})         
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})

    // Click the login button with valid credentials
    await page.locator('#login-button').click()

    // Verify that the inventory page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

test("Successful Login - Visual User", async function({page}){

    // Enter valid username & password with delay to emulate human typing
    await page.locator("input[name='user-name']").type("visual_user", {delay:100})         
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})

    // Click the login button with valid credentials
    await page.locator('#login-button').click()

    // Verify that the inventory page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

