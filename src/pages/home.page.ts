// import { expect, type Locator, type Page } from '@playwright/test';
// import { HeaderComponent } from '@components/header.component';

// export class HomePage {
//   readonly page: Page;
//   readonly header: HeaderComponent;

//   readonly personalBankingLink: Locator;
//   readonly checkingLink: Locator;
//   readonly savingsLink: Locator;

//   constructor(page: Page) { 
//     this.page = page;

//     this.header = new HeaderComponent(page);

//     this.personalBankingLink = page.getByRole('link', {
//       name: /personal/i
//     });

//     this.checkingLink = page.getByRole('link', {
//       name: /checking/i
//     });

//     this.savingsLink = page.getByRole('link', {
//       name: /savings/i
//     });
//   }

//   async goto(): Promise<void> {
//     await this.page.goto('/');
//   }

//   async verifyPageLoaded(): Promise<void> {
//     await expect(this.page).toHaveURL(/usbank\.com/);
//   }

//   async navigateToChecking(): Promise<void> {
//     await this.checkingLink.click();
//   }

//   async navigateToSavings(): Promise<void> {
//     await this.savingsLink.click();
//   }
// }




// import { expect, type Page } from '@playwright/test';

// export class HomePage {

//   constructor(public page: Page) {}

//   async goto(): Promise<void> {
//     await this.page.goto('/');
//   }

//   async verifyPageLoaded(): Promise<void> {
//     await expect(this.page).toHaveURL(/usbank\.com/);
//   }
// }


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


