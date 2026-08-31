import { test, expect } from '@fixtures/test.fixture';

test.describe('US Bank - Home Page', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('Should load the home page', async ({ homePage }) => {
    await homePage.verifyPageLoaded();
  });

  test('Should display the page title', async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle('Personal Banking, Credit Cards, Loans & Investing | U.S. Bank');
  });

  test('Should display the header logo', async ({ homePage }) => {
    await expect(homePage.header.logo).toBeVisible();
  });

  test('Should display the Sign In button', async ({ homePage }) => {
    await expect(homePage.header.signInButton).toBeVisible();
  });

  test('Should display the Search box', async ({ homePage }) => {
    await expect(homePage.header.searchBox).toBeVisible();
  });

   test('Should display the About us link', async ({ homePage }) => {
    await expect(homePage.header.aboutUsLink).toBeVisible();
  });


});
