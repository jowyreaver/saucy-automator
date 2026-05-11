# saucy-automator
Demo project exploring Playwright fundamentals with maintainable and readable tests.

## Overview

This project contains automated test scripts for SauceDemo (https://www.saucedemo.com/).  
It was built as part of a learning exercise to practice automation fundamentals as a seasoned manual QA tester transitioning into automation engineering.

The project demonstrates:

- Error handling on the login page & successful login
- Happy / Sad paths for ordering an item and proceeding to checkout
- Additional scenario: verifying social media links
- Basic Page Object Model (POM) structure for test maintainability

---

## Test Scenarios Implemented

### 1. Login Page Error Handling
- Attempt login with no credentials
- Attempt login with username only
- Attempt login with password only
- Attempt login with invalid credentials
- Attempt login with locked out user

**Goal:** Verify the correct error messages appear for invalid login attempts.

### 2. Successful Login (Happy Path)
- Standard user
- Problem user
- Performance glitch user
- Error user
- Visual user

**Goal:** Confirm valid users can log in and navigate to the inventory page.

### 3. Order Placement (Happy & Sad Paths)
- Happy path: Add product to cart, fill checkout form, complete order  
- Sad paths: Attempt checkout with missing required fields (first name, last name, postal code)

**Goal:** Ensure proper form validation and successful order placement workflow.

### 4. Social Media Links Verification
- X (formerly Twitter)
- Facebook
- LinkedIn

**Goal:** Verify links are visible and navigate to the correct URL.

---

## Project Structure

```
saucedemo-testproject/
├── tests/                  # All test scripts
│   ├── Home/               # Home page tests
│   ├── Login/              # Login page tests
│   └── Order/              # Checkout/order tests
├── node_modules/           # (Ignored via .gitignore)
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies
├── package-lock.json
└── .gitignore
```

**Notes:**

- The project uses **Playwright** for end-to-end testing.  
- All test scripts currently use **JavaScript**, but the structure allows easy transition to TypeScript if needed.  
- Page Object Model (POM) is used to centralise selectors and reduce duplication.

---

## How to Run Tests

1. Install dependencies:

```
npm install
```

2. Run tests in headless mode:

```
npx playwright test
```

3. Run tests with GUI (headed mode):

```
npx playwright test --headed
```

4. Generate HTML report:

```
npx playwright show-report
```

---

## Reflections & Optimisation Ideas

While working through these tests, I noticed some ways I could make optimisations:

1. Some tests are very similar, like the different login error checks. I could try grouping them together to avoid repeating the same steps.  
2. A few of the page element selectors are repeated in different places. I could move them into one place to make the code easier to manage.  
3. Filling in forms and logging in is done in many tests. I could make small helper functions so I don’t have to repeat those steps all the time.  
4. Using some kind of table or list to loop or run the same test with different data could make it faster to cover more cases without writing a lot of extra tests (might be particularly useful if I had more credentials to test).

**Objective:** These changes would improve maintainability, readability, and scalability of the tests as the project grows.

---

## Contact / Next Steps

This project is a learning exercise for a junior QA transitioning into automation.  
Feedback is welcome on test structure, readability, and optimisation strategies.
