const { test, expect } = require('@playwright/test');

test('Test 1 - Google', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
  console.log('Test 1')
});

test('Test 2 - Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
  console.log('Test 2')
});

test('Test 3 - GitHub', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveTitle(/GitHub/);
  console.log('Test 3')
  console.log('Test feature1')
});
