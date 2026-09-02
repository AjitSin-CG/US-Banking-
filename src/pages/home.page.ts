import { expect, type Page,type Locator } from '@playwright/test';
import { HeaderComponent } from '@components/header.component';

export class HomePage {

  readonly header: HeaderComponent;
  readonly openCheckingLink: Locator;
  readonly bundleCheckingSaving: Locator;

  constructor(public page: Page) {
    this.header = new HeaderComponent(page);
    this.openCheckingLink=page.locator('//div//a[normalize-space()="Open checking & savings"]')
    this.bundleCheckingSaving=page.locator('//div//a[normalize-space()="Bundle checking & savings"]')

  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/usbank\.com/);
  }

  async verifyPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/U\.S\. Bank/i);
  }
}


