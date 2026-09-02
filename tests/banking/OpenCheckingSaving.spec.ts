import { test, expect } from '@fixtures/test.fixture';
import { FakerUtil } from '@utils/faker.util';


test.describe('US Banking Dashboard', () => {

    test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  
});


test('Verify Link of Checking and Saving Accounts', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Click on Open Checking and Savings Link
    await homePage.openCheckingLink.click();

    // Verify the Open Checking and Savings Page is loaded
    await expect(loginPage.page).toHaveURL("https://www.usbank.com/bank-accounts/smartly-bundle.html?icid=PB_553415");

})


test('Open Checking and Saving Accounts', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Click on Open Checking and Savings Link
    await homePage.openCheckingLink.click();

    // Click on Open Checking and Savings Link
    await homePage.bundleCheckingSaving.click();

    // Verify Bundle Page is loaded
    await expect(loginPage.page).toHaveURL("https://www.usbank.com/bank-accounts/smartly-bundle.html?icid=PB_553415");

})


test('Zip code Verification in Bundle Page', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Click on Open Checking and Savings Link
    await homePage.openCheckingLink.click();

    // Click on Open Checking and Savings Link
    await homePage.bundleCheckingSaving.click();

    // Verify Bundle Page is loaded
    await expect(loginPage.page.locator('#zipcode_entry')).toHaveAttribute('id', 'zipcode_entry');

})

test('Verify Maximize your money’s potential Text is Visible', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Click on Open Checking and Savings Link
    await homePage.openCheckingLink.click();

    // Click on Open Checking and Savings Link
    await homePage.bundleCheckingSaving.click();

    // Verify Bundle Page is loaded
    await expect(page.locator('div h2', {hasText: 'Maximize your money’s potential'})).toBeVisible();

})

test('Verify dynamic Banking duo Text is Visible', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Click on Open Checking and Savings Link
    await homePage.openCheckingLink.click();

    // Click on Open Checking and Savings Link
    await homePage.bundleCheckingSaving.click();

    // Verify Bundle Page is loaded
    await expect(page.locator('div h2', {hasText: 'Try to find a more dynamic (banking) duo.'})).toBeVisible();

})







});