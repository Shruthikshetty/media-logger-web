/**
 * This @file contains the home page object
 * with utility methods
 */

import type { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  // define any locators if required

  constructor(page: Page) {
    this.page = page;
  }

  //method to go to the home page
  async gotoHomePage() {
    await this.page.goto('/');
  }
}
