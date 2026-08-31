import type { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  private readonly page: Page;

  readonly logo: Locator;
  readonly searchBox: Locator;
  readonly signInButton: Locator;
  readonly aboutUsLink: Locator;
  

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator('header').getByRole('link').first();

   this.searchBox = page.locator('#smartAssistantLarge');

   this.aboutUsLink =  page.locator('//div/a[normalize-space()="About us"]')


    this.signInButton = page.getByRole('link', {
    name: /log in/i
    });

  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

  async search(text: string): Promise<void> {
    await this.searchBox.click();

    const searchInput = this.page.getByRole('textbox', {
      name: /search/i
    });

    await searchInput.fill(text);

    await searchInput.press('Enter');
  }
}




