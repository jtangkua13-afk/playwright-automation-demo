import { test, expect } from '@playwright/test';
import { TEST_CONFIG } from '../config/test.config';
import { loginAsStandardUser } from '../helpers/auth.helper';

const BASE_URL = TEST_CONFIG.baseUrl;

test.describe.serial('Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await loginAsStandardUser(page);
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
    await page.goto(`${BASE_URL}/products`);
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('.product-image-wrapper').first()
      .locator('a.btn.add-to-cart').first().click();
    await expect(page.getByText('Added!')).toBeVisible();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await page.goto(`${BASE_URL}/view_cart`);
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#cart_info_table')).toBeVisible();
    await expect(page.locator('.cart_product').first()).toBeVisible();
  });

  test('Remove product from cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('.product-image-wrapper').first()
      .locator('a.btn.add-to-cart').first().click();
    await expect(page.getByText('Added!')).toBeVisible();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await page.goto(`${BASE_URL}/view_cart`);
    const deleteBtn = page.locator('.cart_delete a').first();
    await expect(deleteBtn).toBeVisible();
    await deleteBtn.click();
    await expect(page.locator('.cart_product')).toHaveCount(0);
  });

  test('Proceed to checkout from cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('.product-image-wrapper').first()
      .locator('a.btn.add-to-cart').first().click();
    await expect(page.getByText('Added!')).toBeVisible();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await page.goto(`${BASE_URL}/view_cart`);
    await expect(page.locator('a.btn.check_out')).toBeVisible();
  });

});