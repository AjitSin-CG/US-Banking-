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
    const passwordError = loginPage.page.locator('#error-text_aw-password').getByText('Enter your password to log in.');
    await expect(passwordError).toBeVisible();
})


    test('Show validation when Forgot Password username is empty', async ({ loginPage, homePage }) => {
    await homePage.header.signInButton.click()
    
    // Enter the username
    await loginPage.forgotPasswordLink.click();

    // Click on Login Submit Button
    await loginPage.submitButton.click();

    // Verify validation message is displayed
    const usernameError = loginPage.page.locator('#error-text_user-name').getByText('Enter your username. 7 to 22 characters, no spaces or special characters.');
    await expect(usernameError).toBeVisible();
})



 test('Show validation when Enroll in online banking options is empty', async ({ loginPage, homePage }) => {
    // Click on Login Button
    await homePage.header.signInButton.click()


    // Enter the Enroll in online banking 
    await loginPage.enrollmentLink.click();

    // Click on Login Submit Button
    await loginPage.enrollContinueButton.click();

    // Verify validation message is displayed
    const enrollError = loginPage.page.locator('#--multiple-notification');
    await expect(enrollError).toBeVisible();
})


 test('Show validation when Enroll in online banking options with empty SSN', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()
    

    // Enter the Enroll in online banking 
    await loginPage.enrollmentLink.click();

    // Used Facker to generate a random Account Number
    const accountNumber = FakerUtil.generateAccountNumber();

     // Enter the Account Number
     await loginPage.cardOrAccountNumberInput.fill(accountNumber);

    // Click on Login Submit Button
    await loginPage.enrollContinueButton.click();

    // Verify validation message is displayed
    const ssnError = loginPage.page.locator('#-single-notification');
    await expect(ssnError).toBeVisible();
})

 test('Show validation when Enroll in online banking options with empty Account Number', async ({ loginPage, homePage }) => {
    
    // Click on Login Button
    await homePage.header.signInButton.click()

    // Enter the Enroll in online banking 
    await loginPage.enrollmentLink.click();

    // Used Facker to generate a random Account Number
    const ssn = FakerUtil.generateLastSSN();
    console.log("Generated SSN: ", ssn);

     // Enter the SSN 
     await loginPage.cardOrAccountNumberInput.fill(ssn);

    // Click on Login Submit Button
    await loginPage.enrollContinueButton.click();

    // Verify validation message is displayed
    const passwordError = loginPage.page.locator('#error-text_cardoraccno');
    await expect(passwordError).toBeVisible();
})







});
