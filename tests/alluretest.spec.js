const { test, expect } = require('@playwright/test');

test('Login Test - Latest Allure Style', async ({ page }) => {

  // ✅ Add metadata (Latest way)
  test.info().annotations.push(
    { type: 'epic', description: 'Web UI' },
    { type: 'feature', description: 'Authentication' },
    { type: 'story', description: 'Valid Login' },
    { type: 'severity', description: 'critical' }
  );

  await test.step('Open login page', async () => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  // await test.step('Intentionally fail: expect wrong title', async () => {
  //     // ❌ ye jan-boojh ke fail karwaya hai
  //     await expect(page).toHaveTitle('This Title Will Never Match');
  //   });

  await test.step('Enter credentials', async () => {
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
  });

  await test.step('Click login', async () => {
    await page.click('button[type="submit"]');
  });

  await test.step('Verify success', async () => {
    await expect(page.locator('#flash'))
      .toContainText('You logged into a secure area!');
  });

  // ✅ Attach custom data
  await test.info().attach('Test Data', {
    body: JSON.stringify({ username: 'tomsmith' }, null, 2),
    contentType: 'application/json',
  });

});