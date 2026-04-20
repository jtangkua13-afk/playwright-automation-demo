# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart Tests >> Cart shows added product
- Location: tests\cart.spec.ts:24:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#cart_info_table')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#cart_info_table')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Jean Tangkua
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - paragraph [ref=e52]:
      - text: Cart is empty! Click
      - link "here" [ref=e53] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e54]:
    - generic [ref=e59]:
      - heading "Subscription" [level=2] [ref=e60]
      - generic [ref=e61]:
        - textbox "Your email address" [ref=e62]
        - button "" [ref=e63] [cursor=pointer]:
          - generic [ref=e64]: 
        - paragraph [ref=e65]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e69]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://automationexercise.com';
  4  | 
  5  | test.describe('Cart Tests', () => {
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     await page.goto(`${BASE_URL}/login`);
  9  |     await page.locator('[data-qa="login-email"]').fill('jtangkua13@gmail.com');
  10 |     await page.locator('[data-qa="login-password"]').fill('test@123!');
  11 |     await page.locator('[data-qa="login-button"]').click();
  12 |     await expect(page.getByText('Logged in as')).toBeVisible();
  13 |   });
  14 | 
  15 |   test('Add product to cart', async ({ page }) => {
  16 |     await page.goto(`${BASE_URL}/products`);
  17 |     await page.locator('.product-image-wrapper').first().hover();
  18 |     await page.locator('.product-image-wrapper').first()
  19 |       .locator('a.btn.add-to-cart').first().click();
  20 |     await expect(page.getByText('Added!')).toBeVisible();
  21 |     await page.getByRole('button', { name: 'Continue Shopping' }).click();
  22 |   });
  23 | 
  24 |   test('Cart shows added product', async ({ page }) => {
  25 |     await page.goto(`${BASE_URL}/view_cart`);
  26 |     await expect(page).toHaveURL(/view_cart/);
> 27 |     await expect(page.locator('#cart_info_table')).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  28 |   });
  29 | 
  30 |   test('Remove product from cart', async ({ page }) => {
  31 |     await page.goto(`${BASE_URL}/view_cart`);
  32 |     const deleteBtn = page.locator('.cart_delete a').first();
  33 |     const hasItems = await deleteBtn.isVisible();
  34 |     if (hasItems) {
  35 |       await deleteBtn.click();
  36 |       await expect(deleteBtn).not.toBeVisible();
  37 |     } else {
  38 |       console.log('Cart is empty — skipping delete');
  39 |     }
  40 |   });
  41 | 
  42 |   test('Proceed to checkout from cart', async ({ page }) => {
  43 |     await page.goto(`${BASE_URL}/view_cart`);
  44 |     await expect(page.locator('a.btn.check_out')).toBeVisible();
  45 |   });
  46 | 
  47 | });
```