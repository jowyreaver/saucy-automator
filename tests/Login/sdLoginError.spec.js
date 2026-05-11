
const {test, expect} = require('@playwright/test')

// Navigate to the login page
// Put outside the test block so that it runs before all tests and we don't have to repeat it in each test case
test.beforeEach(async ({ page }) => await page.goto('https://www.saucedemo.com/'))

test("Show Error Message - Attempt login with no credentials", async function({page}){

    // Click the login button without entering any credentials
    await page.locator('#login-button').click()

    // Verify that the expected error message is displayed
    await expect (page.getByText('Epic sadface: Username is required', { exact: true })).toBeVisible();
})

test("Show Error Message - Attempt login with username only", async function({page}){

    // Enter username only with delay to emulate human typing
    await page.locator("input[name='user-name']").type("standard_user", {delay:100})
    
    // Click the login button without entering password
    await page.locator('#login-button').click()
    
    // Verify that the expected error message is displayed
    await expect (page.getByText('Epic sadface: Password is required', { exact: true })).toBeVisible();

})

test("Error Message - Attempt login with password only", async function({page}){

    // Enter password only with delay to emulate human typing
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})
    
    // Click the login button without entering username 
    await page.locator('#login-button').click()
    
    // Verify that the expected error message is displayed
    await expect (page.getByText('Epic sadface: Username is required', { exact: true })).toBeVisible();

})

test("Show Error Message - Attempt login with incorrect credentials", async function({page}){

    // Enter incorrect username with delay to emulate human typing
    await page.locator("input[name='user-name']").type("invalid_user", {delay:100})

    // Enter incorrect password with delay to emulate human typing
    await page.locator("input[name='password']").type("invalid_password", {delay:100})
    
    // Click the login button with incorrect credentials
    await page.locator('#login-button').click()
    
    // Verify that the expected error message is displayed
    await expect (page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true })).toBeVisible();

})

test("Show Error Message - Attempt to login with locked out user", async function({page}){

    // Enter locked out username with delay to emulate human typing
    await page.locator("input[name='user-name']").type("locked_out_user", {delay:100})

    // Enter locked out password with delay to emulate human typing        
    await page.locator("input[name='password']").type("secret_sauce", {delay:100})

    // Click the login button with locked out credentials 
    await page.locator('#login-button').click()

    // Verify that the expected error message is displayed
    await expect (page.getByText('Epic sadface: Sorry, this user has been locked out.', { exact: true })).toBeVisible();

})

