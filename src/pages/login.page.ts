import { expect, type Locator, type Page } from '@playwright/test';

export interface LoginCredentials {
  username: string;
  password: string;
}

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('#input_aw-personal-id');

    this.passwordInput = page.getByLabel(/password/i);

    this.signInButton = page.getByRole('button', {
      name: /sign in|login/i
    });

    this.errorMessage = page.getByRole('alert');

    this.loginButton = page.getByRole('button', {
        name: /log in with password/i
    });


  }

  async login(credentials: LoginCredentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);

    await this.loginButton.click();
  }

  async verifyLoginError(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}
