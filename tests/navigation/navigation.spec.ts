import { test, expect } from '@fixtures/test.fixture';

test.describe('US Bank Navigation', () => {

  test('should navigate to checking products',async ({ homePage, page }) => {

      await homePage.goto();

      await homePage.navigateToChecking();

      await expect(page).toHaveURL(/checking/i);
    }
  );

  test('should navigate to savings products',async ({ homePage, page }) => {

      await homePage.goto();

      await homePage.navigateToSavings();

      await expect(page).toHaveURL(/savings/i);
    }
  );

});
