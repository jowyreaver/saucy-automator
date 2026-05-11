const { test, expect } = require('@playwright/test');

// Navigate to the login page and perform a successful login before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator("input[name='user-name']").fill('standard_user');
  await page.locator("input[name='password']").fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test("Happy Path - Place an order successfully", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Fill in the checkout form
  await page.locator('[data-test="firstName"]').type('Gordon', {delay:100})
  await page.locator('[data-test="lastName"]').type('Freeman', {delay:100})
  await page.locator('[data-test="postalCode"]').type('12345', {delay:100})

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Click the finish button
  await page.locator('[data-test="finish"]').click();

  // Verify that the order has been placed successfully
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
})

test("Sad Path - Attempt to place an order without filling in the checkout form", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Verify that the expected error message is displayed
  await expect (page.getByText('Error: First Name is required', { exact: true })).toBeVisible();
})

test("Sad Path - Attempt to place an order with only first name filled in", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Fill in the checkout form
  await page.locator('[data-test="firstName"]').type('Gordon', {delay:100})

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Verify that the expected error message is displayed
  await expect (page.getByText('Error: Last Name is required', { exact: true })).toBeVisible();
})  

test("Sad Path - Attempt to place an order with only last name filled in", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Fill in the checkout form
  await page.locator('[data-test="lastName"]').type('Freeman', {delay:100})

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Verify that the expected error message is displayed
  await expect (page.getByText('Error: First Name is required', { exact: true })).toBeVisible();
})  

test("Sad Path - Attempt to place an order with only postal code filled in", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Fill in the checkout form
  await page.locator('[data-test="postalCode"]').type('12345', {delay:100})

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Verify that the expected error message is displayed
  await expect (page.getByText('Error: First Name is required', { exact: true })).toBeVisible();
})

test("Sad Path - Attempt to place an order with only first name and last name filled in", async function({ page }) {

  // Add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();    

  // Click the shopping cart link
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click the checkout button
  await page.locator('[data-test="checkout"]').click();  

  // Fill in the checkout form
  await page.locator('[data-test="firstName"]').type('Gordon', {delay:100})
  await page.locator('[data-test="lastName"]').type('Freeman', {delay:100})

  // Click the continue button
  await page.locator('[data-test="continue"]').click();

  // Verify that the expected error message is displayed
  await expect (page.getByText('Error: Postal Code is required', { exact: true })).toBeVisible();
})