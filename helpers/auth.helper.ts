import { Page, expect } from '@playwright/test';
import { TEST_CONFIG } from '../config/test.config';

export async function loginAsStandardUser(page: Page) {
  await page.goto(`${TEST_CONFIG.baseUrl}/login`);
  await page.locator('[data-qa="login-email"]').fill(TEST_CONFIG.users.standard.email);
  await page.locator('[data-qa="login-password"]').fill(TEST_CONFIG.users.standard.password);
  await page.locator('[data-qa="login-button"]').click();
  await expect(page.getByText('Logged in as')).toBeVisible();
}