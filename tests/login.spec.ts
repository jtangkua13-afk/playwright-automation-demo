import { test, expect } from '@playwright/test';
import { TEST_CONFIG } from '../config/test.config';

const BASE_URL = TEST_CONFIG.baseUrl;

test.describe('Login Tests', () => {

  test('Login with valid credentials', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.locator('[data-qa="login-email"]').fill(TEST_CONFIG.users.standard.email);
    await page.locator('[data-qa="login-password"]').fill(TEST_CONFIG.users.standard.password);
    await page.locator('[data-qa="login-button"]').click();

    await expect(page.getByText('Logged in as')).toBeVisible();
  });

  test('Login with invalid credentials shows error', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    await page.locator('[data-qa="login-email"]').fill('wrong@email.com');
    await page.locator('[data-qa="login-password"]').fill('wrongpassword');
    await page.locator('[data-qa="login-button"]').click();

    await expect(page.getByText('Welcome Back!')).toBeVisible();
  });

  test('Login page has required fields', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    await expect(page.locator('[data-qa="login-email"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-password"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-button"]')).toBeVisible();
  });

});