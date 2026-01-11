import test, { expect } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display Bun and React logos correctly', async ({ page }) => {
    const bunLogo = page.getByAltText('Bun Logo');
    const reactLogo = page.getByAltText('React Logo');

    await expect(bunLogo).toBeVisible();
    await expect(reactLogo).toBeVisible();

    await expect(reactLogo).toHaveClass(/spin/);
  });

  test('should render the main Card content', async ({ page }) => {
    await expect(page.getByText('Bun + React')).toBeVisible();
    await expect(page.getByText('src/App.tsx')).toBeVisible();
  });

  test('should render the APITester component', async ({ page }) => {
    const cardContent = page.locator('.gap-4').first(); // Dựa trên class của cha
    await expect(cardContent).toBeVisible();
  });
});
