import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('https://us.puma.com/us/en');

  await page.locator('#slots-0 [data-test-id="call-to-action"]').click();

  await expect(page).toHaveTitle(/Valentine's Day/);
});

test('enter text', async ({ page }) => {
  await page.goto('https://us.puma.com/us/en');

  await page.locator('[data-test-id="search-button-nav"]').click();
    const inputField = page.locator('[data-test-id="search-flyout-form-input"]')
    await inputField.fill( 'Sneakers');
    await page.locator('[data-test-id="search-flyout-form-submit"]').click()

  await page.waitForSelector('img', { state: 'attached' })
  await expect(page.getByLabel('Go to Defy Varsity Mid Women\'')).toBeVisible();
});

test('check user is not loginned', async ({ page }) => {
  await page.goto('https://us.puma.com/us/en');

  await page.locator('#nav-wishlist-link').click();
await expect( page.getByText('LoginCreate accountEmail *')).toBeVisible();
});
test('check filters', async ({ page }) => {
  await page.goto('https://us.puma.com/us/en');

  await page.locator('div').filter({ hasText: /^Kids$/ }).getByRole('menuitem').hover;
  await page.waitForTimeout(2000);

  const linkKids = await page.getByLabel('Boys').getByRole('menuitem', { name: 'Classics' }).first();
  await linkKids.waitFor();
  await linkKids.click();


  await page.getByRole('button', { name: 'Size' }).click();
  await page.locator('[data-test-id="\\31 0-btn"]').click();

  
await expect( page.locator('[data-test-id="selected-filter-item"]')).toBeVisible();
});
test('check autoloading in the page', async ({ page }) => {
  await page.goto('https://us.puma.com/us/en');

  await page.locator('div').filter({ hasText: /^Men$/ }).getByRole('menuitem').click();
  await page.waitForLoadState(); 

  await page.waitForTimeout(2000);
  const initialCount = await page.locator('//*[@data-test-id="product-list-item"]').count();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForFunction( (initialCount) => document.querySelectorAll('[data-test-id="product-list-item"]').length > initialCount,
    initialCount);

    const finalCount = await page.locator('//*[@data-test-id="product-list-item"]').count();
expect(finalCount).toBeGreaterThan(initialCount);
});