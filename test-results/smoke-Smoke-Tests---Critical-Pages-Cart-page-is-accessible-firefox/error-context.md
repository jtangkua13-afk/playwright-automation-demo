# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke Tests - Critical Pages >> Cart page is accessible
- Location: tests\smoke.spec.ts:27:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#cart_info')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#cart_info')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://automationexercise.com';
  4  | 
  5  | test.describe('Smoke Tests - Critical Pages', () => {
  6  | 
  7  |   test('Homepage loads successfully', async ({ page }) => {
  8  |     await page.goto(BASE_URL);
  9  |     await expect(page).toHaveTitle(/Automation Exercise/);
  10 |     await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  11 |   });
  12 | 
  13 |   test('Products page loads and displays items', async ({ page }) => {
  14 |     await page.goto(`${BASE_URL}/products`);
  15 |     await expect(page.getByText('All Products')).toBeVisible();
  16 |     await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  17 |   });
  18 | 
  19 |   test('Search functionality works', async ({ page }) => {
  20 |     await page.goto(`${BASE_URL}/products`);
  21 |     await page.locator('#search_product').fill('dress');
  22 |     await page.locator('#submit_search').click();
  23 |     await expect(page.getByText('Searched Products')).toBeVisible();
  24 |     await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  25 |   });
  26 | 
  27 |   test('Cart page is accessible', async ({ page }) => {
  28 |     await page.goto(`${BASE_URL}/view_cart`);
  29 |     await expect(page).toHaveURL(/view_cart/);
> 30 |     await expect(page.locator('#cart_info')).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  31 |   });
  32 | 
  33 |   test('Contact Us page loads', async ({ page }) => {
  34 |     await page.goto(`${BASE_URL}/contact_us`);
  35 |     await expect(page.getByText('Get In Touch')).toBeVisible();
  36 |     await expect(page.locator('[data-qa="name"]')).toBeVisible();
  37 |     await expect(page.locator('[data-qa="email"]')).toBeVisible();
  38 |   });
  39 | 
  40 | });
```