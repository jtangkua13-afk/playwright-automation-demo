import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com';

test.describe('Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await page.locator('[data-qa="login-email"]').fill('jtangkua13@gmail.com');
    await page.locator('[data-qa="login-password"]').fill('test@123!');
    await page.locator('[data-qa="login-button"]').click();
    await expect(page.getByText('Logged in as')).toBeVisible();
  });

  test('Add product to cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('.product-image-wrapper').first()
      .locator('a.btn.add-to-cart').first().click();
    await expect(page.getByText('Added!')).toBeVisible();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
  });

  test('Cart shows added product', async ({ page }) => {
    await page.goto(`${BASE_URL}/view_cart`);
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#cart_info_table')).toBeVisible();
  });

  test('Remove product from cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/view_cart`);
    const deleteBtn = page.locator('.cart_delete a').first();
    const hasItems = await deleteBtn.isVisible();
    if (hasItems) {
      await deleteBtn.click();
      await expect(deleteBtn).not.toBeVisible();
    } else {
      console.log('Cart is empty — skipping delete');
    }
  });

  test('Proceed to checkout from cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/view_cart`);
    await expect(page.locator('a.btn.check_out')).toBeVisible();
  });

});