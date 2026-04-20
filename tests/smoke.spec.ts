import { test, expect } from '@playwright/test';
import { TEST_CONFIG } from '../config/test.config';

const BASE_URL = TEST_CONFIG.baseUrl;

test.describe('Smoke Tests - Critical Pages', () => {

  test('Homepage loads successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('Products page loads and displays items', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);
    await expect(page.getByText('All Products')).toBeVisible();
    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  });

  test('Search functionality works', async ({ page }) => {
    await page.goto(`${BASE_URL}/products`);
    await page.locator('#search_product').fill('dress');
    await page.locator('#submit_search').click();
    await expect(page.getByText('Searched Products')).toBeVisible();
    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  });

  test('Cart page is accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/view_cart`);
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#cart_info')).toBeVisible();
  });

  test('Contact Us page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact_us`);
    await expect(page.getByText('Get In Touch')).toBeVisible();
    await expect(page.locator('[data-qa="name"]')).toBeVisible();
    await expect(page.locator('[data-qa="email"]')).toBeVisible();
  });

});