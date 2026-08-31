import { test, expect } from '@fixtures/test.fixture';
import { FakerUtil } from '@utils/faker.util';


test.describe('Negative Login Tests', () => {

    test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
});

  test('Show validation when login fields are empty', async ({ loginPage, homePage }) => {

    await homePage.header.signInButton.click()

    // Click Sign In without entering username or password
    await loginPage.loginButton.click();

    // Verify validation message is displayed
    await expect(loginPage.page.getByRole('alert').getByText(
    'Enter your username and password to log in.')).toBeVisible();

});

    test('Show validation when username is empty', async ({ loginPage, homePage }) => {
    await homePage.header.signInButton.click()
    
    // Used Facker to generate a random password
    const password = FakerUtil.generatePassword();

    // Enter the password
    await loginPage.passwordInput.fill(password);


    // Click on Login Button
    await loginPage.loginButton.click();

    // Verify validation message is displayed
    const usernameError = loginPage.page.locator('#error-text_aw-personal-id').getByText('Enter your username to log in.');
    await expect(usernameError).toBeVisible();
})


    test('Show validation when Password is empty', async ({ loginPage, homePage }) => {
    await homePage.header.signInButton.click()
    
    // Used Facker to generate a random username
    const username = FakerUtil.generateUsername();

    // Enter the username
    await loginPage.usernameInput.fill(username);

    // Click on Login Button
    await loginPage.loginButton.click();

    // Verify validation message is displayed
    const passwordError = loginPage.page.locator('error-text_aw-password').getByText('Enter your password to log in.');
    await expect(passwordError).toBeVisible();
})


});
